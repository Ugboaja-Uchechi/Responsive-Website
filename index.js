const hamBurger = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

hamBurger.addEventListener('click', () => {
    navbarLinks.classList.ham('active')
})