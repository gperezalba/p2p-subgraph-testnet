import { User } from "../generated/schema";
import { BigInt, Address } from "@graphprotocol/graph-ts";
import { PIBP2P } from "../generated/PIBP2P/PIBP2P";
import { NameService, CreateName } from "../generated/templates/NameService/NameService";

export function handleCreateName(event: CreateName): void {
    createUserIfNull(event.params.wallet.toHexString());
}

export function pushOffer(userId: string, offerId: string): void {
    createUserIfNull(userId);
    let user = User.load(userId);

    let offers = user.offers;
    offers.push(offerId);
    user.offers = offers;

    user.save();
}

export function pushCommodityOffer(userId: string, offerId: string): void {
    createUserIfNull(userId);
    let user = User.load(userId);

    let offers = user.commodityOffers;
    offers.push(offerId);
    user.commodityOffers = offers;

    user.save();
}

export function pushPendingDeal(userId: string, dealId: string): void {
    createUserIfNull(userId);
    let user = User.load(userId);

    let deals = user.deals;
    deals.push(dealId);
    user.deals = deals;

    user.save();
}

export function pushCommodityDeal(userId: string, dealId: string): void {
    createUserIfNull(userId);
    let user = User.load(userId);

    let deals = user.commodityDeals;
    deals.push(dealId);
    user.commodityDeals = deals;

    user.save();
}

export function updateReputation(userId: string, p2pAddress: Address): void {
    let user = User.load(userId);

    let p2p = PIBP2P.bind(p2pAddress);
    let goodReputation = p2p.try_goodReputation(Address.fromString(userId));
    let badReputation = p2p.try_badReputation(Address.fromString(userId));

    if (!goodReputation.reverted) {
        user.goodReputation = goodReputation.value;
    }

    if (!badReputation.reverted) {
        user.badReputation = badReputation.value;
    }

    user.save();

}

export function createUserIfNull(userId: string): void {
    let user = User.load(userId);

    if (user == null) {
        user = new User(userId);
        user.offers = [];
        user.commodityOffers = [];
        user.deals = [];
        user.commodityDeals = [];
        user.goodReputation = BigInt.fromI32(0);
        user.badReputation = BigInt.fromI32(0);
        user.name = getNickname(userId);
        user.offchainReputation = BigInt.fromI32(0);
        user.isDealLocked = false;

        user.save();
    }
}

export function getNickname(walletAddress: string): string {
    let nameService = NameService.bind(Address.fromString("0x6eF6DeD453c1e82B0B7ebC082E0Be4b6482F7fdC"));
    let name = nameService.try_name(Address.fromString(walletAddress));

    if (!name.reverted) {
        return name.value;
    } else {
        return "reverted";
    }
}