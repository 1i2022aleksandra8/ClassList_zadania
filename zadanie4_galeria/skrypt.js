// Miejsce na Twój kod
// 1. Pobierz miniatury (thumbnails) i podgląd (preview)
// 2. Dodaj event click do miniatur
// 3. Zarządzaj klasą .selected (dodaj do klikniętego, usuń z reszty)
// 4. (Opcjonalnie) Zmień tło #preview

const miniatury = document.querySelectorAll('.thumbnail');
const podglad = document.querySelector('#preview');

miniatury.addEventListener('click', function(){
    miniatury.forEach(thumbnail => {
        thumbnail.classList.remove('selected');
    });
    miniatury.classList.toggle('selected');
})