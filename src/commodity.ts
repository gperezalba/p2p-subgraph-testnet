import { Transfer, ERC721, NewJson, FakeToken } from "../generated/templates/ERC721/ERC721";
import { Token, Commodity, Diamond, Gold } from "../generated/schema";
import { BigDecimal, BigInt, Address } from "@graphprotocol/graph-ts";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function handleTransfer(event: Transfer): void {

    if (event.params._to == Address.fromString(ZERO_ADDRESS)) {
        burnCommodity(event.address.toHexString(), event.params._tokenId);
    }

    if (event.params._from == Address.fromString(ZERO_ADDRESS)) {
        mintCommodity(event.address.toHexString(), event.params._tokenId);
    }
}

export function handleNewJson(event: NewJson): void {
    let token = Token.load(event.address.toHexString());
    let id = event.address.toHexString().concat("-").concat(event.params.tokenId.toString());

    let commodity = Commodity.load(id);

    if (commodity == null) {
        commodity = new Commodity(id);
    }

    commodity.token = token.id;
    commodity.tokenId = event.params.tokenId;

    let tokenNFT = ERC721.bind(event.address);
    let ref = tokenNFT.try_getRefById(event.params.tokenId);
    if (!ref.reverted) {
        commodity.reference = ref.value;
    } else {
        commodity.reference = "reverted";
    }

    commodity.isLive = true;
    commodity.isFake = false;
    commodity.isP2P = false;
    commodity.metadata = event.params.json;

    let json: Array<BigInt> = event.params.json;
    commodity.key0 = json[0];
    commodity.key1 = json[1];
    commodity.key2 = json[2];
    commodity.key3 = json[3];
    commodity.key4 = json[4];

    commodity.nftCategory = token.nftCategory;

    /******************** */

    let gold = Gold.load(id);
    let diamond = Diamond.load(id);

    if (token.nftCategory == BigInt.fromI32(1)) {
        if (gold == null) {
            gold = new Gold(id);
        }
    } else {
        if (diamond == null) {
            diamond = new Diamond(id);
        }
    }

    if (token.nftCategory == BigInt.fromI32(1)) {
        let tokenNFT = ERC721.bind(event.address);
        gold.token = event.address.toHexString();
        gold.isLive = true;
        gold.isFake = false;

        let ref = tokenNFT.try_getRefById(event.params.tokenId);

        if (!ref.reverted) {
            gold.reference = ref.value;
        } else {
            gold.reference = "reverted";
        }

        let json: Array<BigInt> = event.params.json;
        gold.weight_brute = json[0];
        gold.law = json[1];
        gold.weight_fine = json[0].times(json[1]).div(BigInt.fromI32(1000).times(getOneEther()));

        gold.save();
        commodity.gold = id;
    } else if (token.nftCategory == BigInt.fromI32(2)) {
        let token = ERC721.bind(event.address);
        diamond.token = event.address.toHexString();
        diamond.isLive = true;
        diamond.isFake = false;

        let ref = token.try_getRefById(event.params.tokenId);

        if (!ref.reverted) {
            diamond.reference = ref.value;
        } else {
            diamond.reference = "reverted";
        }

        let json: Array<BigInt> = event.params.json;
        diamond.color = json[0];
        diamond.clarity = json[1];
        diamond.cut = json[2];
        diamond.carat_weight = json[3];

        diamond.save();
        commodity.diamond = id;
    }


    /******************** */

    commodity.save();
}

export function pushP2P(tokenAddress: string, tokenId: BigInt): void {
    let id = tokenAddress.concat("-").concat(tokenId.toString());
    let commodity = Commodity.load(id);

    if (commodity == null) {
        commodity = new Commodity(id);
    }

    commodity.isP2P = true;

    commodity.save();
}

export function popP2P(tokenAddress: string, tokenId: BigInt): void {
    let token = Token.load(tokenAddress);
    let id = tokenAddress.concat("-").concat(tokenId.toString());
    let commodity = Commodity.load(id);

    if (commodity == null) {
        commodity = new Commodity(id);
    }

    commodity.isP2P = false;

    commodity.save();
}

function burnCommodity(tokenAddress: string, tokenId: BigInt): void {
    let id = tokenAddress.concat("-").concat(tokenId.toString());
    let commodity = Commodity.load(id);

    if (commodity != null) {
        commodity.isLive = false;
    }

    commodity.save();
}

export function mintCommodity(tokenAddress: string, tokenId: BigInt): void {
    let id = tokenAddress.concat("-").concat(tokenId.toString());
    let commodity = Commodity.load(id);

    if (commodity == null) {
        commodity = new Commodity(id);
    }

    commodity.isLive = true;

    commodity.save();
}


export function handleFakeToken(event: FakeToken): void {
    let id = event.address.toHexString().concat("-").concat(event.params.tokenId.toString());
    let commodity = Commodity.load(id);

    if (commodity != null) {
        commodity.isFake = true;
    }

    commodity.save();
}

export function getOneEther(): BigInt {
    let n = BigInt.fromI32(1);
    for(let i = 0; i < 18; i++) {
        n = n.times(BigInt.fromI32(10));
    }
    return n;
}