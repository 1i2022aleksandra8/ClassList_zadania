/*
  Zadanie: Stepper (Kreator)
  1. Pobierz przyciski "Wstecz" i "Dalej".
  2. Pobierz koła postępu (.circle) i treści kroków (.step).
  3. Zdefiniuj zmienną przechowującą aktualny krok (np. let currentStep = 1).
  4. Obsłuż kliknięcie "Dalej":
     - Zwiększ currentStep.
     - Zaktualizuj klasy: 
       - Poprzednie koło -> dodaj .completed.
       - Aktualne koło -> dodaj .active.
       - Treść kroku -> pokaż odpowiedni div (klasa .active), ukryj pozostałe.
  5. Obsłuż kliknięcie "Wstecz":
     - Zmniejsz currentStep.
     - Cofnij zmiany w klasach.
  6. Zarządzaj stanem przycisków (disabled):
     - Jeśli krok 1 -> Wstecz nieaktywny.
     - Jeśli ostatni krok -> Dalej nieaktywny.
*/

const circles = document.querySelectorAll('.circle');
// ...
const prev = document.querySelector('#btnPrev');
const next = document.querySelector('#btnNext');
const step = document.querySelectorAll('.step');

let currentStep = 0;

next.addEventListener('click', function(){
   currentStep = currentStep += 1;
   if (currentStep > 2){
      currentStep = 2;
   }
   circles[currentStep - 1].classList.add('completed');
   circles[currentStep - 1].classList.remove('active');
   circles[currentStep].classList.add('active');
   step[currentStep - 1].classList.remove('active');
   step[currentStep].classList.add('active');
})

prev.addEventListener('click', function(){
   currentStep = currentStep - 1;
   if (currentStep < 0){
      currentStep = 0;
   }
   
   circles[currentStep + 1].classList.remove('active');
   circles[currentStep].classList.remove('completed');
   circles[currentStep].classList.add('active');
   step[currentStep + 1].classList.remove('active');
   step[currentStep].classList.add('active');
})


















if (currentStep == 0){
   prev.outerHTML = '<button id="btnPrev" class="btn" disabled>Wstecz</button>'
}
else
if (currentStep == 2){
   prev.outerHTML = '<button id="btnNext" class="btn" disabled>Dalej</button>'
}