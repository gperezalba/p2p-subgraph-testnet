import { NewOffer, UpdateOffer, CancelOffer } from "../generated/PIBP2P/PIBP2P";
import { NewOffer as NewOfferCommodity, UpdateOffer as UpdateOfferCommodity, CancelOffer as CancelOfferCommodity } from "../generated/PIBP2PCommodity/PIBP2PCommodity";
import { Offer, OfferCommodity, Commodity, Token, Gold } from "../generated/schema";
import { pushP2P } from "./commodity";
import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";

export function createOffer(event: NewOffer): void {
    let offer = new Offer(event.params.offerId.toHexString());

    offer.owner = event.params.owner.toHexString();
    offer.sellToken = event.params.sellToken.toHexString();
    offer.buyToken = event.params.buyToken.toHexString();
    offer.sellAmount = event.params.sellAmount.toBigDecimal();
    offer.buyAmount = event.params.buyAmount.toBigDecimal();
    offer.isPartial = event.params.isPartial;
    offer.isBuyFiat = event.params.isBuyFiat;
    offer.auditor = event.params.auditor;
    offer.description = event.params.description;
    offer.isOpen = true;
    offer.timestamp = event.block.timestamp;
    offer.price = event.params.buyAmount.toBigDecimal().div(event.params.sellAmount.toBigDecimal());

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
    offer.sellToken = event.params.sellToken.toHexString();
    offer.buyToken = event.params.buyToken.toHexString();
    pushP2P(event.params.sellToken.toHexString(), event.params.sellId);
    let commodityId = event.params.sellToken.toHexString().concat("-").concat(event.params.sellId.toString());
    offer.sellId = commodityId;
    offer.buyAmount = event.params.buyAmount.toBigDecimal();
    offer.description = event.params.description;
    offer.isOpen = true;
    offer.timestamp = event.block.timestamp;
    offer.price = event.params.buyAmount.toBigDecimal();
    let token = Token.load(event.params.sellToken.toHexString());

    if (token.category == BigInt.fromI32(1)) {
        let gold = Gold.load(event.params.sellId.toHexString());
        offer.price_per_brute_weight = event.params.buyAmount.toBigDecimal().div(gold.weight_brute as BigDecimal);
        offer.price_per_fine_weight = event.params.buyAmount.toBigDecimal().div(gold.weight_fine as BigDecimal);
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

    offer.sellAmount = event.params.sellAmount.toBigDecimal();
    offer.buyAmount = event.params.buyAmount.toBigDecimal();
    offer.price = event.params.buyAmount.toBigDecimal().div(event.params.sellAmount.toBigDecimal());

    offer.save();
}

export function updateOfferCommodity(event: UpdateOfferCommodity): void {
    let offer = OfferCommodity.load(event.params.offerId.toHexString());

    offer.buyAmount = event.params.buyAmount.toBigDecimal();
    offer.price = event.params.buyAmount.toBigDecimal();
    let token = Token.load(offer.sellToken);

    if (token.category == BigInt.fromI32(1)) {
        let gold = Gold.load(event.params.sellId.toHexString());
        offer.price_per_brute_weight = event.params.buyAmount.toBigDecimal().div(gold.weight_brute as BigDecimal);
        offer.price_per_fine_weight = event.params.buyAmount.toBigDecimal().div(gold.weight_fine as BigDecimal);
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

/*function createCommodity(event: NewOfferCommodity): void {
    let token = Token.load(event.params.sellToken.toHexString());
    let id = event.params.sellToken.toHexString().concat("-").concat(event.params.sellId.toString());
    let commodity = new Commodity(id);

    if (token.category == BigInt.fromI32(1)) {
        let gold = new Gold(id);
        let token = ERC721.bind(event.params.sellToken);
        gold.token = event.params.sellToken.toHexString();

        let ref = token.try_getRefById(event.params.sellId);
        let metadata = token.try_getMetadata(event.params.sellId);

        if (!ref.reverted) {
            gold.reference = ref.value;
        } else {
            gold.reference = "reverted";
        }

        if (!metadata.reverted) {
            let json = JSON.parse(metadata.value);
            gold.weight_brute = json.weight_brute;
            gold.weight_fine = json.weight_fine;
            gold.law = json.law;
            gold.metadata = metadata.value;
        } else {
            gold.weight_brute = BigDecimal.fromString('0');
            gold.weight_fine = BigDecimal.fromString('0');
            gold.law = BigDecimal.fromString('0');
        }

        gold.save();
        commodity.gold = id;
    } else if (token.category == BigInt.fromI32(2)) {
        let diamond = new Diamond(id);
        let token = ERC721.bind(event.params.sellToken);
        diamond.token = event.params.sellToken.toHexString();

        let ref = token.try_getRefById(event.params.sellId);
        let metadata = token.try_getMetadata(event.params.sellId);

        if (!ref.reverted) {
            diamond.reference = ref.value;
        } else {
            diamond.reference = "reverted";
        }

        if (!metadata.reverted) {
            let json = JSON.parse(metadata.value);
            diamond.color = json.color;
            diamond.clarity = json.weight_fine;
            diamond.cut = json.cut;
            diamond.carat_weight = json.carat_weight;
        } else {
            diamond.color = "reverted";
            diamond.clarity = "reverted";
            diamond.cut = "reverted";
            diamond.carat_weight = BigDecimal.fromString('0');
        }

        diamond.save();
        commodity.diamond = id;
    }

    commodity.save();
}*/