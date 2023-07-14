"use strict";

import { Good } from "./Goods.js";
import { Cart } from "./Cart.js";

const good1 = new Good(1, "Кроссовки", "Невероятные кроссовки", 5500, 4999);
const good2 = new Good(2, "Ботинки", "Фантастические ботинки", 4200, 3500);
const good3 = new Good(3, "Футболка", "Умопомрачительная футболка", 2500, 1999);
const good4 = new Good(4, "Рубашка", "Поразительна рубашка", 3100, 2500);
const good5 = new Good(5, "Куртка", "Потрясающая куртка", 10000, 8999);
const good6 = new Good(6, "Шапка", "Головокружительная шапка", 2000, 1700);

const arrayGoods = [good1, good2, good3, good4, good5, good6];

const shop = new Cart();

for (let item in arrayGoods) {
  let good = arrayGoods[item];
  shop.addGoodToCatalogue(good)
}

// ----------------------------------Меню----------------------------------
loop:
while (true) {
  const userInputInTheMainMenu = +prompt(
    "Выберите действие: \n" +
      "1 - Каталог \n" +
      "2 - Избранное \n" +
      "3 - Корзина \n" +
      "4 - Выйти"
  );

  switch (userInputInTheMainMenu) {
    // ----------------------------------Каталог----------------------------------
    case 1:
      let userInputInTheCatalogue;
      let arrayInput;

      while (true) {
        userInputInTheCatalogue = prompt(
          `Каталог товаров:\n\n` +
            `${shop.getStringCatalogue()}\n` +
            'Выберите товар для добавления в избранное(1) или корзину(2)\n' +
            'Например "1 2" добавит первый товар в корзину'
        );

        if (userInputInTheCatalogue !== null) {
          arrayInput = userInputInTheCatalogue.split(" ");

          if (shop.getGoodFromCatalogueById(arrayInput[0]) !== -1) {
            if (arrayInput[arrayInput.length - 1] == 1) {
              shop.addGoodToFavorite(userInputInTheCatalogue);
            } else if (arrayInput[arrayInput.length - 1] == 2) {
              shop.addGoodToCart(userInputInTheCatalogue);
            } else {
              alert("Такого раздела не существует!");
            }
          } else {
            alert("Выбранного вами товара не существует!");
          }
        } else {
          alert("Вы вышли из каталога!");
          break;
        }
      }

      break;

    // ----------------------------------Избранное----------------------------------
    case 2:
      let userInputInTheFavorites;

      while (true) {
        userInputInTheFavorites = prompt(
          `Товары в избранном:\n\n` +
            `${shop.getStringFavorite()}\n` +
            `Выберите товар для удаления`
        );

        if (userInputInTheFavorites !== null) {
          shop.removeGoodFromFavorite(userInputInTheFavorites);
        } else {
          alert("Вы вышли из избранного!");
          break;
        }
      }

      break;

    // ----------------------------------Корзина----------------------------------
    case 3:
      let userInputInTheCart;

      while (true) {
        userInputInTheCart = prompt(
          `Товары в корзине:\n\n` +
            `${shop.getStringCart()}\n` +
            `${shop.getTotalSum()}\n` +
            `Выберите товар для удаления`
        );

        if (userInputInTheCart !== null) {
          shop.removeGoodFromCart(userInputInTheCart);
        } else {
          alert("Вы вышли из корзины!");
          break;
        }
      }

      break;

    // ----------------------------------Выход----------------------------------
    case 4:
      console.table("Сatalogue:\n", shop.getCatalogue());
      console.table("Favorites:\n", shop.getFavorite());
      console.table("Cart:\n", shop.getCart());
      alert("До встречи!");

      break loop;
  }
}
