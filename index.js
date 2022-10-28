const menuIconsEl = document.querySelector(".menuIcons");
const headerEl = document.querySelector(".header");

const toggleEl = () =>{
    headerEl.classList.toggle("active")
}

menuIconsEl.addEventListener("click", ()=> toggleEl())
