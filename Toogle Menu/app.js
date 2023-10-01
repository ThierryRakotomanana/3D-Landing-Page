const button = document.querySelector(".Button_button__L2wUb");

button.addEventListener("click", () => {
    if(document.body.getAttribute("data-theme") == "dark"){
        document.body.setAttribute("data-theme", "light")
    }else {
        document.body.setAttribute("data-theme", "dark")
    }
})