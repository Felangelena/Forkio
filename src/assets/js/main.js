function openMenu() {
    const burgerBtn = document.getElementById("burgerMenuBtn");
    burgerBtn.addEventListener("click", function () {
        this.classList.toggle("header__burger-menu_opened");
    })
};

openMenu();