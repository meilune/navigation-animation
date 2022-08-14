const menu = document.getElementById("menu-icon");
const exit = document.getElementById("menu-exit");
const menuBlock = document.getElementById("nav-items");

function menuNav() {
    if(menuBlock.style.display === "flex") {
        menuBlock.style.display = "none";
        menu.style.display = "inline-block";
        exit.style.display = "none";
    } else {
        menuBlock.style.display = "flex";
        menu.style.display = "none";
        exit.style.display = "inline-block";
    }
}