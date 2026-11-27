# XWGUI

XWGUI (X Window Graphical User Interface) to biblioteka narzędziowa do budowy systemu
[xBiuro](https://github.com/harbour-pl/xbiuro). Zawiera niezbędne do tego narzędzia okna, kontrolki i funkcje
systemowe. Baza danych jest oparta na tabelach DBF. Obsługa tabel DBF jest własną implementacją i zawiera nowe
rozwiązania projektowe.

## Platformy

- [x] Windows
- [ ] Linux
- [ ] macOS

## Budowanie

W MSYS2 clang64:

```sh
make install
make example
```

Przykład jest w `example/xwgui.c`, dokumentacja w `docs/index.html`.

