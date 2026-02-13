const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show'); 
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const MenuMobile = document.querySelector('.MenuMobile');
const NavLinks = document.querySelector('.nav-links');
const icon = MenuMobile.querySelector('i');

MenuMobile.addEventListener('click', () => {
    NavLinks.classList.toggle('active');
    if(NavLinks.classList.contains('active')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }
});