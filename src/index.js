import "../index.html";
import "../css/style.css";
import hackerImage from "../img/hacker.jpg";

const root = document.querySelector("#root");
const body = document.querySelector("body");

const textArea = document.createElement("p");
textArea.setAttribute("id", "text-area");
textArea.textContent = "Barlus Hayer!";
root.appendChild(textArea);

const picture = document.createElement("img");
// picture.setAttribute("src", img);
picture.src = hackerImage;
picture.setAttribute("alt", "hackerImage");
body.appendChild(picture);