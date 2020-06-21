import { Transfer, ERC721 } from "../generated/templates/ERC721/ERC721";
import { Token, Commodity, Gold, Diamond } from "../generated/schema";
import { BigDecimal, BigInt, Address } from "@graphprotocol/graph-ts";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function handleTransfer(event: Transfer): void {

    if (event.params._from == Address.fromString(ZERO_ADDRESS)) {
        mintCommodity(event.address, event.params._tokenId);
    }

    if (event.params._to == Address.fromString(ZERO_ADDRESS)) {
        burnCommodity(event.address.toHexString(), event.params._tokenId);
    }
}

export function mintCommodity(tokenAddress: Address, tokenId: BigInt): void {
    let token = Token.load(tokenAddress.toHexString());
    let id = tokenAddress.toHexString().concat("-").concat(tokenId.toString());

    let commodity = Commodity.load(id);

    if (commodity == null) {
        commodity = new Commodity(id);

        if (token.category == BigInt.fromI32(1)) {
            let gold = new Gold(id);
            let token = ERC721.bind(tokenAddress);
            gold.token = tokenAddress.toHexString();
            gold.isLive = true;

            let ref = token.try_getRefById(tokenId);
            let metadata = token.try_getMetadata(tokenId);

            if (!ref.reverted) {
                gold.reference = ref.value;
            } else {
                gold.reference = "reverted";
            }

            if (!metadata.reverted) {
                /*let json = JSON.parse(metadata.value);
                gold.weight_brute = json.weight_brute;
                gold.weight_fine = json.weight_fine;
                gold.law = json.law;*/
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
            let token = ERC721.bind(tokenAddress);
            diamond.token = tokenAddress.toHexString();
            diamond.isLive = true;

            let ref = token.try_getRefById(tokenId);
            let metadata = token.try_getMetadata(tokenId);

            if (!ref.reverted) {
                diamond.reference = ref.value;
            } else {
                diamond.reference = "reverted";
            }

            if (!metadata.reverted) {
                /*let json = JSON.parse(metadata.value);
                diamond.color = json.color;
                diamond.clarity = json.weight_fine;
                diamond.cut = json.cut;
                diamond.carat_weight = json.carat_weight;*/
            } else {
                diamond.color = "reverted";
                diamond.clarity = "reverted";
                diamond.cut = "reverted";
                diamond.carat_weight = BigDecimal.fromString('0');
            }

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