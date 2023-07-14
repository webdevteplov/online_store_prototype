"use strict";

import { Favorites } from "./Favorites.js";

export class Cart extends Favorites {
  constructor(...args) {
    super(...args);
    this.goodsInTheCart = [];
  }

  getCart() {
    return this.goodsInTheCart;
  }

  getTotalSum() {
    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let totalDiscount = 0;
    let goods = this.getCart();
    let good;

    for (let item in goods) {
      good = goods[item];
      totalPrice += good.price;
      totalDiscountPrice += good.discountPrice;
      totalDiscount = totalPrice - totalDiscountPrice;
    }

    return (
      `Цена корзины без скидки: ${totalPrice}\n` +
      `Цена корзины со скидкой: ${totalDiscountPrice}\n` +
      `Ваша скидка составляет: ${totalDiscount}\n`
    );
  }

  // Создание строки с товарами в корзине
  getStringCart() {
    const goodsInCart = this.getCart();
    let infoOfGoodInTheCart = "";

    for (let item in goodsInCart) {
      const goodInCart = goodsInCart[item];
      infoOfGoodInTheCart += `${goodInCart.vendorCode} ${goodInCart.name} ${goodInCart.description} ${goodInCart.price} ${goodInCart.discountPrice}\n`;
    }

    return infoOfGoodInTheCart;
  }

  addGoodToCart(userInputInTheCatalogue) {
    let arrayInput = userInputInTheCatalogue.split(" ");
    const good = this.getGoodFromCatalogueById(arrayInput[0]);

    if (this.checkIsThereAGoodInCart(arrayInput[0]) !== 1) {
      this.goodsInTheCart.push(good);
      alert(`Товар '${good.name}' добавлен в корзину!`);
    } else {
      alert(`Товар '${good.name}' уже есть в корзине!`);
    }
  }

  removeGoodFromCart(userInputInTheCart) {
    if (this.getCart().length !== 0) {
      const isThatItem = (item) => item.vendorCode == userInputInTheCart;
      const foundIndex = this.goodsInTheCart.findIndex(isThatItem);
      const good = this.getCart()[foundIndex];

      if (foundIndex != -1) {
        this.goodsInTheCart.splice(foundIndex, 1);
        alert(`Товар '${good.name}' удален из корзины!`);
      } else {
        alert("Товара, который вы хотите удалить, не существует!");
      }
    } else {
      alert("Корзина пуста!");
    }
  }

  // Для проверки, какие товары уже есть в корзине
  checkIsThereAGoodInCart(id) {
    if (this.getCart().find(item => item.vendorCode == id) !== undefined) {
      return 1;
    } else {
      return -1;
    }
  }
}
