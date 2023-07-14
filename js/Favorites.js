"use strict";

import { Catalogue } from "./Catalogue.js";

export class Favorites extends Catalogue {
  constructor(...args) {
    super(...args);
    this.favoritesGoods = [];
  }

  getFavorite() {
    return this.favoritesGoods;
  }

  // Создание строки с товарами в избранном
  getStringFavorite() {
    const goodsInFavorites = this.getFavorite();
    let infoOfGoodInFavorites = "";

    for (let item in goodsInFavorites) {
      const goodInFavorites = goodsInFavorites[item];
      infoOfGoodInFavorites += `${goodInFavorites.vendorCode} ${goodInFavorites.name} ${goodInFavorites.description} ${goodInFavorites.price} ${goodInFavorites.discountPrice}\n`;
    }

    return infoOfGoodInFavorites;
  }

  addGoodToFavorite(userInputInTheCatalogue) {
    const arrayInput = userInputInTheCatalogue.split(" ");
    const good = this.getGoodFromCatalogueById(arrayInput[0]);

    if (this.checkIsThereAGoodInFavorite(arrayInput[0]) !== 1) {
      this.favoritesGoods.push(good);
      alert(`Товар '${good.name}' добавлен в избранное!`);
    } else {
      alert(`Товар '${good.name}' уже есть в избранном!`);
    }
  }

  removeGoodFromFavorite(userInputInTheFavorites) {
    if (this.getFavorite().length !== 0) {
      const isThatItem = (item) => item.vendorCode == userInputInTheFavorites;
      const foundIndex = this.favoritesGoods.findIndex(isThatItem);
      const good = this.getFavorite()[foundIndex];

      if (foundIndex != -1) {
        this.favoritesGoods.splice(foundIndex, 1);
        alert(`Товар '${good.name}' удален из избранного!`);
      } else {
        alert("Товара, который вы хотите удалить, не существует!");
      }
    } else {
      alert("Список избранного пуст!");
    }
  }

  // Для проверки, какие товары уже есть в избранном
  checkIsThereAGoodInFavorite(id) {
    if (this.getFavorite().find(item => item.vendorCode == id) !== undefined) {
      return 1;
    } else {
      return -1;
    }
  }
}
