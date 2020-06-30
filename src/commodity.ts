import { Transfer, ERC721, NewJson, FakeToken } from "../generated/templates/ERC721/ERC721";
import { Token, Commodity, Gold, Diamond } from "../generated/schema";
import { BigDecimal, BigInt, Address } from "@graphprotocol/graph-ts";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function handleTransfer(event: Transfer): void {

    if (event.params._to == Address.fromString(ZERO_ADDRESS)) {
        burnCommodity(event.address.toHexString(), event.params._tokenId);
    }
}

export function handleNewJson(event: NewJson): void {
    let token = Token.load(event.address.toHexString());
    let id = event.address.toHexString().concat("-").concat(event.params.tokenId.toString());

    let commodity = Commodity.load(id);

    if (commodity == null) {
        commodity = new Commodity(id);

        commodity.tokenId = event.params.tokenId;

        if (token.category == BigInt.fromI32(1)) {
            let gold = new Gold(id);
            let token = ERC721.bind(event.address);
            gold.token = event.address.toHexString();
            gold.isLive = true;
            gold.isP2P = false;

            let ref = token.try_getRefById(event.params.tokenId);

            if (!ref.reverted) {
                gold.reference = ref.value;
            } else {
                gold.reference = "reverted";
            }

            let json: Array<BigInt> = event.params.json;
            gold.weight_brute = json[0];
            gold.law = json[1];
            gold.weight_fine = json[2];

            gold.save();
            commodity.gold = id;
        } else if (token.category == BigInt.fromI32(2)) {
            let diamond = new Diamond(id);
            let token = ERC721.bind(event.address);
            diamond.token = event.address.toHexString();
            diamond.isLive = true;

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
    } else {
        if (token.category == BigInt.fromI32(1)) {
            let gold = new Gold(id);
            
            gold.isLive = true;

            gold.save();
        } else if (token.category == BigInt.fromI32(2)) {
            let diamond = new Diamond(id);
            
            diamond.isLive = true;

            diamond.save();
        }
    }

    commodity.save();
}

export function pushP2P(tokenAddress: string, tokenId: BigInt): void {
    let token = Token.load(tokenAddress);
    let id = tokenAddress.concat("-").concat(tokenId.toString());

    if (token.category == BigInt.fromI32(1)) {
        let gold = Gold.load(id);
        
        gold.isP2P = true;

        gold.save();
    } else if (token.category == BigInt.fromI32(2)) {
        let diamond = Diamond.load(id);
        
        diamond.isP2P = true;

        diamond.save();
    }
}

export function popP2P(tokenAddress: string, tokenId: BigInt): void {
    let token = Token.load(tokenAddress);
    let id = tokenAddress.concat("-").concat(tokenId.toString());

    if (token.category == BigInt.fromI32(1)) {
        let gold = Gold.load(id);
        
        gold.isP2P = false;

        gold.save();
    } else if (token.category == BigInt.fromI32(2)) {
        let diamond = Diamond.load(id);
        
        diamond.isP2P = false;

        diamond.save();
    }
}

function burnCommodity(tokenAddress: string, tokenId: BigInt): void {
    let token = Token.load(tokenAddress);
    let id = tokenAddress.concat("-").concat(tokenId.toString());

    if (token.category == BigInt.fromI32(1)) {
        let gold = Gold.load(id);
        
        gold.isLive = false;

        gold.save();
    } else if (token.category == BigInt.fromI32(2)) {
        let diamond = Diamond.load(id);
        
        diamond.isLive = false;

        diamond.save();
    }
}


export function handleFakeToken(event: FakeToken): void {
    let token = Token.load(event.address.toHexString());
    let id = event.address.toHexString().concat("-").concat(event.params.tokenId.toString());

    if (token.category == BigInt.fromI32(1)) {
        let gold = Gold.load(id);
        
        gold.isFake = true;

        gold.save();
    } else if (token.category == BigInt.fromI32(2)) {
        let diamond = Diamond.load(id);
        
        diamond.isFake = true;

        diamond.save();
    }
}