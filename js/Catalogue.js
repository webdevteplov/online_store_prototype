"use strict";

export class Catalogue {
  constructor() {
    this.goods = [];
  }

  getCatalogue() {
    return this.goods;
  }

  getGoodFromCatalogueById(id) {
    let goods = this.getCatalogue();

    for (let item in goods) {
      let good = goods[item];

      if (good.vendorCode == id) {
        return good;
      }
    }

    return -1;
  }

  addGoodToCatalogue(arrayGoods) {
    this.goods.push(arrayGoods)
  }

  // Создание строки с товарами
  getStringCatalogue() {
    const goodsInCatalog = this.getCatalogue();
    let infoOfGoodInCatalog = "";

    for (let item in goodsInCatalog) {
      const goodInCatalog = goodsInCatalog[item];
      infoOfGoodInCatalog += `${goodInCatalog.vendorCode} ${goodInCatalog.name} ${goodInCatalog.description} ${goodInCatalog.price} ${goodInCatalog.discountPrice}\n`;
    }

    return infoOfGoodInCatalog;
  }
}
