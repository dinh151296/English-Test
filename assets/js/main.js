// menu
let menuSP = document.querySelector(".header__nav");
let iconOpenMenu = document.querySelector('.hamburger-box');
let iconCloseMenu = document.querySelector('.mobile-hambuger__close');

iconOpenMenu.addEventListener("click", function(e) {
    this.classList.remove('show');
    menuSP.classList.add('show');
    document.body.classList.add('hidden');
    iconCloseMenu.classList.add('show');
});

iconCloseMenu.addEventListener("click", function(e) {
    this.classList.remove('show');
    document.body.classList.remove('hidden');
    menuSP.classList.remove('show');
    iconOpenMenu.classList.add('show');
});


// toggle click cat
let catTitle = document.querySelectorAll('.aside-category__title');
catTitle.forEach((element) => {
    element.addEventListener('click', function () {
        this.classList.toggle('active');
        
        let content = this.nextElementSibling;
        if (this.classList.contains('active')) {
            content.style.maxHeight = 0 + "px";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
})

//header menu profile
let avatarElement = document.querySelector('.header__avatar');
let menuProfile = document.querySelector('.header-menu__profile');
avatarElement.addEventListener('click', (e) => {
    menuProfile.classList.toggle('active');
    e.stopPropagation();
    document.addEventListener('click', event => {
        const isClickInside = menuProfile.contains(event.target)
      
        if (!isClickInside) {
            menuProfile.classList.remove('active');
        }
    });
});