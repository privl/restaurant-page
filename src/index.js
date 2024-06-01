import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector("#content");
const homeLi = document.querySelector("#home");
const menuLi = document.querySelector("#menu");
const contactLi = document.querySelector("#contact");

addEventListener("DOMContentLoaded", () => {
    content.append(loadHome());
});

homeLi.addEventListener("click", () => {
    content.replaceChildren();
    content.append(loadHome());
});

menuLi.addEventListener("click", () => {
    content.replaceChildren();
    content.append(loadMenu());
});

contactLi.addEventListener("click", () => {
    content.replaceChildren();
    content.append(loadContact());
});