# Zadanie 7 (Grupa B): Rezerwacja Miejsc

## Opis zadania

Stwórz system wyboru miejsc w kinie. Użytkownik widzi salę z miejscami wolnymi, zajętymi i wybranymi.

## Wymagania

1. **Wybór miejsca:**
   - Kliknięcie w wolne siedzenie (`.seat` bez `.occupied`) powinno dodać/usunąć klasę `.selected`.
   - Kliknięcie w siedzenie zajęte (`.seat.occupied`) nie powinno nic robić (nie można go wybrać).

2. **Licznik:**
   - Aktualizuj na bieżąco liczbę wybranych miejsc (`span#count`).

3. **Rezerwacja (Przycisk):**
   - Po kliknięciu "Rezerwuj wybrane":
     - Wszystkie miejsca z klasą `.selected` powinny otrzymać klasę `.occupied`.
     - Klasa `.selected` powinna zostać usunięta.
     - Licznik powinien wrócić do 0.

## Wskazówka

Pamiętaj, że `querySelectorAll` pobiera statyczną listę elementów w momencie wywołania (jeśli nie używasz `getElementsByClassName`). Jeśli chcesz by działało to dynamicznie, operuj na klasach.
Zdarzenie kliknięcia możesz dodać do każdego siedzenia pętlą `forEach` lub użyć delegacji zdarzeń na kontenerze.

## Wymagania Techniczne

1. W sekcji `<head>` pliku `index.html` dodaj meta tag z danymi autora:
   `<meta name="author" content="Imię Nazwisko klasa">`
2. W stopce strony (`<footer>`) dodaj swoje imię, nazwisko i klasę.
