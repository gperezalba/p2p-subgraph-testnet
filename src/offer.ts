import { NewOffer, UpdateOffer, CancelOffer } from "../generated/PIBP2P/PIBP2P";
import { NewOffer as NewOfferCommodity, UpdateOffer as UpdateOfferCommodity, CancelOffer as CancelOfferCommodity } from "../generated/PIBP2PCommodity/PIBP2PCommodity";
import { Offer, OfferCommodity, Commodity, Token, Gold } from "../generated/schema";
import { pushP2P } from "./commodity";
import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import { getNickname } from "./user";
import { createToken } from "./token";

const ONE_ETHER = 1000000000000000000;

export function createOffer(event: NewOffer): void {
    let offer = new Offer(event.params.offerId.toHexString());

    offer.owner = event.params.owner.toHexString();
    offer.name = getNickname(event.params.owner.toHexString());
    offer.sellToken = event.params.sellToken.toHexString();
    offer.buyToken = event.params.buyToken.toHexString();
    offer.initialSellAmount = event.params.sellAmount;
    offer.sellAmount = event.params.sellAmount;
    offer.buyAmount = event.params.buyAmount;
    offer.isPartial = event.params.isPartial;
    offer.isBuyFiat = event.params.isBuyFiat;
    offer.auditor = event.params.auditor;
    let limits = event.params.limits;
    offer.minDealAmount = limits[0];
    offer.maxDealAmount = limits[1];
    offer.minReputation = limits[2];
    offer.description = event.params.description;
    offer.isOpen = true;
    offer.timestamp = event.block.timestamp;
    offer.price = event.params.buyAmount.times(getOneEther()).div(event.params.sellAmount);

    let metadata: Array<BigInt> = event.params.metadata
    
    let isCountry = true;
    let countries: Array<BigInt> = [];
    let methods: Array<BigInt> = [];

    for (let i = 0; i < metadata.length; i++) {

        if (isCountry) {
            countries.push(metadata[i]);
            if (metadata[i] == BigInt.fromI32(0)) {
                isCountry = false;
            }
        } else {
            methods.push(metadata[i]);
        }
    }

    offer.country = countries;
    offer.payMethod = methods;

    offer.save();
}

export function createOfferCommodity(event: NewOfferCommodity): void {
    let offer = new OfferCommodity(event.params.offerId.toHexString());

    offer.owner = event.params.owner.toHexString();
    offer.name = getNickname(event.params.owner.toHexString());
    offer.sellToken = event.params.sellToken.toHexString();
    offer.buyToken = event.params.buyToken.toHexString();
    pushP2P(event.params.sellToken.toHexString(), event.params.sellId);
    let commodityId = event.params.sellToken.toHexString().concat("-").concat(event.params.sellId.toString());
    offer.sellId = commodityId;
    offer.buyAmount = event.params.buyAmount;
    offer.description = event.params.description;
    offer.isOpen = true;
    offer.timestamp = event.block.timestamp;
    offer.price = event.params.buyAmount;
    let token = Token.load(event.params.sellToken.toHexString());

    if (token.category == BigInt.fromI32(1)) {
        let gold = Gold.load(commodityId);
        offer.price_per_brute_weight = event.params.buyAmount.times(getOneEther()).div(gold.weight_brute as BigInt);
        offer.price_per_fine_weight = event.params.buyAmount.times(getOneEther()).div(gold.weight_fine as BigInt);
    }

    let metadata: Array<BigInt> = event.params.metadata
    
    let isCountry = true;
    let countries: Array<BigInt> = [];
    let methods: Array<BigInt> = [];

    for (let i = 0; i < metadata.length; i++) {

        if (isCountry) {
            countries.push(metadata[i]);
            if (metadata[i] == BigInt.fromI32(0)) {
                isCountry = false;
            }
        } else {
            methods.push(metadata[i]);
        }
    }

    offer.country = countries;
    offer.payMethod = methods;

    offer.save();
}

export function updateOffer(event: UpdateOffer): void {
    let offer = Offer.load(event.params.offerId.toHexString());

    if ((event.params.sellAmount == BigInt.fromI32(0)) && (event.params.buyAmount == BigInt.fromI32(0))) {
        offer.isOpen = false;
        offer.sellAmount = event.params.sellAmount;
        offer.buyAmount = event.params.buyAmount;
    } else {
        offer.sellAmount = event.params.sellAmount;
        offer.buyAmount = event.params.buyAmount;
        offer.price = event.params.buyAmount.times(getOneEther()).div(event.params.sellAmount as BigInt);
    }

    offer.save();
}

export function updateOfferCommodity(event: UpdateOfferCommodity): void {
    let offer = OfferCommodity.load(event.params.offerId.toHexString());
    let commodityId = offer.sellToken.concat("-").concat(event.params.sellId.toString());

    offer.buyAmount = event.params.buyAmount;
    offer.price = event.params.buyAmount;
    let token = Token.load(offer.sellToken);

    if (token.category == BigInt.fromI32(1)) {
        let gold = Gold.load(commodityId);
        offer.price_per_brute_weight = event.params.buyAmount.times(getOneEther()).div(gold.weight_brute as BigInt);
        offer.price_per_fine_weight = event.params.buyAmount.times(getOneEther()).div(gold.weight_fine as BigInt);
    }

    if ((event.params.sellId == BigInt.fromI32(0)) && (event.params.buyAmount == BigInt.fromI32(0))) {
        offer.isOpen = false;
    }

    offer.save();
}

export function cancelOffer(event: CancelOffer): void {
    let offer = Offer.load(event.params.offerId.toHexString());

    offer.isOpen = false;

    offer.save();
}

export function cancelOfferCommodity(event: CancelOfferCommodity): void {
    let offer = OfferCommodity.load(event.params.offerId.toHexString());

    offer.isOpen = false;

    offer.save();
}

export function getOneEther(): BigInt {
    let n = BigInt.fromI32(1);
    for(let i = 0; i < 18; i++) {
        n = n.times(BigInt.fromI32(10));
    }
    return n;
}