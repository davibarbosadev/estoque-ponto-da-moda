const btn = document.querySelector(".sub-menu-btn");
const subMenuList = document.querySelector(".sub-menu-list");
const subMenu = document.querySelector(".sub-menu");
let closeSubMenu;

btn.addEventListener("click", () => {
    if (!subMenu.classList.contains("actived")) {
        subMenu.classList.add("actived");
    } else {
        subMenu.classList.remove("actived");
    }
});

subMenuList.addEventListener("mouseleave", () => {
    closeSubMenu = setTimeout(() => {
        if (subMenu.classList.contains("actived")) {
            subMenu.classList.remove("actived");
        }
    }, 1000);
});

subMenuList.addEventListener("mouseenter", () => {
    clearTimeout(closeSubMenu);
});


