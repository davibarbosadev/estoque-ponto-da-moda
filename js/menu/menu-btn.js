const btnMenuOpen = document.querySelector(".btn-menu-open");
const btnMenuClosed = document.querySelector(".btn-menu-closed");
const mainNav = document.querySelector(".main-nav");

btnMenuOpen.addEventListener("click", () => {
    btnMenuClosed.classList.add("actived");
    btnMenuOpen.classList.remove("actived");
    mainNav.classList.add("open");
});

btnMenuClosed.addEventListener("click", () => {
    btnMenuOpen.classList.add("actived");
    btnMenuClosed.classList.remove("actived");
    mainNav.classList.remove("open");
});
