const body = document.body, 
welcome_screen = document.getElementById('welcome-screen'), 
welcome_screen_img = document.querySelector('#welcome-screen img'), 
main = document.querySelector('main'), 
welcome_screen_loading_circle = document.querySelector('#welcome-screen .loading-circle'), 
nav_links = document.querySelectorAll('header nav .link .dropdown a'), 
background = document.getElementById('background'),
btns = document.querySelectorAll('button'),
btn_links = {
    'daftar': 'https://psb.idn.sch.id/'
},
intro_sound = new Audio('attributes/intro_(windows_xp_startup_sound).mp3'),
htas = document.querySelectorAll('a'),
menu_btn = document.getElementById('menu-btn'),
nav = document.querySelector('nav');
let window_loaded = false;
intro_sound.preload = 'auto';

window.onload = _ => {
    intro_sound.play();
    window_loaded = true;
    welcome_screen_loading_circle.style.display = 'none';
    welcome_screen_img.style.display = 'initial';
    setTimeout(function() {
        welcome_screen_img.style.opacity = '100%';
        welcome_screen_img.style.transform = 'scale(100%)';
        setTimeout(function() {
            welcome_screen.classList.add('disappear');
            main.style.top = '0';
            setTimeout(function() {
                main.style.transition = 'all 0.25s ease-out';
                body.style.overflowY = 'scroll';
                welcome_screen.style.display = 'none';
            }, 1000);
        }, 1000);
    }, 500);
};

nav_links.forEach(link => {
    link.onclick = _ => {
        document.getElementById(link.getAttribute('to')).scrollIntoView();
    };
});

btns.forEach(btn => {
    if (btn.hasAttribute('for') && btn.getAttribute('for') in btn_links) {
        btn.onclick = _ => window.open(btn_links[btn.getAttribute('for')], '_blank');
    };
});

htas.forEach(hta => {
    if (hta.hasAttribute('href')) {
        hta.setAttribute('target', '_blank');
        hta.onclick = function() {
            return confirm(`Anda akan meninggalkan website ini\n\nLink yang anda klik akan membawa anda ke ${this.getAttribute('href')} yang bukan merupakan bagian dari ${location.hostname}`);
        };
    };
});

menu_btn.onclick = _ => {
    nav.classList.toggle('active');
};

main.onclick = _ => {
    nav.classList.remove('active');
};

document.documentElement.onscroll = _ => {
    nav.classList.remove('active');
};