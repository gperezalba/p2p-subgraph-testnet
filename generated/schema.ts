// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Offer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Offer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Offer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Offer", id.toString(), this);
  }

  static load(id: string): Offer | null {
    return store.get("Offer", id) as Offer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get sellToken(): Bytes {
    let value = this.get("sellToken");
    return value.toBytes();
  }

  set sellToken(value: Bytes) {
    this.set("sellToken", Value.fromBytes(value));
  }

  get buyToken(): Bytes {
    let value = this.get("buyToken");
    return value.toBytes();
  }

  set buyToken(value: Bytes) {
    this.set("buyToken", Value.fromBytes(value));
  }

  get sellAmount(): BigDecimal {
    let value = this.get("sellAmount");
    return value.toBigDecimal();
  }

  set sellAmount(value: BigDecimal) {
    this.set("sellAmount", Value.fromBigDecimal(value));
  }

  get buyAmount(): BigDecimal {
    let value = this.get("buyAmount");
    return value.toBigDecimal();
  }

  set buyAmount(value: BigDecimal) {
    this.set("buyAmount", Value.fromBigDecimal(value));
  }

  get isPartial(): boolean {
    let value = this.get("isPartial");
    return value.toBoolean();
  }

  set isPartial(value: boolean) {
    this.set("isPartial", Value.fromBoolean(value));
  }

  get isBuyFiat(): boolean {
    let value = this.get("isBuyFiat");
    return value.toBoolean();
  }

  set isBuyFiat(value: boolean) {
    this.set("isBuyFiat", Value.fromBoolean(value));
  }

  get auditor(): Bytes | null {
    let value = this.get("auditor");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set auditor(value: Bytes | null) {
    if (value === null) {
      this.unset("auditor");
    } else {
      this.set("auditor", Value.fromBytes(value as Bytes));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get isOpen(): boolean {
    let value = this.get("isOpen");
    return value.toBoolean();
  }

  set isOpen(value: boolean) {
    this.set("isOpen", Value.fromBoolean(value));
  }
}

export class OfferCommodity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OfferCommodity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OfferCommodity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OfferCommodity", id.toString(), this);
  }

  static load(id: string): OfferCommodity | null {
    return store.get("OfferCommodity", id) as OfferCommodity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get sellToken(): Bytes {
    let value = this.get("sellToken");
    return value.toBytes();
  }

  set sellToken(value: Bytes) {
    this.set("sellToken", Value.fromBytes(value));
  }

  get buyToken(): Bytes {
    let value = this.get("buyToken");
    return value.toBytes();
  }

  set buyToken(value: Bytes) {
    this.set("buyToken", Value.fromBytes(value));
  }

  get sellId(): string {
    let value = this.get("sellId");
    return value.toString();
  }

  set sellId(value: string) {
    this.set("sellId", Value.fromString(value));
  }

  get buyAmount(): BigDecimal {
    let value = this.get("buyAmount");
    return value.toBigDecimal();
  }

  set buyAmount(value: BigDecimal) {
    this.set("buyAmount", Value.fromBigDecimal(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get isOpen(): boolean {
    let value = this.get("isOpen");
    return value.toBoolean();
  }

  set isOpen(value: boolean) {
    this.set("isOpen", Value.fromBoolean(value));
  }
}

export class Deal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deal", id.toString(), this);
  }

  static load(id: string): Deal | null {
    return store.get("Deal", id) as Deal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get offer(): string {
    let value = this.get("offer");
    return value.toString();
  }

  set offer(value: string) {
    this.set("offer", Value.fromString(value));
  }

  get buyer(): string {
    let value = this.get("buyer");
    return value.toString();
  }

  set buyer(value: string) {
    this.set("buyer", Value.fromString(value));
  }

  get buyAmount(): BigDecimal {
    let value = this.get("buyAmount");
    return value.toBigDecimal();
  }

  set buyAmount(value: BigDecimal) {
    this.set("buyAmount", Value.fromBigDecimal(value));
  }

  get sellerVote(): BigDecimal | null {
    let value = this.get("sellerVote");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set sellerVote(value: BigDecimal | null) {
    if (value === null) {
      this.unset("sellerVote");
    } else {
      this.set("sellerVote", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get buyerVote(): BigDecimal | null {
    let value = this.get("buyerVote");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set buyerVote(value: BigDecimal | null) {
    if (value === null) {
      this.unset("buyerVote");
    } else {
      this.set("buyerVote", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get auditorVote(): BigDecimal | null {
    let value = this.get("auditorVote");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set auditorVote(value: BigDecimal | null) {
    if (value === null) {
      this.unset("auditorVote");
    } else {
      this.set("auditorVote", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get isPending(): boolean {
    let value = this.get("isPending");
    return value.toBoolean();
  }

  set isPending(value: boolean) {
    this.set("isPending", Value.fromBoolean(value));
  }

  get isSuccess(): boolean {
    let value = this.get("isSuccess");
    return value.toBoolean();
  }

  set isSuccess(value: boolean) {
    this.set("isSuccess", Value.fromBoolean(value));
  }

  get executor(): Bytes | null {
    let value = this.get("executor");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set executor(value: Bytes | null) {
    if (value === null) {
      this.unset("executor");
    } else {
      this.set("executor", Value.fromBytes(value as Bytes));
    }
  }
}

export class DealCommodity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DealCommodity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DealCommodity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DealCommodity", id.toString(), this);
  }

  static load(id: string): DealCommodity | null {
    return store.get("DealCommodity", id) as DealCommodity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get offer(): string {
    let value = this.get("offer");
    return value.toString();
  }

  set offer(value: string) {
    this.set("offer", Value.fromString(value));
  }

  get buyer(): string {
    let value = this.get("buyer");
    return value.toString();
  }

  set buyer(value: string) {
    this.set("buyer", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get offers(): Array<string> | null {
    let value = this.get("offers");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set offers(value: Array<string> | null) {
    if (value === null) {
      this.unset("offers");
    } else {
      this.set("offers", Value.fromStringArray(value as Array<string>));
    }
  }

  get commodityOffers(): Array<string> | null {
    let value = this.get("commodityOffers");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set commodityOffers(value: Array<string> | null) {
    if (value === null) {
      this.unset("commodityOffers");
    } else {
      this.set(
        "commodityOffers",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }

  get deals(): Array<string> | null {
    let value = this.get("deals");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set deals(value: Array<string> | null) {
    if (value === null) {
      this.unset("deals");
    } else {
      this.set("deals", Value.fromStringArray(value as Array<string>));
    }
  }

  get commodityDeals(): Array<string> | null {
    let value = this.get("commodityDeals");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set commodityDeals(value: Array<string> | null) {
    if (value === null) {
      this.unset("commodityDeals");
    } else {
      this.set("commodityDeals", Value.fromStringArray(value as Array<string>));
    }
  }

  get goodReputation(): BigInt | null {
    let value = this.get("goodReputation");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set goodReputation(value: BigInt | null) {
    if (value === null) {
      this.unset("goodReputation");
    } else {
      this.set("goodReputation", Value.fromBigInt(value as BigInt));
    }
  }

  get badReputation(): BigInt | null {
    let value = this.get("badReputation");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set badReputation(value: BigInt | null) {
    if (value === null) {
      this.unset("badReputation");
    } else {
      this.set("badReputation", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenSymbol(): string {
    let value = this.get("tokenSymbol");
    return value.toString();
  }

  set tokenSymbol(value: string) {
    this.set("tokenSymbol", Value.fromString(value));
  }

  get tokenName(): string {
    let value = this.get("tokenName");
    return value.toString();
  }

  set tokenName(value: string) {
    this.set("tokenName", Value.fromString(value));
  }

  get isNFT(): boolean {
    let value = this.get("isNFT");
    return value.toBoolean();
  }

  set isNFT(value: boolean) {
    this.set("isNFT", Value.fromBoolean(value));
  }

  get category(): BigInt | null {
    let value = this.get("category");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set category(value: BigInt | null) {
    if (value === null) {
      this.unset("category");
    } else {
      this.set("category", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Commodity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Commodity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Commodity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Commodity", id.toString(), this);
  }

  static load(id: string): Commodity | null {
    return store.get("Commodity", id) as Commodity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gold(): string | null {
    let value = this.get("gold");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set gold(value: string | null) {
    if (value === null) {
      this.unset("gold");
    } else {
      this.set("gold", Value.fromString(value as string));
    }
  }

  get diamond(): string | null {
    let value = this.get("diamond");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set diamond(value: string | null) {
    if (value === null) {
      this.unset("diamond");
    } else {
      this.set("diamond", Value.fromString(value as string));
    }
  }
}

export class Gold extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Gold entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Gold entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Gold", id.toString(), this);
  }

  static load(id: string): Gold | null {
    return store.get("Gold", id) as Gold | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get reference(): string {
    let value = this.get("reference");
    return value.toString();
  }

  set reference(value: string) {
    this.set("reference", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get weight_brute(): BigDecimal {
    let value = this.get("weight_brute");
    return value.toBigDecimal();
  }

  set weight_brute(value: BigDecimal) {
    this.set("weight_brute", Value.fromBigDecimal(value));
  }

  get weight_fine(): BigDecimal {
    let value = this.get("weight_fine");
    return value.toBigDecimal();
  }

  set weight_fine(value: BigDecimal) {
    this.set("weight_fine", Value.fromBigDecimal(value));
  }

  get law(): BigDecimal {
    let value = this.get("law");
    return value.toBigDecimal();
  }

  set law(value: BigDecimal) {
    this.set("law", Value.fromBigDecimal(value));
  }
}

export class Diamond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Diamond entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Diamond entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Diamond", id.toString(), this);
  }

  static load(id: string): Diamond | null {
    return store.get("Diamond", id) as Diamond | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get reference(): string {
    let value = this.get("reference");
    return value.toString();
  }

  set reference(value: string) {
    this.set("reference", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get color(): string {
    let value = this.get("color");
    return value.toString();
  }

  set color(value: string) {
    this.set("color", Value.fromString(value));
  }

  get clarity(): string {
    let value = this.get("clarity");
    return value.toString();
  }

  set clarity(value: string) {
    this.set("clarity", Value.fromString(value));
  }

  get cut(): string {
    let value = this.get("cut");
    return value.toString();
  }

  set cut(value: string) {
    this.set("cut", Value.fromString(value));
  }

  get carat_weight(): BigDecimal | null {
    let value = this.get("carat_weight");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set carat_weight(value: BigDecimal | null) {
    if (value === null) {
      this.unset("carat_weight");
    } else {
      this.set("carat_weight", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class Auditor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Auditor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Auditor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Auditor", id.toString(), this);
  }

  static load(id: string): Auditor | null {
    return store.get("Auditor", id) as Auditor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requests(): Array<string> | null {
    let value = this.get("requests");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set requests(value: Array<string> | null) {
    if (value === null) {
      this.unset("requests");
    } else {
      this.set("requests", Value.fromStringArray(value as Array<string>));
    }
  }
}
