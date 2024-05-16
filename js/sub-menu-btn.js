const btn = document.querySelector(".sub-menu-btn");
const subMenuList = document.querySelector(".sub-menu-list");
const subMenu = document.querySelector(".sub-menu");
let closeSubMenu;

btn.addEventListener("click", () => {
    if (subMenuList.classList.contains("disabled")) {
        subMenuList.classList.remove("disabled");
        subMenu.classList.add("active");
    } else {
        subMenuList.classList.add("disabled");
        subMenu.classList.remove("active");
    }
});

subMenuList.addEventListener("mouseleave", () => {
    closeSubMenu = setTimeout(() => {
        if (!subMenuList.classList.contains("disabled")) {
            subMenuList.classList.add("disabled");
            subMenu.classList.remove("active");
        }
    }, 1000);
});

subMenuList.addEventListener("mouseenter", () => {
    clearTimeout(closeSubMenu);
});
