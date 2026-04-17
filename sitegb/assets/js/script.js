const toWhatsBtn = document.querySelector('.to-whatsapp');

function activeWhatsBtn() {
    console.log('chamou updateToWhatsBtn()');
    toWhatsBtn.classList.add('active');
}

function changeLogo() {
    let mobile = window.matchMedia("(max-width: 992px)");
    console.log(mobile);
    const logo = document.querySelector('#header .logo img');
    console.log(logo.src);
    if(mobile.matches) {
        console.log('Match mobile')
        logo.src = "assets/img/logo-preta-sem-fundo.png";
    } else {
        logo.src = "assets/img/logo-transparente.png";
    }
}
changeLogo();

window.addEventListener('resize', ()=> {
    console.log("redimensionou tela");
    changeLogo();
})

window.addEventListener('load', ()=> {
    console.log('carregou');
    window.setTimeout(()=> {activeWhatsBtn()}, 3000);
})
