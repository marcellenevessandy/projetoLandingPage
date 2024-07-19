// menu
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assects/img/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assects/img/fechar.png";
    }
}

function closeMenuOnOptionClick() {
    const menuItems = document.querySelectorAll('.mobile-menu .nav-item a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 600) {
                menuShow(); // Fecha o menu
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', closeMenuOnOptionClick);

const header = document.querySelector('header');
const headerOffset = header.offsetTop;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > headerOffset) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

//slide

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

//contagem
const inaugurationDate = new Date(2024, 6, 18, 22, 0, 0); // 18 de julho de 2024 às 19:00

function updateCountdown() {
    const now = new Date().getTime();
    const distance = inaugurationDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = 'Nossa loja está oficialmente inaugurada!🎉';
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();

const timerInterval = setInterval(updateCountdown, 1000);
