"use strict";

export class Good {
  constructor(vendorCode, name, description, price, discountPrice) {
    this.vendorCode = vendorCode;
    this.name = name;
    this.description = description;
    this.price = price;
    this.discountPrice = discountPrice;
  }
}
