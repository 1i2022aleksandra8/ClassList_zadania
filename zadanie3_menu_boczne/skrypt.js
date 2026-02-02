// Miejsce na Twój kod
// 1. Pobierz elementy
// 2. Obsłuż otwieranie (dodaj klasę .open)
// 3. Obsłuż zamykanie (usuń klasę .open)

const open = document.querySelector('#btnOpen');
const close = document.querySelector('#btnClose');
const menu = document.querySelector('#sideMenu');

open.addEventListener('click', function(){
    menu.classList.add('open');
})

close.addEventListener('click', function(){
    menu.classList.remove('open');
})