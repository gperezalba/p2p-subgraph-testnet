import { Address, BigDecimal, Bytes, BigInt } from "@graphprotocol/graph-ts"

import { 
    Token
} from "../generated/schema"

import { Token as TokenContract } from "../generated/templates/Token/Token"

const PI_ADDRESS = "0x0000000000000000000000000000000000000000";

export function createToken(tokenAddress: Address, isNFT: boolean, category: BigInt): void {
    let token = Token.load(tokenAddress.toHexString());
  
    if (token == null) {
        token = new Token(tokenAddress.toHexString());
  
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

        token.isNFT = isNFT;
        token.category = category.toBigDecimal();

    }
  
    token.save();
}
