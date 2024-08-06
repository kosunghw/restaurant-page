export default function contact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const contactDiv = document.createElement("div");
  const contactPhone = document.createElement("div");
  const contactAddress = document.createElement("div");
  contactPhone.innerText = "123-456-7890";
  contactAddress.innerText = "290 Bremner Blvd, Toronto, ON M5V 3L9";

  contactDiv.appendChild(contactPhone);
  contactDiv.appendChild(contactAddress);

  content.appendChild(contactDiv);
}
