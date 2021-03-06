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

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get _amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Approval extends EthereumEvent {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get _amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ApprovalForAll extends EthereumEvent {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class NewJson extends EthereumEvent {
  get params(): NewJson__Params {
    return new NewJson__Params(this);
  }
}

export class NewJson__Params {
  _event: NewJson;

  constructor(event: NewJson) {
    this._event = event;
  }

  get tokenId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get json(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class NewJsonReference extends EthereumEvent {
  get params(): NewJsonReference__Params {
    return new NewJsonReference__Params(this);
  }
}

export class NewJsonReference__Params {
  _event: NewJsonReference;

  constructor(event: NewJsonReference) {
    this._event = event;
  }

  get old(): string {
    return this._event.parameters[0].value.toString();
  }

  get current(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class PNFTInterface extends SmartContract {
  static bind(address: Address): PNFTInterface {
    return new PNFTInterface("PNFTInterface", address);
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(_owner)]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): CallResult<BigInt> {
    let result = super.tryCall("balanceOf", [
      EthereumValue.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  balanceById(_owner: Address, _tokenId: Bytes): BigInt {
    let result = super.call("balanceById", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromFixedBytes(_tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_balanceById(_owner: Address, _tokenId: Bytes): CallResult<BigInt> {
    let result = super.tryCall("balanceById", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromFixedBytes(_tokenId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(_owner: Address, _destination: Address, _tokenId: Bytes): BigInt {
    let result = super.call("getApproved", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_destination),
      EthereumValue.fromFixedBytes(_tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_getApproved(
    _owner: Address,
    _destination: Address,
    _tokenId: Bytes
  ): CallResult<BigInt> {
    let result = super.tryCall("getApproved", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_destination),
      EthereumValue.fromFixedBytes(_tokenId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(_owner: Address, _operator: Address): boolean {
    let result = super.call("isApprovedForAll", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_operator)
    ]);

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    _owner: Address,
    _operator: Address
  ): CallResult<boolean> {
    let result = super.tryCall("isApprovedForAll", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_operator)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  isExpired(_tokenId: Bytes): boolean {
    let result = super.call("isExpired", [
      EthereumValue.fromFixedBytes(_tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_isExpired(_tokenId: Bytes): CallResult<boolean> {
    let result = super.tryCall("isExpired", [
      EthereumValue.fromFixedBytes(_tokenId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class SafeTransferFromCall extends EthereumCall {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
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

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class TransferFromCall extends EthereumCall {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromApprovedCall extends EthereumCall {
  get inputs(): SafeTransferFromApprovedCall__Inputs {
    return new SafeTransferFromApprovedCall__Inputs(this);
  }

  get outputs(): SafeTransferFromApprovedCall__Outputs {
    return new SafeTransferFromApprovedCall__Outputs(this);
  }
}

export class SafeTransferFromApprovedCall__Inputs {
  _call: SafeTransferFromApprovedCall;

  constructor(call: SafeTransferFromApprovedCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
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

export class SafeTransferFromApprovedCall__Outputs {
  _call: SafeTransferFromApprovedCall;

  constructor(call: SafeTransferFromApprovedCall) {
    this._call = call;
  }
}

export class ApproveCall extends EthereumCall {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approved(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends EthereumCall {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}
