// Miejsce na Twój kod
// 1. Pobierz przyciski
const like = document.querySelector("#btnLike");
const dislike = document.querySelector("#btnDislike");


like.addEventListener("click", function(){
    like.classList.toggle('active');
    dislike.classList.remove('active');
})

dislike.addEventListener('click', function(){
    dislike.classList.toggle('active');
    like.classList.remove('active');
})

// 2. Obsłuż kliknięcie Like (toggle active, remove active z dislike)
// 3. Obsłuż kliknięcie Dislike (toggle active, remove active z like)