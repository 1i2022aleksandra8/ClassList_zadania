# Zadanie 2 (Grupa B): Walidator Wieku

## Opis zadania

Stwórz walidację pola wieku. Sprawdzenie powinno nastąpić w momencie, gdy użytkownik skończy pisać i kliknie poza pole (zdarzenie `blur`).

## Wymagania

1. Pobierz pole input oraz element na komunikat.
2. Dodaj obsługę zdarzenia `blur` (utrata fokusu).
3. Pobierz wartość i przekonwertuj ją na liczbę.
4. Zastosuj logikę:
   - Jeśli pole jest puste lub wartość nie jest liczbą -> dodaj klasę `.error`, ustaw komunikat "Błędne dane".
   - Jeśli wiek < 18 -> dodaj klasę `.warning`, ustaw komunikat "Wymagana zgoda rodzica".
   - Jeśli wiek >= 18 -> dodaj klasę `.success`, ustaw komunikat "Wiek zweryfikowany".

## Klasy CSS

Pamiętaj, aby przed dodaniem nowej klasy usunąć pozostałe (np. jeśli dodajesz `.success`, usuń `.error` i `.warning`), aby kolory się nie mieszały.

## Wymagania Techniczne

1. W sekcji `<head>` pliku `index.html` dodaj meta tag z danymi autora:
   `<meta name="author" content="Imię Nazwisko klasa">`
2. W stopce strony (`<footer>`) dodaj swoje imię, nazwisko i klasę.
