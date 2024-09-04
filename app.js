const icon = document.querySelector('#shop');
const menu = document.querySelector('#menu');

icon.addEventListener('click', () => {
    menu.classList.toggle('disp');
});

const sort = document.querySelector('#sort');
const by = document.querySelector('#by');

sort.addEventListener('click', () => {
    by.classList.toggle('disp');
});

const sorttype = document.querySelector('#sort-type');
const bytype = document.querySelector('#by-type');

sorttype.addEventListener('click', () => {
    bytype.classList.toggle('disp');
});