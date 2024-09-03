const icon = document.querySelector('#shop');
const menu = document.querySelector('#menu');

icon.addEventListener('click', () => {
    menu.classList.toggle('disp');
});
