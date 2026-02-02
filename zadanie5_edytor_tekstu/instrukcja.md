# Zadanie 5 (Grupa B): Edytor Tekstu

## Opis zadania

Zaimplementuj prosty edytor stylu tekstu. Masz do dyspozycji 3 przyciski: Pogrubienie, Kursywa, Podkreślenie. Każdy z nich działa niezależnie od innych.

## Wymagania

1. Pobierz przyciski oraz akapit tekstu, który będziesz formatować.
2. Dodaj obsługę kliknięcia każdego przycisku.
3. Po kliknięciu:
   - **Przełącz (toggle)** odpowiednią klasę stylu na akapicie tekstu (np. `.bold`).
   - **Przełącz (toggle)** klasę `.active` na samym przycisku, aby użytkownik wiedział, czy dana opcja jest włączona.

## Wskazówka

Style mogą się nakładać (tekst może być jednocześnie pogrubiony i pochylony). Użyj `classList.toggle` dla najprostszego rozwiązania.

## Wymagania Techniczne

1. W sekcji `<head>` pliku `index.html` dodaj meta tag z danymi autora:
   `<meta name="author" content="Imię Nazwisko klasa">`
2. W stopce strony (`<footer>`) dodaj swoje imię, nazwisko i klasę.
