# Zadanie 1 (Grupa B): System Reakcji

## Opis zadania

Stwórz prosty system oceniania komentarza (reakcje). Użytkownik może dać "kciuk w górę" (Like) lub "kciuk w dół" (Dislike), ale nie oba naraz.

## Wymagania

1. Pobierz dwa przyciski: Like i Dislike.
2. Dodaj obsługę kliknięcia dla obu przycisków.
3. Logika dla Like:
   - Jeśli jest już aktywny -> usuń aktywność (odznacz).
   - Jeśli nie jest aktywny -> aktywuj go ORAZ upewnij się, że Dislike jest nieaktywny.
4. Logika dla Dislike:
   - Analogicznie: jeśli aktywny -> odznacz.
   - Jeśli nieaktywny -> aktywuj go i wyłącz Like.

## Klasa aktywna

W stylach przygotowana jest klasa `.active`, która zmienia kolor przycisku.

## Wymagania Techniczne

1. W sekcji `<head>` pliku `index.html` dodaj meta tag z danymi autora:
   `<meta name="author" content="Imię Nazwisko klasa">`
2. W stopce strony (`<footer>`) dodaj swoje imię, nazwisko i klasę.
