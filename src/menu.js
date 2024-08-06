import melon from "./images/melon.png";
import peach from "./images/peach.png";
import pear from "./images/pear.png";
import pineapple from "./images/pineapple.png";
import plum from "./images/plum.png";
import watermelon from "./images/watermelon.png";

export default function menu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-container");

  const melonMenu = createMenu(
    "Melon",
    "This cute little melon sticker will suit anywhere",
    "1.00"
  );

  const peachMenu = createMenu(
    "Peach",
    "If your favorite fruit is peach, this will be a perfect choice.",
    "1.00"
  );

  const pearMenu = createMenu(
    "Pear",
    "If your favorite fruit is peach, this will be a perfect choice.",
    "1.00"
  );

  const pineappleMenu = createMenu(
    "Pineapple",
    "If your favorite fruit is peach, this will be a perfect choice.",
    "1.00"
  );

  const plumMenu = createMenu(
    "Plum",
    "If your favorite fruit is peach, this will be a perfect choice.",
    "1.00"
  );

  const watermelonMenu = createMenu(
    "Watermelon",
    "If your favorite fruit is peach, this will be a perfect choice.",
    "1.00"
  );

  menuDiv.appendChild(melonMenu);
  menuDiv.appendChild(peachMenu);
  menuDiv.appendChild(pearMenu);
  menuDiv.appendChild(pineappleMenu);
  menuDiv.appendChild(plumMenu);
  menuDiv.appendChild(watermelonMenu);

  content.appendChild(menuDiv);
}

function createMenu(name, description, price) {
  const image = new Image();
  if (name.toLowerCase() === "melon") {
    image.src = melon;
  } else if (name.toLowerCase() === "peach") {
    image.src = peach;
  } else if (name.toLowerCase() === "plum") {
    image.src = plum;
  } else if (name.toLowerCase() === "pineapple") {
    image.src = pineapple;
  } else if (name.toLowerCase() === "pear") {
    image.src = pear;
  } else if (name.toLowerCase() === "watermelon") {
    image.src = watermelon;
  }

  const menu = document.createElement("div");
  menu.classList.add("menu");
  const menuTitle = document.createElement("h2");
  menuTitle.innerText = `${name} Sticker`;
  const menuPrice = document.createElement("h3");
  menuPrice.innerText = `$ ${price}`;
  const menuPara = document.createElement("p");
  menuPara.innerText = description;
  menu.appendChild(image);
  menu.appendChild(menuTitle);
  menu.appendChild(menuPrice);
  menu.appendChild(menuPara);

  return menu;
}
