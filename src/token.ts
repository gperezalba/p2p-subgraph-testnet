import { Address, BigDecimal, Bytes, BigInt } from "@graphprotocol/graph-ts"

import { 
    Token
} from "../generated/schema"

import { Token as TokenContract } from "../generated/templates/Token/Token"
import { ERC721 as ERC721Template } from "../generated/templates"

const PI_ADDRESS = "0x0000000000000000000000000000000000000000";

export function createToken(tokenAddress: Address, isNFT: boolean, category: BigInt): void {
    let token = Token.load(tokenAddress.toHexString());
  
    if (token == null) {
        token = new Token(tokenAddress.toHexString());

        if (tokenAddress.toHexString() == "0x2a3ec23c9d781aa431d300b2475b305cad27d98d") {
            token.tokenSymbol = "USDs";
            token.tokenName = "USD Invent";
        } else if (tokenAddress.toHexString() == "0x2bD64c5A25fcd9c124E9e5d20B582D8a8942b2Cc") {
            token.tokenSymbol = "VESs";
            token.tokenName = "VES Invent";
        } else {
            if (tokenAddress.toHexString() != PI_ADDRESS) {
            
                let contract = TokenContract.bind(tokenAddress);
            
                let symbol = contract.try_symbol();
                let name = contract.try_name();

                if (!symbol.reverted) {
                    token.tokenSymbol = symbol.value;
                } else {
                    token.tokenSymbol = "";
                }

                if (!name.reverted) {
                    token.tokenName = name.value;
                } else {
                    token.tokenName = "";
                }

            } else {
                token.tokenSymbol = "PI";
                token.tokenName = "PI";
            }
        }
  
        

        token.isNFT = isNFT;
        token.category = category;

        if (isNFT) {
            ERC721Template.create(tokenAddress);
        }

    }
  
    token.save();
}
