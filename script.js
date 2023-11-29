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
intro_sound = new Audio('attributes/intro_(windows_xp_startup_sound).mp3');
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
    if (btn.getAttribute('for') in btn_links) {
        btn.onclick = _ => window.open(btn_links[btn.getAttribute('for')], '_blank');
    };
});