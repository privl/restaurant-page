import chocolateImgPath from "./img/chocolate-cake.jpg";
import raspberryImgPath from "./img/raspberry-cake.jpg";
import cupcakeImgPath from "./img/cupcake.jpg";

function loadMenu() {
    const menu = document.createElement("div");

    const chocolateFigure = document.createElement("figure");
    const chocolateImg = document.createElement("img");
    const chocolateCaption = document.createElement("figcaption");

    const raspberryFigure = document.createElement("figure");
    const raspberryImg = document.createElement("img");
    const raspberryCaption = document.createElement("figcaption");

    const cupcakeFigure = document.createElement("figure");
    const cupcakeImg = document.createElement("img");
    const cupcakeCaption = document.createElement("figcaption");

    chocolateImg.src = chocolateImgPath;
    chocolateCaption.textContent = "Chocolate Cake";
    raspberryImg.src = raspberryImgPath;
    raspberryCaption.textContent = "Raspberry Cake";
    cupcakeImg.src = cupcakeImgPath;
    cupcakeCaption.textContent = "Cupcake";

    chocolateFigure.append(chocolateImg, chocolateCaption);
    raspberryFigure.append(raspberryImg, raspberryCaption);
    cupcakeFigure.append(cupcakeImg, cupcakeCaption);
    menu.append(chocolateFigure, raspberryFigure, cupcakeFigure);

    return menu;
}

export default loadMenu;