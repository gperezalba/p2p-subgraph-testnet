import { NewOffer, NewDeal, UpdateOffer, CancelOffer } from "../generated/PIBP2PCommodity/PIBP2PCommodity";
import { createOfferCommodity, updateOfferCommodity, cancelOfferCommodity } from "./offer";
import { pushCommodityOffer, pushCommodityDeal } from "./user";
import { createCommodityDeal } from "./deal";
import { OfferCommodity, Commodity } from "../generated/schema";
import { popP2P } from "./commodity";


export function handleNewOffer(event: NewOffer): void {
    createOfferCommodity(event);
    pushCommodityOffer(event.params.owner.toHexString(), event.params.offerId.toHexString());
}

export function handleNewDeal(event: NewDeal): void {
    createCommodityDeal(event);
    let offer = OfferCommodity.load(event.params.offerId.toHexString());
    if (offer != null) {
        pushCommodityDeal(offer.owner, event.params.offerId.toHexString());
    }
    
    pushCommodityDeal(event.params.buyer.toHexString(), event.params.offerId.toHexString());
    let commodity = Commodity.load(offer.sellId)
    popP2P(offer.sellToken, commodity.tokenId);
}

export function handleUpdateOffer(event: UpdateOffer): void {
    updateOfferCommodity(event);
}

export function handleCancelOffer(event: CancelOffer): void {
    cancelOfferCommodity(event);
}