const body = document.body, welcome_screen = document.getElementById('welcome-screen'), welcome_screen_img = document.querySelector('#welcome-screen img'), main = document.querySelector('main');
let window_loaded = false;

window.onload = _ => {
    window_loaded = true;
    welcome_screen_img.style.opacity = '100%';
    welcome_screen_img.style.transform = 'scale(100%)';
    setTimeout(function() {
        welcome_screen.classList.add('disappear');
        body.style.overflowY = 'scroll';
        main.style.top = '0';
        setTimeout(function() {
            main.style.transition = 'all 0.25s ease-out';
        }, 1000);
    }, 1000);
};