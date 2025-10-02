# Kalkulator Wartości Odżywczych

Webowa aplikacja do obliczania wartości odżywczych posiłków, zbudowana w Angular i TypeScript, zaprojektowana aby pomóc użytkownikom komponować posiłki i łatwo obliczać ich wartości odżywcze.

## Przegląd

Ta aplikacja zapewnia intuicyjny interfejs do tworzenia niestandardowych przepisów i analizowania ich zawartości odżywczej. Użytkownicy mogą przeglądać obszerną bazę danych składników, budować spersonalizowane posiłki i śledzić podstawowe informacje odżywcze poprzez interaktywny interfejs drag-and-drop.

## Główne Funkcjonalności

### Interaktywne Zarządzanie Składnikami

> GIFy prezentujące działanie funkcjonalności znajdują się w `/Nutrients-test/functionality-gifs`

- **Interfejs Drag & Drop**: Płynne przenoszenie składników z panelu składników do panelu przepisu
![Interfejs drag and drop](/Nutrients-test/functionality-gifs/Dodawanie-skladnikow-drag-n-drop.gif)
- **Podwójne kliknięcie w skłądnik**: w liście składników można podwójnie kliknąc w ikone wybranego składnika aby automatycznie przenieść na panel przepisu, bez potrzeby przenoszenia
![Interfejs double click](/Nutrients-test/functionality-gifs/Dodawanie-skladnikow-double-click.gif)
- **Elastyczne Układanie**: Zmiana kolejności składników w przepisie poprzez przeciąganie ich na nowe pozycje
![Elastyczne układanie](/Nutrients-test/functionality-gifs/Przestawianie-skladnikow-i-usuwanie.gif)
- **Dynamiczna Kontrola Ilości**: Dostosowywanie ilości składników za pomocą wygodnych suwaków lub podwójnego kliknięcia w etykiety ilości
![Dynamiczna kontrola ilości](/Nutrients-test/functionality-gifs/Aktualizacja-wartosci-po-zmianach-gramatury.gif)
- **Aktualizacje w Czasie Rzeczywistym**: Wartości odżywcze aktualizują się natychmiast podczas modyfikowania składników i ilości
- **Usuwanie wybranych składników**: Wybrane składniki można usuwać zarówno pojedynczo poprzez użycie przycisku "X", jak i hurtowo dzięki przyciskowi "wyczyść", który usuwa wszystkie wybrane wcześniej składniki 

### Zaawansowane Filtrowanie i Wyszukiwanie
![Filtrowanie i wyszukiwanie](/Nutrients-test/functionality-gifs/Filtrowanie-skladnikow.gif)
- **Filtrowanie Kategorii**: Filtrowanie składników według typu, w tym mięso, produkty mleczne, warzywa, zboża, owoce i tłuszcze
- **Sortowanie Alfabetyczne**: Przeglądanie składników alfabetycznie dla szybkiej nawigacji
- **Inteligentne Wyszukiwanie**: Używanie pola wyszukiwania do szybkiego znajdowania konkretnych składników według nazwy
- **Wizualne Kodowanie Kolorami**: Każda kategoria składników ma charakterystyczne kolory dla łatwego rozpoznawania

### Kompleksowa Analiza Odżywcza
- **Kompletne Podsumowanie Przepisu**: Przeglądanie całkowitych wartości odżywczych dla całej kompozycji posiłku
- **Szczegółowy Rozkład**: Dostęp do kompletnych informacji odżywczych, w tym kalorie, białka, węglowodany i tłuszcze
- **Analiza Składnik po Składniku**: Zobacz indywidualny wkład odżywczy każdego komponentu przepisu

### Ulepszone Doświadczenie Użytkownika
- **Wizualizacja 3D**: Wciągająca scena 3D napędzana przez Three.js z renderowaniem animowanego modelu jedzenia
- **Responsywny Design**: Zoptymalizowany interfejs, który działa płynnie na komputerach stacjonarnych i urządzeniach mobilnych
- **Efekty Matowego Szkła**: Nowoczesny interfejs z efektami rozmycia tła i neomorficznymi elementami designu

## Stack Technologiczny

- **Framework Frontend**: Angular 20.3 ze standalone komponentami
- **Język**: TypeScript 5.0 dla zwiększonego bezpieczeństwa typów
- **Renderowanie 3D**: Three.js dla grafiki 3D przyspieszonej przez WebGL
- **Stylowanie**: SCSS z modularnym zarządzaniem kolorami i responsywnym designem
- **Funkcje Interaktywne**: Angular CDK dla funkcjonalności drag-and-drop
- **System Budowania**: Vite dla szybkiego developmentu i zoptymalizowanych buildów produkcyjnych

## Rozpoczęcie Pracy

1. Sklonuj repozytorium
2. Zainstaluj zależności komendą `npm install`
3. Uruchom serwer deweloperski komendą `npm start`
4. Przejdź do `http://localhost:4200` aby rozpocząć budowanie przepisów

## Przewodnik Użytkowania

### Budowanie Przepisu
1. **Przeglądaj Składniki**: Eksploruj obszerną bazę danych składników w lewym panelu
2. **Zastosuj Filtry**: Użyj filtrów kategorii lub sortowania alfabetycznego do znajdowania konkretnych składników
3. **Funkcja Wyszukiwania**: Wpisz nazwy składników w polu wyszukiwania dla szybkiego dostępu
4. **Dodaj Składniki**: Przeciągnij składniki z listy do panelu przepisu
5. **Dostosuj Ilości**: Użyj suwaków lub podwójnie kliknij wartości aby modyfikować ilości składników
6. **Zmień Kolejność Elementów**: Przeciągaj składniki w panelu przepisu aby zmienić ich kolejność
7. **Usuń Składniki**: Przeciągnij elementy z powrotem do listy składników lub użyj przycisku usuwania

### Analiza Odżywcza
Aplikacja automatycznie oblicza i wyświetla:
- Całkowite kalorie dla kompletnego przepisu
- Rozkład makroskładników (białka, węglowodany, tłuszcze)
- Indywidualny wkład składników
- Aktualizacje w czasie rzeczywistym podczas modyfikowania przepisu

### Funkcje Wizualne
- Kodowane kolorami kategorie składników dla łatwej identyfikacji
- Animowany model 3D jedzenia dla zwiększonej atrakcyjności wizualnej
- Płynne przejścia i animacje w całym interfejsie
- Responsywny układ, który dostosowuje się do różnych rozmiarów ekranu

## Architektura Projektu

Aplikacja przestrzega nowoczesnych najlepszych praktyk Angular z architekturą opartą na komponentach:

- **Modularny Design**: Oddzielne komponenty dla zarządzania składnikami, kompozycji przepisów i analizy odżywczej
- **Bezpieczeństwo Typów**: Kompleksowe interfejsy TypeScript dla wszystkich struktur danych

## Funkcje Deweloperskie

- **Hot Reload**: Natychmiastowa informacja zwrotna podczas developmentu
- **Moduły CSS**: Zakresowe stylowanie z preprocessingiem SCSS
- **Testowanie**: Kompleksowe pokrycie testami jednostkowymi z Jasmine i Karma

---

*Rozpocznij eksplorację odżywiania poprzez interaktywne tworzenie przepisów i odkryj wartość odżywczą swoich ulubionych kombinacji posiłków.*
