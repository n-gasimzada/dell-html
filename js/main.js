const burgerBtn = document.querySelector('.header__burger-menu')
const navBtn = document.querySelector('.nav__list')

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active')
    navBtn.classList.toggle('active')
})

