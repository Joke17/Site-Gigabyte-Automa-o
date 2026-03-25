AOS.init({
    duration: 800, // Duração da animação em milissegundos
    once: true, // Se true, anima só a primeira vez que você rola para baixo
});

const MenuMobile = document.querySelector('.MenuMobile');
const NavLinks = document.querySelector('.nav-links');
const icon = MenuMobile.querySelector('i');

MenuMobile.addEventListener('click', () => {
    NavLinks.classList.toggle('active');
    
    if(NavLinks.classList.contains('active')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars'); 
    }
});