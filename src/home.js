export default function home() {
  const element = document.getElementById("content");
  element.innerHTML = "";

  const header = document.createElement("h1");
  header.innerText = "Rachel's Stickers";

  const para = document.createElement("p");
  para.innerText = "Rachel's Stickers offers best stickers in the city";

  element.appendChild(header);
  element.appendChild(para);

  return element;
}
