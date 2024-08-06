import Fruits from "./images/fruits.png";

export default function home() {
  const element = document.getElementById("content");
  element.innerHTML = "";

  const newDiv = document.createElement("div");

  const para = document.createElement("p");
  para.innerText = "Aelene offers best stickers in the city";

  const fruitImage = new Image();
  fruitImage.src = Fruits;
  fruitImage.classList.add("home-image");

  const para2 = document.createElement("p");
  para2.innerText = "Order online!";

  newDiv.appendChild(para);
  newDiv.appendChild(fruitImage);
  newDiv.appendChild(para2);
  newDiv.classList.add("content");

  element.appendChild(newDiv);

  return element;
}
