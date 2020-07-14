import { Deal, Offer, DealCommodity } from "../generated/schema";
import { NewPendingDeal, VoteDeal } from "../generated/PIBP2P/PIBP2P";
import { BigDecimal, Address, BigInt } from "@graphprotocol/graph-ts";
import { NewDeal } from "../generated/PIBP2PCommodity/PIBP2PCommodity";
import { pushDealToOffer, pushDealToOfferCommodity } from "./offer";

export function createDeal(event: NewPendingDeal): void {
    let deal = Deal.load(event.params.dealId.toHexString());
    let offer = Offer.load(event.params.offerId.toHexString());

    if (deal == null) {
        deal = new Deal(event.params.dealId.toHexString());

        deal.offer = event.params.offerId.toHexString();
        deal.seller = offer.owner;
        deal.buyer = event.params.buyer.toHexString();
        deal.sellAmount = event.params.sellAmount;
        deal.buyAmount = event.params.buyAmount;
        deal.sellerVote = BigInt.fromI32(0);
        deal.buyerVote = BigInt.fromI32(0);
        deal.auditorVote = BigInt.fromI32(0);
        deal.isPending = true;
        deal.timestamp = event.block.timestamp;

        deal.save();

        pushDealToOffer(event.params.offerId.toHexString(), event.params.dealId.toHexString());
    }
}

export function createCommodityDeal(event: NewDeal): void {
    let deal = DealCommodity.load(event.params.offerId.toHexString());

    if (deal == null) {
        deal = new DealCommodity(event.params.offerId.toHexString());

        deal.offer = event.params.offerId.toHexString();
        deal.buyer = event.params.buyer.toHexString();
        deal.timestamp = event.block.timestamp;

        deal.save();

        pushDealToOfferCommodity(event.params.offerId.toHexString(), event.params.offerId.toHexString());
    }
}

export function finishDeal(dealId: string, success: boolean, executor: Address): void {
    let deal = Deal.load(dealId);

    if (deal != null) {
        deal.isPending = false;
        deal.isSuccess = success;
        deal.executor = executor;

        deal.save();
    }
}

export function updateVote(event: VoteDeal): void {
    let deal = Deal.load(event.params.dealId.toHexString());

    if (deal != null) {
        deal.aux = event.transaction.from;
        if (event.transaction.from == Address.fromString(deal.buyer)) {
            deal.buyerVote = BigInt.fromI32(event.params.vote);
            deal.sellerVote = BigInt.fromI32(event.params.counterpartVote);
        } else {
            deal.sellerVote = BigInt.fromI32(event.params.vote);
            deal.buyerVote = BigInt.fromI32(event.params.counterpartVote);
        }

        /*let offer = Offer.load(deal.offer);

        if (offer != null) {
            if (event.transaction.from == Address.fromString(offer.owner)) {
                deal.sellerVote = BigInt.fromI32(event.params.vote);
            }
        }

        if (event.transaction.from == Address.fromString(deal.buyer)) {
            deal.buyerVote = BigInt.fromI32(event.params.vote);
        }*/

        deal.save();
    }
}