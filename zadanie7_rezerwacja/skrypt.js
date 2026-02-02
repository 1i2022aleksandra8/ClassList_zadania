/*
  Zadanie: Rezerwacja Miejsc
  1. Pobierz wszystkie siedzenia, które nie są zajęte (`.seat:not(.occupied)`).
  2. Pobierz przycisk "Rezerwuj wybrane" i licznik.
  3. Obsłuż kliknięcie w siedzenie:
     - Przełącz klasę .selected.
     - Zaktualizuj licznik.
  4. Obsłuż kliknięcie przycisku Rezerwuj:
     - Znajdź wszystkie wybrane siedzenia (.seat.selected).
     - Zamień klasę .selected na .occupied (zablokuj je).
     - Zresetuj licznik.
*/

const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector('#count');
const book = document.querySelector('#btnBook');
let counter = 0;

seats.forEach(seat => {

   seat.addEventListener('click', function(){
      seat.classList.toggle('selected');
      let counter = 0;
      if (seat.classList.contains('selected')){
         counter = counter + 1;
      }
      count.innerHTML = counter;
   })

   book.addEventListener('click', function(){
      if (seat.classList.contains('selected')){
         seat.classList.remove('selected');
         seat.classList.add('accupied');
      }
      counter = 0;
      count.innerHTML = counter;
   })
});










const reserver = document.querySelectorAll(".row .seat:not(.selected)");