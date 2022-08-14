const menu = document.getElementById("menu-icon");
const exit = document.getElementById("menu-exit");
const menuBlock = document.getElementByClass("navigation-items");

function menuNavigation() {
    menu.onclick( () => {
        menuBlock.style.display = "flex";
        menu.hidden = true;
    })
    exit.onclick( () => {
        menuBlock.style.display = "none";
        exit.hidden = true;
    })
}

menuNavigation();