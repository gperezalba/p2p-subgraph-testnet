// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class NewOffer extends EthereumEvent {
  get params(): NewOffer__Params {
    return new NewOffer__Params(this);
  }
}

export class NewOffer__Params {
  _event: NewOffer;

  constructor(event: NewOffer) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sellToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get buyToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get sellId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get sellAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get buyAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get isPartial(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get minDealAmount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get maxDealAmount(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get description(): string {
    return this._event.parameters[9].value.toString();
  }

  get offerId(): Bytes {
    return this._event.parameters[10].value.toBytes();
  }

  get metadata(): Array<BigInt> {
    return this._event.parameters[11].value.toBigIntArray();
  }
}

export class NewDeal extends EthereumEvent {
  get params(): NewDeal__Params {
    return new NewDeal__Params(this);
  }
}

export class NewDeal__Params {
  _event: NewDeal;

  constructor(event: NewDeal) {
    this._event = event;
  }

  get offerId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _sellAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _buyAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class UpdateOffer extends EthereumEvent {
  get params(): UpdateOffer__Params {
    return new UpdateOffer__Params(this);
  }
}

export class UpdateOffer__Params {
  _event: UpdateOffer;

  constructor(event: UpdateOffer) {
    this._event = event;
  }

  get offerId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sellId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get sellAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get buyAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CancelOffer extends EthereumEvent {
  get params(): CancelOffer__Params {
    return new CancelOffer__Params(this);
  }
}

export class CancelOffer__Params {
  _event: CancelOffer;

  constructor(event: CancelOffer) {
    this._event = event;
  }

  get offerId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class NewCommission extends EthereumEvent {
  get params(): NewCommission__Params {
    return new NewCommission__Params(this);
  }
}

export class NewCommission__Params {
  _event: NewCommission;

  constructor(event: NewCommission) {
    this._event = event;
  }

  get commission(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PIBP2PPackable__offersResult {
  value0: Address;
  value1: Address;
  value2: Bytes;
  value3: BigInt;
  value4: Address;
  value5: BigInt;
  value6: boolean;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: Bytes,
    value3: BigInt,
    value4: Address,
    value5: BigInt,
    value6: boolean,
    value7: BigInt,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromFixedBytes(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromAddress(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromBoolean(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    return map;
  }
}

export class PIBP2PPackable extends SmartContract {
  static bind(address: Address): PIBP2PPackable {
    return new PIBP2PPackable("PIBP2PPackable", address);
  }

  offers(param0: Bytes): PIBP2PPackable__offersResult {
    let result = super.call("offers", [EthereumValue.fromFixedBytes(param0)]);

    return new PIBP2PPackable__offersResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBytes(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBoolean(),
      result[7].toBigInt(),
      result[8].toBigInt()
    );
  }

  try_offers(param0: Bytes): CallResult<PIBP2PPackable__offersResult> {
    let result = super.tryCall("offers", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new PIBP2PPackable__offersResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBytes(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBoolean(),
        value[7].toBigInt(),
        value[8].toBigInt()
      )
    );
  }

  on(): boolean {
    let result = super.call("on", []);

    return result[0].toBoolean();
  }

  try_on(): CallResult<boolean> {
    let result = super.tryCall("on", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  salt(): BigInt {
    let result = super.call("salt", []);

    return result[0].toBigInt();
  }

  try_salt(): CallResult<BigInt> {
    let result = super.tryCall("salt", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  commission(): BigInt {
    let result = super.call("commission", []);

    return result[0].toBigInt();
  }

  try_commission(): CallResult<BigInt> {
    let result = super.tryCall("commission", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  controller(): Address {
    let result = super.call("controller", []);

    return result[0].toAddress();
  }

  try_controller(): CallResult<Address> {
    let result = super.tryCall("controller", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  onPNFTReceived(
    _operator: Address,
    _from: Address,
    _tokenId: Bytes,
    _amount: BigInt,
    _data: Bytes
  ): Bytes {
    let result = super.call("onPNFTReceived", [
      EthereumValue.fromAddress(_operator),
      EthereumValue.fromAddress(_from),
      EthereumValue.fromFixedBytes(_tokenId),
      EthereumValue.fromUnsignedBigInt(_amount),
      EthereumValue.fromBytes(_data)
    ]);

    return result[0].toBytes();
  }

  try_onPNFTReceived(
    _operator: Address,
    _from: Address,
    _tokenId: Bytes,
    _amount: BigInt,
    _data: Bytes
  ): CallResult<Bytes> {
    let result = super.tryCall("onPNFTReceived", [
      EthereumValue.fromAddress(_operator),
      EthereumValue.fromAddress(_from),
      EthereumValue.fromFixedBytes(_tokenId),
      EthereumValue.fromUnsignedBigInt(_amount),
      EthereumValue.fromBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _controllerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _commission(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SetCommissionCall extends EthereumCall {
  get inputs(): SetCommissionCall__Inputs {
    return new SetCommissionCall__Inputs(this);
  }

  get outputs(): SetCommissionCall__Outputs {
    return new SetCommissionCall__Outputs(this);
  }
}

export class SetCommissionCall__Inputs {
  _call: SetCommissionCall;

  constructor(call: SetCommissionCall) {
    this._call = call;
  }

  get _newCommission(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCommissionCall__Outputs {
  _call: SetCommissionCall;

  constructor(call: SetCommissionCall) {
    this._call = call;
  }
}

export class ToggleSwitchCall extends EthereumCall {
  get inputs(): ToggleSwitchCall__Inputs {
    return new ToggleSwitchCall__Inputs(this);
  }

  get outputs(): ToggleSwitchCall__Outputs {
    return new ToggleSwitchCall__Outputs(this);
  }
}

export class ToggleSwitchCall__Inputs {
  _call: ToggleSwitchCall;

  constructor(call: ToggleSwitchCall) {
    this._call = call;
  }
}

export class ToggleSwitchCall__Outputs {
  _call: ToggleSwitchCall;

  constructor(call: ToggleSwitchCall) {
    this._call = call;
  }
}

export class OfferCall extends EthereumCall {
  get inputs(): OfferCall__Inputs {
    return new OfferCall__Inputs(this);
  }

  get outputs(): OfferCall__Outputs {
    return new OfferCall__Outputs(this);
  }
}

export class OfferCall__Inputs {
  _call: OfferCall;

  constructor(call: OfferCall) {
    this._call = call;
  }

  get _sellToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _sellId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _sellAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _buyToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _buyAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _isPartial(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _minDealAmount(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _maxDealAmount(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _description(): string {
    return this._call.inputValues[8].value.toString();
  }

  get _metadata(): Array<BigInt> {
    return this._call.inputValues[9].value.toBigIntArray();
  }
}

export class OfferCall__Outputs {
  _call: OfferCall;

  constructor(call: OfferCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class DealCall extends EthereumCall {
  get inputs(): DealCall__Inputs {
    return new DealCall__Inputs(this);
  }

  get outputs(): DealCall__Outputs {
    return new DealCall__Outputs(this);
  }
}

export class DealCall__Inputs {
  _call: DealCall;

  constructor(call: DealCall) {
    this._call = call;
  }

  get _offerId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _buyAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DealCall__Outputs {
  _call: DealCall;

  constructor(call: DealCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class CancelOfferCall extends EthereumCall {
  get inputs(): CancelOfferCall__Inputs {
    return new CancelOfferCall__Inputs(this);
  }

  get outputs(): CancelOfferCall__Outputs {
    return new CancelOfferCall__Outputs(this);
  }
}

export class CancelOfferCall__Inputs {
  _call: CancelOfferCall;

  constructor(call: CancelOfferCall) {
    this._call = call;
  }

  get _offerId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CancelOfferCall__Outputs {
  _call: CancelOfferCall;

  constructor(call: CancelOfferCall) {
    this._call = call;
  }
}

export class UpdateBuyAmountCall extends EthereumCall {
  get inputs(): UpdateBuyAmountCall__Inputs {
    return new UpdateBuyAmountCall__Inputs(this);
  }

  get outputs(): UpdateBuyAmountCall__Outputs {
    return new UpdateBuyAmountCall__Outputs(this);
  }
}

export class UpdateBuyAmountCall__Inputs {
  _call: UpdateBuyAmountCall;

  constructor(call: UpdateBuyAmountCall) {
    this._call = call;
  }

  get _offerId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _buyAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateBuyAmountCall__Outputs {
  _call: UpdateBuyAmountCall;

  constructor(call: UpdateBuyAmountCall) {
    this._call = call;
  }
}

export class OnPNFTReceivedCall extends EthereumCall {
  get inputs(): OnPNFTReceivedCall__Inputs {
    return new OnPNFTReceivedCall__Inputs(this);
  }

  get outputs(): OnPNFTReceivedCall__Outputs {
    return new OnPNFTReceivedCall__Outputs(this);
  }
}

export class OnPNFTReceivedCall__Inputs {
  _call: OnPNFTReceivedCall;

  constructor(call: OnPNFTReceivedCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnPNFTReceivedCall__Outputs {
  _call: OnPNFTReceivedCall;

  constructor(call: OnPNFTReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class TokenFallbackCall extends EthereumCall {
  get inputs(): TokenFallbackCall__Inputs {
    return new TokenFallbackCall__Inputs(this);
  }

  get outputs(): TokenFallbackCall__Outputs {
    return new TokenFallbackCall__Outputs(this);
  }
}

export class TokenFallbackCall__Inputs {
  _call: TokenFallbackCall;

  constructor(call: TokenFallbackCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TokenFallbackCall__Outputs {
  _call: TokenFallbackCall;

  constructor(call: TokenFallbackCall) {
    this._call = call;
  }
}
