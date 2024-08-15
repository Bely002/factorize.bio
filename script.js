burgerClicked=false
burger = document.querySelector(".burger")
links = document.querySelector("header ul")

burger.addEventListener("click",()=>{
    burgerClicked=!burgerClicked
    loadBurger()
})

function loadBurger() {
    if(burgerClicked) {
        burger.classList.add("clicked")
        links.classList.add("clicked")
    }else{
        burger.classList.remove("clicked")
        links.classList.remove("clicked")
    }
}

loadBurger()
