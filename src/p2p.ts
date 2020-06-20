import { BigInt } from "@graphprotocol/graph-ts"
import {
  PIBP2P,
  NewOffer,
  NewDeal,
  NewPendingDeal,
  UpdateOffer,
  CancelOffer,
  VoteDeal,
  AuditorNotification
} from "../generated/PIBP2P/PIBP2P"
import { Offer, Deal, Auditor } from "../generated/schema"
import { pushOffer, pushPendingDeal, updateReputation } from "./user";
import { createDeal, finishDeal, updateVote } from "./deal";
import { createOffer, updateOffer, cancelOffer } from "./offer";

export function handleNewOffer(event: NewOffer): void {
  createOffer(event);
  pushOffer(event.params.owner.toHexString(), event.params.offerId.toHexString());
}

export function handleNewDeal(event: NewDeal): void {
  finishDeal(event.params.dealId.toHexString(), event.params.success, event.params.sender);
  let deal = Deal.load(event.params.dealId.toHexString());
  let offer = Offer.load(deal.offer);
  updateReputation(deal.buyer, event.address);
  updateReputation(offer.owner, event.address);
}

export function handleNewPendingDeal(event: NewPendingDeal): void {
  createDeal(event);
  pushPendingDeal(event.params.buyer.toHexString(), event.params.dealId.toHexString());
  let offer = Offer.load(event.params.offerId.toHexString());
  pushPendingDeal(offer.owner, event.params.dealId.toHexString());
}

export function handleUpdateOffer(event: UpdateOffer): void {
  updateOffer(event);
}

export function handleCancelOffer(event: CancelOffer): void {
  cancelOffer(event);
}

export function handleVoteDeal(event: VoteDeal): void {
  updateVote(event);
}

export function handleAuditorNotification(event: AuditorNotification): void {
  let deal = Deal.load(event.params.dealId.toHexString());
  let offer = Offer.load(deal.offer);
  let auditor = Auditor.load(offer.auditor.toHexString());

  if (auditor == null) {
    auditor = new Auditor(offer.auditor.toHexString());
  }

  let requests = auditor.requests;
  requests.push(deal.id);
  auditor.requests = requests;

  auditor.save();
}
