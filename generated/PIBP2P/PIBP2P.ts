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

  get sellAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get buyAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get isPartial(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get isBuyFiat(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get limits(): Array<BigInt> {
    return this._event.parameters[7].value.toBigIntArray();
  }

  get accounts(): Array<Address> {
    return this._event.parameters[8].value.toAddressArray();
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

  get dealId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get success(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewPendingDeal extends EthereumEvent {
  get params(): NewPendingDeal__Params {
    return new NewPendingDeal__Params(this);
  }
}

export class NewPendingDeal__Params {
  _event: NewPendingDeal;

  constructor(event: NewPendingDeal) {
    this._event = event;
  }

  get offerId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get dealId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get sellAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get buyAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
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

  get sellAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

export class VoteDeal extends EthereumEvent {
  get params(): VoteDeal__Params {
    return new VoteDeal__Params(this);
  }
}

export class VoteDeal__Params {
  _event: VoteDeal;

  constructor(event: VoteDeal) {
    this._event = event;
  }

  get dealId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get vote(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get counterpartVote(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class AuditorNotification extends EthereumEvent {
  get params(): AuditorNotification__Params {
    return new AuditorNotification__Params(this);
  }
}

export class AuditorNotification__Params {
  _event: AuditorNotification;

  constructor(event: AuditorNotification) {
    this._event = event;
  }

  get dealId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class UpdateReputation extends EthereumEvent {
  get params(): UpdateReputation__Params {
    return new UpdateReputation__Params(this);
  }
}

export class UpdateReputation__Params {
  _event: UpdateReputation;

  constructor(event: UpdateReputation) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reputation(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class HandleDealReputation extends EthereumEvent {
  get params(): HandleDealReputation__Params {
    return new HandleDealReputation__Params(this);
  }
}

export class HandleDealReputation__Params {
  _event: HandleDealReputation;

  constructor(event: HandleDealReputation) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isSuccess(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get tokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get dealAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DealLock extends EthereumEvent {
  get params(): DealLock__Params {
    return new DealLock__Params(this);
  }
}

export class DealLock__Params {
  _event: DealLock;

  constructor(event: DealLock) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isLocked(): boolean {
    return this._event.parameters[1].value.toBoolean();
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

export class PIBP2P__offersResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;
  value5: Address;
  value6: BigInt;
  value7: boolean;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;
  value11: Address;
  value12: Address;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
    value5: Address,
    value6: BigInt,
    value7: boolean,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt,
    value11: Address,
    value12: Address
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
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
    this.value12 = value12;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromBoolean(this.value4));
    map.set("value5", EthereumValue.fromAddress(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromBoolean(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    map.set("value9", EthereumValue.fromUnsignedBigInt(this.value9));
    map.set("value10", EthereumValue.fromUnsignedBigInt(this.value10));
    map.set("value11", EthereumValue.fromAddress(this.value11));
    map.set("value12", EthereumValue.fromAddress(this.value12));
    return map;
  }
}

export class PIBP2P__dealsResult {
  value0: Address;
  value1: Address;
  value2: boolean;
  value3: Address;
  value4: Address;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: i32;
  value9: i32;
  value10: Address;

  constructor(
    value0: Address,
    value1: Address,
    value2: boolean,
    value3: Address,
    value4: Address,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: i32,
    value9: i32,
    value10: Address
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
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromBoolean(this.value2));
    map.set("value3", EthereumValue.fromAddress(this.value3));
    map.set("value4", EthereumValue.fromAddress(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    map.set(
      "value8",
      EthereumValue.fromUnsignedBigInt(BigInt.fromI32(this.value8))
    );
    map.set(
      "value9",
      EthereumValue.fromUnsignedBigInt(BigInt.fromI32(this.value9))
    );
    map.set("value10", EthereumValue.fromAddress(this.value10));
    return map;
  }
}

export class PIBP2P extends SmartContract {
  static bind(address: Address): PIBP2P {
    return new PIBP2P("PIBP2P", address);
  }

  isTDN(param0: Address): boolean {
    let result = super.call("isTDN", [EthereumValue.fromAddress(param0)]);

    return result[0].toBoolean();
  }

  try_isTDN(param0: Address): CallResult<boolean> {
    let result = super.tryCall("isTDN", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  offers(param0: Bytes): PIBP2P__offersResult {
    let result = super.call("offers", [EthereumValue.fromFixedBytes(param0)]);

    return new PIBP2P__offersResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toAddress(),
      result[6].toBigInt(),
      result[7].toBoolean(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toAddress(),
      result[12].toAddress()
    );
  }

  try_offers(param0: Bytes): CallResult<PIBP2P__offersResult> {
    let result = super.tryCall("offers", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new PIBP2P__offersResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toAddress(),
        value[6].toBigInt(),
        value[7].toBoolean(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toAddress(),
        value[12].toAddress()
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

  deals(param0: Bytes): PIBP2P__dealsResult {
    let result = super.call("deals", [EthereumValue.fromFixedBytes(param0)]);

    return new PIBP2P__dealsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBoolean(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toI32(),
      result[9].toI32(),
      result[10].toAddress()
    );
  }

  try_deals(param0: Bytes): CallResult<PIBP2P__dealsResult> {
    let result = super.tryCall("deals", [EthereumValue.fromFixedBytes(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new PIBP2P__dealsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBoolean(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toI32(),
        value[9].toI32(),
        value[10].toAddress()
      )
    );
  }

  offchainReputation(param0: Address): BigInt {
    let result = super.call("offchainReputation", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_offchainReputation(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("offchainReputation", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
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

  priceOracle(param0: Address, param1: Address): Address {
    let result = super.call("priceOracle", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return result[0].toAddress();
  }

  try_priceOracle(param0: Address, param1: Address): CallResult<Address> {
    let result = super.tryCall("priceOracle", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
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

  dealLockedUser(param0: Address): boolean {
    let result = super.call("dealLockedUser", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_dealLockedUser(param0: Address): CallResult<boolean> {
    let result = super.tryCall("dealLockedUser", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
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

export class SetTDNCall extends EthereumCall {
  get inputs(): SetTDNCall__Inputs {
    return new SetTDNCall__Inputs(this);
  }

  get outputs(): SetTDNCall__Outputs {
    return new SetTDNCall__Outputs(this);
  }
}

export class SetTDNCall__Inputs {
  _call: SetTDNCall;

  constructor(call: SetTDNCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _isTDN(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetTDNCall__Outputs {
  _call: SetTDNCall;

  constructor(call: SetTDNCall) {
    this._call = call;
  }
}

export class SetPriceOracleCall extends EthereumCall {
  get inputs(): SetPriceOracleCall__Inputs {
    return new SetPriceOracleCall__Inputs(this);
  }

  get outputs(): SetPriceOracleCall__Outputs {
    return new SetPriceOracleCall__Outputs(this);
  }
}

export class SetPriceOracleCall__Inputs {
  _call: SetPriceOracleCall;

  constructor(call: SetPriceOracleCall) {
    this._call = call;
  }

  get _token1(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token2(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _oracle(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetPriceOracleCall__Outputs {
  _call: SetPriceOracleCall;

  constructor(call: SetPriceOracleCall) {
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

  get _tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _settings(): Array<boolean> {
    return this._call.inputValues[2].value.toBooleanArray();
  }

  get _limits(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _auditor(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _description(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _metadata(): Array<BigInt> {
    return this._call.inputValues[6].value.toBigIntArray();
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

export class OfferFixedCall extends EthereumCall {
  get inputs(): OfferFixedCall__Inputs {
    return new OfferFixedCall__Inputs(this);
  }

  get outputs(): OfferFixedCall__Outputs {
    return new OfferFixedCall__Outputs(this);
  }
}

export class OfferFixedCall__Inputs {
  _call: OfferFixedCall;

  constructor(call: OfferFixedCall) {
    this._call = call;
  }

  get _tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _settings(): Array<boolean> {
    return this._call.inputValues[2].value.toBooleanArray();
  }

  get _limits(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _accounts(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }

  get _description(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _metadata(): Array<BigInt> {
    return this._call.inputValues[6].value.toBigIntArray();
  }
}

export class OfferFixedCall__Outputs {
  _call: OfferFixedCall;

  constructor(call: OfferFixedCall) {
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

export class VoteDealCall extends EthereumCall {
  get inputs(): VoteDealCall__Inputs {
    return new VoteDealCall__Inputs(this);
  }

  get outputs(): VoteDealCall__Outputs {
    return new VoteDealCall__Outputs(this);
  }
}

export class VoteDealCall__Inputs {
  _call: VoteDealCall;

  constructor(call: VoteDealCall) {
    this._call = call;
  }

  get _dealId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _vote(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class VoteDealCall__Outputs {
  _call: VoteDealCall;

  constructor(call: VoteDealCall) {
    this._call = call;
  }
}

export class RequestAuditorCall extends EthereumCall {
  get inputs(): RequestAuditorCall__Inputs {
    return new RequestAuditorCall__Inputs(this);
  }

  get outputs(): RequestAuditorCall__Outputs {
    return new RequestAuditorCall__Outputs(this);
  }
}

export class RequestAuditorCall__Inputs {
  _call: RequestAuditorCall;

  constructor(call: RequestAuditorCall) {
    this._call = call;
  }

  get _dealId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class RequestAuditorCall__Outputs {
  _call: RequestAuditorCall;

  constructor(call: RequestAuditorCall) {
    this._call = call;
  }
}

export class VoteDealAuditorCall extends EthereumCall {
  get inputs(): VoteDealAuditorCall__Inputs {
    return new VoteDealAuditorCall__Inputs(this);
  }

  get outputs(): VoteDealAuditorCall__Outputs {
    return new VoteDealAuditorCall__Outputs(this);
  }
}

export class VoteDealAuditorCall__Inputs {
  _call: VoteDealAuditorCall;

  constructor(call: VoteDealAuditorCall) {
    this._call = call;
  }

  get _dealId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _success(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class VoteDealAuditorCall__Outputs {
  _call: VoteDealAuditorCall;

  constructor(call: VoteDealAuditorCall) {
    this._call = call;
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

export class UpdateReputationCall extends EthereumCall {
  get inputs(): UpdateReputationCall__Inputs {
    return new UpdateReputationCall__Inputs(this);
  }

  get outputs(): UpdateReputationCall__Outputs {
    return new UpdateReputationCall__Outputs(this);
  }
}

export class UpdateReputationCall__Inputs {
  _call: UpdateReputationCall;

  constructor(call: UpdateReputationCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _reputation(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateReputationCall__Outputs {
  _call: UpdateReputationCall;

  constructor(call: UpdateReputationCall) {
    this._call = call;
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
