// Miejsce na Twój kod
// 1. Pobierz przyciski i tekst
// 2. Dla każdego przycisku obsłuż kliknięcie
// 3. Przełączaj (toggle) klasę stylu na tekście oraz klasę .active na przycisku

const bold = document.querySelector('#btnBold');
const italic = document.querySelector('#btnItalic');
const underline = document.querySelector('#btnUnderline');
const text = document.querySelector('#text');


bold.addEventListener('click', function(){
    bold.classList.toggle('active');
    text.classList.toggle('bold');
});
italic.addEventListener('click', function(){
    bold.classList.toggle('active');
    text.classList.toggle('italic');
});
underline.addEventListener('click', function(){
    bold.classList.toggle('active');
    text.classList.toggle('underline');
});