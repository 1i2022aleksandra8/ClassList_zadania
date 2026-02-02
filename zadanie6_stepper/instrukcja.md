# Zadanie 6 (Grupa B): Kreator Postępów (Stepper)

## Opis zadania

Zaimplementuj mechanizm wielokrokowego formularza (stepper). Użytkownik przemieszcza się między krokami (1-3) za pomocą przycisków "Wstecz" i "Dalej".

## Wymagania

1. **Nawigacja:**
   - Przycisk "Dalej" przechodzi do następnego kroku, "Wstecz" cofa do poprzedniego.
   - Nie można wyjść poza zakres (poniżej 1 i powyżej 3).

2. **Aktualizacja widoku (Treść):**
   - W danym momencie wyświetlany jest tylko jeden div z klasą `.step` (dodaj mu klasę `.active`, zabierz pozostałym).

3. **Wskaźnik postępu (Kółka):**
   - Kółko aktualnego kroku powinno mieć klasę `.active`.
   - Kółka kroków już zaliczonych (poprzednich) powinny mieć klasę `.completed`.
   - Kółka przyszłe nie powinny mieć żadnej dodatkowej klasy.

4. **Stan przycisków:**
   - Na pierwszym kroku przycisk "Wstecz" powinien być nieaktywny (atrybut `disabled`).
   - Na ostatnim kroku przycisk "Dalej" powinien być nieaktywny.

## Wskazówka

Możesz użyć tablicy/kolekcji elementów i indeksować je za pomocą zmiennej pomocniczej `currentStep` (pamiętając, że tablice są indeksowane od 0, a kroki zazwyczaj liczymy od 1).

## Wymagania Techniczne

1. W sekcji `<head>` pliku `index.html` dodaj meta tag z danymi autora:
   `<meta name="author" content="Imię Nazwisko klasa">`
2. W stopce strony (`<footer>`) dodaj swoje imię, nazwisko i klasę.
