import Melon from "./images/melon.png";
import Peach from "./images/peach.png";
import Pear from "./images/pear.png";
import Pineapple from "./images/pineapple.png";
import Plum from "./images/plum.png";
import Watermelon from "./images/watermelon.png";

export default function menu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-container");

  const melonImg = new Image();
  const peachImg = new Image();
  const pearImg = new Image();
  const pineappleImg = new Image();
  const plumImg = new Image();
  const watermelonImg = new Image();

  melonImg.src = Melon;
  peachImg.src = Peach;
  pearImg.src = Pear;
  pineappleImg.src = Pineapple;
  plumImg.src = Plum;
  watermelonImg.src = Watermelon;

  const melonMenu = document.createElement("div");
  melonMenu.classList.add("menu");
  const melonTitle = document.createElement("h2");
  melonTitle.innerText = "Melon Sticker";
  const melonPara = document.createElement("p");
  melonPara.innerText = "This cute little melon sticker will suit anywhere";
  melonMenu.appendChild(melonImg);
  melonMenu.appendChild(melonTitle);
  melonMenu.appendChild(melonPara);

  menuDiv.appendChild(melonMenu);

  content.appendChild(menuDiv);
}
