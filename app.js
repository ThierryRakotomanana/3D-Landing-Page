//BigBang prealoading

const bigbang = document.querySelector("#bigbang");

window.addEventListener("load", () => {
    bigbang.classList.add("disapear");
})

const button = document.querySelector(".Button_button__L2wUb");

button.addEventListener("click", () => {
    if(document.body.getAttribute("data-theme") == "dark"){
        document.body.setAttribute("data-theme", "light")
    }else {
        document.body.setAttribute("data-theme", "dark")
    }
})

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });


const toogle = document.querySelector(".Button_button__L2wUb.NavToggle_toggle__gmiZu");

const fenetre1 = document.getElementById("fenetreOne");
const fenetre2 = document.getElementById("fenetreTow");

const home = document.getElementsByClassName("home");


toogle.addEventListener("click", () => {
    if(fenetre1.dataset.open == "false"){

        menu.classList.remove("none")
        fenetre1.dataset.open = "true";
        fenetre2.dataset.open = "true";
        fenetre2.dataset.close = "true"
    }else {

        menu.classList.add("none")
        fenetre1.dataset.open = "false"
        fenetre2.dataset.close = "false"
        fenetre2.dataset.open = "true"
    }
})