import birthdayImgPath from "./img/birthday-cake.jpg";
import weddingImgPath from "./img/wedding-cake.jpg";

function loadHome() {
    const home = document.createElement("div");
    const heroTitle = document.createElement("h1");
    const birthdayImg = document.createElement("img");
    const weddingImg = document.createElement("img");

    heroTitle.textContent = "We Make Cakes for Birthdays & Weddings";
    birthdayImg.src = birthdayImgPath;
    weddingImg.src = weddingImgPath;

    birthdayImg.classList.add("homeImg");
    weddingImg.classList.add("homeImg");

    home.append(heroTitle, birthdayImg, weddingImg);

    return home;
}

export default loadHome;