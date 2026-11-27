/* Wygenerowane przez build-doc.cjs. */
const xwguiCatalog = {
  "entries": [
    {
      "name": "AppArg",
      "url": "reference/app/apparg.html",
      "summary": "Argument programu w UTF-8; 0 to sam program, brak argumentu daje \"\"",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "AppCreate",
      "url": "reference/app/appcreate.html",
      "summary": "Tworzy aplikację: instancję programu i klasy okien",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "AppDestroy",
      "url": "reference/app/appdestroy.html",
      "summary": "Niszczy główne okno, jeśli jeszcze istnieje, i zwalnia aplikację",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "AppRun",
      "url": "reference/app/apprun.html",
      "summary": "Pokazuje główne okno i obsługuje komunikaty, dopóki się nie zamknie; zwraca kod wyjścia, -1 dla okna innej aplikacji albo gdy pętla już działa",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "BrowseAddCheck",
      "url": "reference/browse/browseaddcheck.html",
      "summary": "Kolumna znacznika: check zwraca znacznik bieżącego rekordu, pokazany jako ptaszek √; Spacja albo klik na nim woła setCheck z przeciwną wartością, jak blok get/set TBColumn; zwraca numer kolumny od 1",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseAddColumn",
      "url": "reference/browse/browseaddcolumn.html",
      "summary": "Kolumna tekstu: text zwraca tekst bieżącego rekordu, bez spacji na końcu; width to liczba znaków, a 0 bierze długość tekstu bieżącego rekordu; align to BROWSE_LEFT, BROWSE_RIGHT albo BROWSE_CENTER; zwraca numer kolumny od 1",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseAddNumber",
      "url": "reference/browse/browseaddnumber.html",
      "summary": "Kolumna liczby z prawej strony: number zwraca liczbę bieżącego rekordu, picture formatuje ją jak Transform() (\"\" jak Str()); width 0 bierze długość szablonu maski albo 10 znaków; zwraca numer kolumny od 1",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseColor",
      "url": "reference/browse/browsecolor.html",
      "summary": "Kolor części tabeli: BROWSE_HEADBACKGROUND, BROWSE_HEADFOREGROUND, BROWSE_HEADLINE, BROWSE_BACKGROUND, BROWSE_ALTERNATEBACKGROUND, BROWSE_FOREGROUND, BROWSE_GRIDLINE, BROWSE_CURSORBACKGROUND, BROWSE_CURSORFOREGROUND, BROWSE_INACTIVECURSOR (kursor tabeli bez fokusu) albo BROWSE_CHECKFOREGROUND (ptaszek)",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseColPos",
      "url": "reference/browse/browsecolpos.html",
      "summary": "Kolumna kursora od 1, jak TBrowse:colPos",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseCreate",
      "url": "reference/browse/browsecreate.html",
      "summary": "Tabela rekordów jak TBrowse; width i height 0 dają 400 x 200; kursor stoi na jednej komórce, a strzałki, PgUp, PgDn, Ctrl+Home i Ctrl+End przesuwają go jak w TBrowse; przejście na inny rekord woła akcję z ControlSetAction(), Enter albo podwójny klik akcję z ControlSetDoubleClick(); w czasie WinReadModal() tabela czeka",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseFreeze",
      "url": "reference/browse/browsefreeze.html",
      "summary": "Liczba pierwszych kolumn, które stoją z lewej, gdy tabela przewija się w bok, jak TBrowse:freeze",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseRefresh",
      "url": "reference/browse/browserefresh.html",
      "summary": "Czyta od nowa wiersze wokół bieżącego rekordu, np. po zmianie danych albo przeniesieniu rekordu",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseSetColor",
      "url": "reference/browse/browsesetcolor.html",
      "summary": "Nowy kolor 0xRRGGBB części tabeli jak w BrowseColor(); część albo kolor spoza zakresu nic nie zmienia",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseSetColPos",
      "url": "reference/browse/browsesetcolpos.html",
      "summary": "Przenosi kursor do kolumny column; tabela przewija się tak, żeby kolumnę było widać",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseSetEmpty",
      "url": "reference/browse/browsesetempty.html",
      "summary": "T, gdy dane nie mają rekordów; tabela nie pokazuje wtedy żadnego wiersza zamiast rekordu za końcem danych",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseSetFreeze",
      "url": "reference/browse/browsesetfreeze.html",
      "summary": "Ustawia liczbę pierwszych kolumn przypiętych z lewej podczas przewijania. Wartość 0 lub ujemna wyłącza przypięcie",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseSetPosition",
      "url": "reference/browse/browsesetposition.html",
      "summary": "Miejsce bieżącego rekordu w danych 0..1 dla paska przewijania; bez niej pasek zna tylko początek i koniec danych",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "BrowseSetSource",
      "url": "reference/browse/browsesetsource.html",
      "summary": "Dane tabeli: goTop i goBottom ustawiają pierwszy i ostatni rekord, skip przesuwa rekord o count i zwraca, o ile przesunął, jak skipBlock; data dostają te akcje oraz akcje z BrowseSetPosition() i BrowseSetEmpty()",
      "category": "browse",
      "categoryTitle": "Tabele rekordów"
    },
    {
      "name": "ButtonCreate",
      "url": "reference/kontrolki/buttoncreate.html",
      "summary": "Przycisk; width i height 0 dają 90 x 25; klik woła akcję z ControlSetAction()",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ButtonIsCancel",
      "url": "reference/kontrolki/buttoniscancel.html",
      "summary": "T, gdy przycisk jest przyciskiem anulowania okna",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ButtonIsDefault",
      "url": "reference/kontrolki/buttonisdefault.html",
      "summary": "T, gdy przycisk jest domyślnym przyciskiem okna",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ButtonSetCancel",
      "url": "reference/kontrolki/buttonsetcancel.html",
      "summary": "Przycisk anulowania okna, naciskany przez Esc",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ButtonSetDefault",
      "url": "reference/kontrolki/buttonsetdefault.html",
      "summary": "Domyślny przycisk okna, naciskany przez Enter",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "CheckBoxChecked",
      "url": "reference/kontrolki/checkboxchecked.html",
      "summary": "T, gdy pole wyboru albo przycisk opcji jest zaznaczony",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "CheckBoxCreate",
      "url": "reference/kontrolki/checkboxcreate.html",
      "summary": "Pole wyboru; width i height 0 dają 200 x 20; zmiana stanu przez użytkownika woła akcję z ControlSetAction()",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "CheckBoxSetChecked",
      "url": "reference/kontrolki/checkboxsetchecked.html",
      "summary": "Zaznacza albo czyści pole wyboru albo przycisk opcji; zaznaczony przycisk opcji czyści pozostałe ze swojej grupy",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ComboBoxCreate",
      "url": "reference/listy/comboboxcreate.html",
      "summary": "Lista rozwijana; width i height 0 dają 200 x 200 razem z rozwiniętą listą; funkcje jak dla ListBox, bez podwójnego kliku",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ControlAnchor",
      "url": "reference/kontrolki/controlanchor.html",
      "summary": "Krawędzie okna, do których przypięta jest kontrolka, jako litery L, T, R, B; \"LT\" bez przypięcia",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlColor",
      "url": "reference/kontrolki/controlcolor.html",
      "summary": "Własny kolor tekstu etykiety, ramki, pola wyboru albo przycisku opcji 0xRRGGBB; -1 = kolor okna",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlDestroy",
      "url": "reference/kontrolki/controldestroy.html",
      "summary": "Usuwa kontrolkę z okna",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlEnabled",
      "url": "reference/kontrolki/controlenabled.html",
      "summary": "T, gdy kontrolka jest dostępna",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlFocused",
      "url": "reference/kontrolki/controlfocused.html",
      "summary": "T, gdy kontrolka ma fokus klawiatury",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlHeight",
      "url": "reference/kontrolki/controlheight.html",
      "summary": "Wysokość kontrolki",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlRemoveContextMenu",
      "url": "reference/kontrolki/controlremovecontextmenu.html",
      "summary": "Kontrolka bez własnego menu podręcznego; prawy klik otwiera wtedy menu podręczne okna",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetAction",
      "url": "reference/kontrolki/controlsetaction.html",
      "summary": "Akcja kontrolki: klik przycisku, zmiana pola wyboru albo przycisku opcji; dostaje kontrolkę i dane data",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetAnchor",
      "url": "reference/kontrolki/controlsetanchor.html",
      "summary": "Przypina kontrolkę do krawędzi okna: L, T, R, B; przeciwne krawędzie rozciągają kontrolkę razem z oknem",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetColor",
      "url": "reference/kontrolki/controlsetcolor.html",
      "summary": "Własny kolor tekstu etykiety, ramki, pola wyboru albo przycisku opcji 0xRRGGBB; -1 wraca do koloru okna",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetContextMenu",
      "url": "reference/kontrolki/controlsetcontextmenu.html",
      "summary": "Menu podręczne kontrolki z MenuCreatePopup(), otwierane prawym przyciskiem myszy albo klawiszem menu; pola edycji zostają przy swoim menu Windows; polecenia menu działają jak polecenia paska menu",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetDoubleClick",
      "url": "reference/kontrolki/controlsetdoubleclick.html",
      "summary": "Akcja podwójnego kliku na liście, w tabeli albo w drzewie; dostaje kontrolkę i dane data",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetEnabled",
      "url": "reference/kontrolki/controlsetenabled.html",
      "summary": "Udostępnia albo wyłącza kontrolkę",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetFocus",
      "url": "reference/kontrolki/controlsetfocus.html",
      "summary": "Daje kontrolce fokus klawiatury",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetFont",
      "url": "reference/kontrolki/controlsetfont.html",
      "summary": "Własna czcionka kontrolki dla skali jej ekranu: name \"\" bierze czcionkę systemu (Segoe UI), size w punktach, 0 bierze rozmiar czcionki systemu; ControlSetFont( control, \"\", 0, F, F ) wraca do czcionki systemu",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetHeight",
      "url": "reference/kontrolki/controlsetheight.html",
      "summary": "Wysokość kontrolki; kotwice idą za nią",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetText",
      "url": "reference/kontrolki/controlsettext.html",
      "summary": "Tekst kontrolki w UTF-8",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetToolTip",
      "url": "reference/kontrolki/controlsettooltip.html",
      "summary": "Podpowiedź pokazywana, gdy mysz stoi nad kontrolką; \"\" ją usuwa",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetValid",
      "url": "reference/kontrolki/controlsetvalid.html",
      "summary": "Sprawdzenie pola edycji, gdy fokus przechodzi do innej kontrolki okna; F zatrzymuje fokus w polu",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetVisible",
      "url": "reference/kontrolki/controlsetvisible.html",
      "summary": "Pokazuje albo ukrywa kontrolkę",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetWidth",
      "url": "reference/kontrolki/controlsetwidth.html",
      "summary": "Szerokość kontrolki; kotwice idą za nią",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetX",
      "url": "reference/kontrolki/controlsetx.html",
      "summary": "Przesuwa lewą krawędź kontrolki; kotwice idą za nią",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlSetY",
      "url": "reference/kontrolki/controlsety.html",
      "summary": "Przesuwa górną krawędź kontrolki; kotwice idą za nią",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlText",
      "url": "reference/kontrolki/controltext.html",
      "summary": "Tekst kontrolki w UTF-8, ważny do następnego wywołania dla tej kontrolki",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlToolTip",
      "url": "reference/kontrolki/controltooltip.html",
      "summary": "Podpowiedź pokazywana, gdy mysz stoi nad kontrolką; \"\" bez podpowiedzi",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlVisible",
      "url": "reference/kontrolki/controlvisible.html",
      "summary": "T, gdy kontrolka jest widoczna",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlWidth",
      "url": "reference/kontrolki/controlwidth.html",
      "summary": "Szerokość kontrolki",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlX",
      "url": "reference/kontrolki/controlx.html",
      "summary": "Lewa krawędź kontrolki w oknie",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ControlY",
      "url": "reference/kontrolki/controly.html",
      "summary": "Górna krawędź kontrolki w oknie",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "DatePickerCreate",
      "url": "reference/widoki/datepickercreate.html",
      "summary": "Pole daty z rozwijanym kalendarzem; width i height 0 dają 120 x 23; zmiana daty woła akcję z ControlSetAction()",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "DatePickerDate",
      "url": "reference/widoki/datepickerdate.html",
      "summary": "Wybrana data",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "DatePickerSetDate",
      "url": "reference/widoki/datepickersetdate.html",
      "summary": "Wybiera datę; pusta data nie jest dozwolona",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "DateYear",
      "url": "reference/system/dateyear.html",
      "summary": "Bieżący rok według czasu lokalnego",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "DialogCreate",
      "url": "reference/app/dialogcreate.html",
      "summary": "Tworzy ukryte okno dialogowe na środku okna owner, z obszarem roboczym width x height pikseli logicznych; NULL dla rozmiaru mniejszego od 1",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "DialogEnd",
      "url": "reference/app/dialogend.html",
      "summary": "Kończy DialogShowModal() z wynikiem result",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "DialogShowModal",
      "url": "reference/app/dialogshowmodal.html",
      "summary": "Pokazuje okno dialogowe, blokuje okno właściciela i czeka na koniec okna; potem okno znika razem ze swoimi kontrolkami; zwraca wynik z DialogEnd(), 0 po zamknięciu okna bez DialogEnd()",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "DirCreate",
      "url": "reference/system/dircreate.html",
      "summary": "Tworzy katalog (ścieżka w UTF-8); T tylko wtedy, gdy powstał nowy",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "EditCreate",
      "url": "reference/pola/editcreate.html",
      "summary": "Pole tekstu w jednym wierszu; width i height 0 dają 200 x 23; zmiana tekstu woła akcję z ControlSetAction(), utrata fokusu sprawdzenie z ControlSetValid()",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditDate",
      "url": "reference/pola/editdate.html",
      "summary": "Data pola daty jako RRRRMMDD; 0 dla pustej albo złej daty",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditMaxLength",
      "url": "reference/pola/editmaxlength.html",
      "summary": "Najwięcej znaków, które użytkownik może wpisać",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditNumber",
      "url": "reference/pola/editnumber.html",
      "summary": "Liczba pola liczbowego",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditPicture",
      "url": "reference/pola/editpicture.html",
      "summary": "Maska pola; \"\" bez niej",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditReadOnly",
      "url": "reference/pola/editreadonly.html",
      "summary": "T, gdy użytkownik nie może zmieniać tekstu",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditSetDate",
      "url": "reference/pola/editsetdate.html",
      "summary": "Robi z pola pole daty w formacie Set( SET_DATEFORMAT ); date RRRRMMDD, 0 = pusta",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditSetMaxLength",
      "url": "reference/pola/editsetmaxlength.html",
      "summary": "Najwięcej znaków, które użytkownik może wpisać; 0 wraca do największej liczby systemu",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditSetNumber",
      "url": "reference/pola/editsetnumber.html",
      "summary": "Robi z pola pole liczbowe z liczbą przy prawej krawędzi, pokazaną przez maskę",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditSetPicture",
      "url": "reference/pola/editsetpicture.html",
      "summary": "Maska: szablon 9 # A N X L Y ! ze znakami stałymi, funkcje @! @K @R przed spacją; liczba bierze cyfry szablonu przed kropką i po niej, data idzie za Set( SET_DATEFORMAT ); wartość pokazuje się od nowa przez maskę",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "EditSetReadOnly",
      "url": "reference/pola/editsetreadonly.html",
      "summary": "Pozwala albo zabrania użytkownikowi zmieniać tekst; program zawsze może go ustawić",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "FileExecute",
      "url": "reference/system/fileexecute.html",
      "summary": "Otwiera plik w programie, który system ma dla jego rodzaju, np. PDF w przeglądarce PDF; plik programu (.exe, .bat) uruchamia się, więc nie podajemy tu plików z niepewnego źródła",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "FileExists",
      "url": "reference/system/fileexists.html",
      "summary": "T, gdy pod ścieżką (w UTF-8) jest zwykły plik; katalog albo urządzenie dają F",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "FileOpenDialog",
      "url": "reference/system/fileopendialog.html",
      "summary": "Wybór istniejącego pliku; filters jak \"Pliki tekstowe|*.txt|Wszystkie pliki|*.*\", \"\" bez filtrów; path podaje plik na start (\"\" bez niego) i dostaje wybrany plik; title \"\" daje tytuł systemu; F po rezygnacji albo gdy wybrany plik nie mieści się w size bajtach",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "FileSaveDialog",
      "url": "reference/system/filesavedialog.html",
      "summary": "Wybór pliku do zapisu jak w FileOpenDialog(); nazwa bez rozszerzenia dostaje rozszerzenie pierwszego filtra, a istniejący plik wymaga potwierdzenia nadpisania",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "FontIconCreate",
      "url": "reference/obrazy/fonticoncreate.html",
      "summary": "Znak code czcionki TrueType z pliku file (UTF-8) w kolorze color 0xRRGGBB (-1 = kolor tekstu systemu) na kwadracie size pikseli (0 = 24), jako obraz przycisku",
      "category": "obrazy",
      "categoryTitle": "Obrazy i ikony"
    },
    {
      "name": "GetDate",
      "url": "reference/pola/getdate.html",
      "summary": "Pole GET daty value RRRRMMDD (0 = pusta) w formacie Set( SET_DATEFORMAT )",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "GetMemo",
      "url": "reference/pola/getmemo.html",
      "summary": "Pole GET tekstu w wielu wierszach: tekst się zawija, pole pokazuje jeden wiersz i w czasie edycji rośnie nad polami pod nim do najwyżej rows wierszy; Shift+Enter zaczyna nowy wiersz (CR LF)",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "GetNumber",
      "url": "reference/pola/getnumber.html",
      "summary": "Pole GET liczby value przy prawej krawędzi, pokazanej przez maskę; edytowana jest sama liczba",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "GetText",
      "url": "reference/pola/gettext.html",
      "summary": "Pole GET tekstu value o rozmiarze size (z zerem na końcu), jak @ ... GET ... PICTURE; bez maski można wpisać najwyżej tyle znaków, ile mieści zmienna; WinReadModal() zakończony zapisem wpisuje do niej nową wartość",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "GroupBoxCreate",
      "url": "reference/kontrolki/groupboxcreate.html",
      "summary": "Ramka z podpisem wokół innych kontrolek; width i height 0 dają 200 x 100",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "LabelAddLineAfter",
      "url": "reference/kontrolki/labeladdlineafter.html",
      "summary": "Linia jednego piksela od końca tekstu do prawej krawędzi etykiety, jak po tytule części formularza; color 0xRRGGBB, -1 = kolor ramek",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "LabelAlign",
      "url": "reference/kontrolki/labelalign.html",
      "summary": "Wyrównanie tekstu: 0 do lewej, 1 do prawej, 2 do środka",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "LabelBorder",
      "url": "reference/kontrolki/labelborder.html",
      "summary": "T, gdy etykieta ma wklęsłą ramkę pola",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "LabelCreate",
      "url": "reference/kontrolki/labelcreate.html",
      "summary": "Tekst w oknie; width i height 0 dają 200 x 20",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "LabelSetAlign",
      "url": "reference/kontrolki/labelsetalign.html",
      "summary": "Wyrównanie tekstu: 0 do lewej, 1 do prawej (opisy przed polami), 2 do środka",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "LabelSetBorder",
      "url": "reference/kontrolki/labelsetborder.html",
      "summary": "Wklęsła ramka pola i stała czcionka 9x18 pól edycji, do pokazania wartości jak SAY",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ListBoxAdd",
      "url": "reference/listy/listboxadd.html",
      "summary": "Dopisuje pozycję na końcu listy i zwraca jej numer",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListBoxClear",
      "url": "reference/listy/listboxclear.html",
      "summary": "Usuwa wszystkie pozycje",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListBoxCount",
      "url": "reference/listy/listboxcount.html",
      "summary": "Liczba pozycji",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListBoxCreate",
      "url": "reference/listy/listboxcreate.html",
      "summary": "Lista tekstów; width i height 0 dają 200 x 100; wybór woła akcję z ControlSetAction(), podwójny klik akcję z ControlSetDoubleClick()",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListBoxItem",
      "url": "reference/listy/listboxitem.html",
      "summary": "Tekst pozycji, ważny do następnego wywołania dla tej kontrolki",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListBoxSelected",
      "url": "reference/listy/listboxselected.html",
      "summary": "Numer wybranej pozycji; 0, gdy nic nie jest wybrane",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListBoxSelectedText",
      "url": "reference/listy/listboxselectedtext.html",
      "summary": "Tekst wybranej pozycji; \"\" gdy nic nie jest wybrane",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListBoxSetSelected",
      "url": "reference/listy/listboxsetselected.html",
      "summary": "Wybiera pozycję; 0 czyści wybór",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewAddColumn",
      "url": "reference/listy/listviewaddcolumn.html",
      "summary": "Nowa kolumna o szerokości width; align 0 do lewej, 1 do prawej, 2 do środka (pierwsza kolumna zawsze do lewej); zwraca numer kolumny",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewAddRow",
      "url": "reference/listy/listviewaddrow.html",
      "summary": "Dopisuje wiersz z tekstami count pierwszych kolumn i zwraca jego numer",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewCell",
      "url": "reference/listy/listviewcell.html",
      "summary": "Tekst komórki, ważny do następnego wywołania dla tej kontrolki",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewClear",
      "url": "reference/listy/listviewclear.html",
      "summary": "Usuwa wszystkie wiersze; kolumny zostają",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewColumnCount",
      "url": "reference/listy/listviewcolumncount.html",
      "summary": "Liczba kolumn",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewCount",
      "url": "reference/listy/listviewcount.html",
      "summary": "Liczba wierszy",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewCreate",
      "url": "reference/listy/listviewcreate.html",
      "summary": "Tabela tekstów z kolumnami; width i height 0 dają 300 x 200; wybór wiersza przez użytkownika woła akcję z ControlSetAction(), podwójny klik akcję z ControlSetDoubleClick()",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewDelete",
      "url": "reference/listy/listviewdelete.html",
      "summary": "Usuwa wiersz",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewSelected",
      "url": "reference/listy/listviewselected.html",
      "summary": "Numer wybranego wiersza; 0, gdy nic nie jest wybrane",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewSetCell",
      "url": "reference/listy/listviewsetcell.html",
      "summary": "Zmienia tekst komórki",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "ListViewSetSelected",
      "url": "reference/listy/listviewsetselected.html",
      "summary": "Wybiera wiersz i przewija do niego bez akcji wyboru; 0 czyści wybór",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "MemoCreate",
      "url": "reference/pola/memocreate.html",
      "summary": "Pole tekstu w wielu wierszach z przewijaniem; width i height 0 dają 200 x 80; wiersze kończy CR LF",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "MenuAdd",
      "url": "reference/menu/menuadd.html",
      "summary": "Pozycja z akcją wołaną z oknem i danymi data; skrót jak \"Ctrl+S\", \"F1\", \"Alt+F4\", \"\" bez skrótu",
      "category": "menu",
      "categoryTitle": "Menu"
    },
    {
      "name": "MenuAddDisabled",
      "url": "reference/menu/menuadddisabled.html",
      "summary": "Pozycja zawsze szara",
      "category": "menu",
      "categoryTitle": "Menu"
    },
    {
      "name": "MenuAddMenu",
      "url": "reference/menu/menuaddmenu.html",
      "summary": "Nowe menu rozwijane dołączone do menu",
      "category": "menu",
      "categoryTitle": "Menu"
    },
    {
      "name": "MenuAddSeparator",
      "url": "reference/menu/menuaddseparator.html",
      "summary": "Linia oddzielająca",
      "category": "menu",
      "categoryTitle": "Menu"
    },
    {
      "name": "MenuCreate",
      "url": "reference/menu/menucreate.html",
      "summary": "Nowy pasek menu",
      "category": "menu",
      "categoryTitle": "Menu"
    },
    {
      "name": "MenuCreatePopup",
      "url": "reference/menu/menucreatepopup.html",
      "summary": "Nowe menu rozwijane bez paska, np. dla przycisku z menu na pasku przycisków; jego polecenia działają jak polecenia paska menu",
      "category": "menu",
      "categoryTitle": "Menu"
    },
    {
      "name": "MenuStyle",
      "url": "reference/menu/menustyle.html",
      "summary": "Rozszerzony styl menu tworzonych od teraz: rysowane przez program, z paskiem na obrazki o boku imageSize (0 zostawia rozmiar); zwraca poprzedni styl",
      "category": "menu",
      "categoryTitle": "Menu"
    },
    {
      "name": "MsgError",
      "url": "reference/app/msgerror.html",
      "summary": "Okno błędu z przyciskiem OK; title \"\" bierze tytuł aktywnego okna",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "MsgInfo",
      "url": "reference/app/msginfo.html",
      "summary": "Okno informacji z przyciskiem OK; title \"\" bierze tytuł aktywnego okna",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "MsgWarning",
      "url": "reference/app/msgwarning.html",
      "summary": "Okno ostrzeżenia z przyciskiem OK; title \"\" bierze tytuł aktywnego okna",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "MsgYesNo",
      "url": "reference/app/msgyesno.html",
      "summary": "Pytanie z przyciskami Tak i Nie; title \"\" bierze tytuł aktywnego okna; T dla Tak",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "PanelAnchor",
      "url": "reference/kontrolki/panelanchor.html",
      "summary": "Krawędzie okna, do których przypięty jest panel, jako litery L, T, R, B; \"LT\" bez przypięcia",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "PanelCreate",
      "url": "reference/kontrolki/panelcreate.html",
      "summary": "Panel na kontrolki jednej części okna, np. modułu programu, w kolorach okna; width i height 0 dają panel na całym oknie między paskami, paskiem stanu i paskiem bocznym, który idzie za rozmiarem okna; WinClose() zamyka panel razem z jego kontrolkami",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "PanelSetAnchor",
      "url": "reference/kontrolki/panelsetanchor.html",
      "summary": "Przypina panel z własnym rozmiarem do krawędzi okna: L, T, R, B; przeciwne krawędzie rozciągają panel razem z oknem",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "PictureCreate",
      "url": "reference/obrazy/picturecreate.html",
      "summary": "Obraz z pliku (UTF-8): PNG, BMP, JPEG, GIF albo ICO, najwyżej 4096 x 4096 pikseli; plik bez przezroczystości ma przezroczysty kolor lewego górnego piksela",
      "category": "obrazy",
      "categoryTitle": "Obrazy i ikony"
    },
    {
      "name": "ProgressBarCreate",
      "url": "reference/widoki/progressbarcreate.html",
      "summary": "Pasek postępu z zakresem od 0 do 100; width i height 0 dają 200 x 20",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "ProgressBarMaximum",
      "url": "reference/widoki/progressbarmaximum.html",
      "summary": "Największe położenie",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "ProgressBarSetMaximum",
      "url": "reference/widoki/progressbarsetmaximum.html",
      "summary": "Największe położenie; najmniejsze to zawsze 0",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "ProgressBarSetValue",
      "url": "reference/widoki/progressbarsetvalue.html",
      "summary": "Bieżące położenie od 0 do maksimum",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "ProgressBarValue",
      "url": "reference/widoki/progressbarvalue.html",
      "summary": "Bieżące położenie",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "RadioButtonCreate",
      "url": "reference/kontrolki/radiobuttoncreate.html",
      "summary": "Przycisk opcji; przyciski tworzone jeden po drugim tworzą grupę; width i height 0 dają 200 x 20",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "ReadLastKey",
      "url": "reference/pola/readlastkey.html",
      "summary": "Klawisz, którym skończył się ostatni WinReadModal(): K_ENTER, K_PGDN, K_PGUP albo K_ESC",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "SayCreate",
      "url": "reference/kontrolki/saycreate.html",
      "summary": "Tekst w oknie jak @ ... SAY: opis albo, z LabelSetBorder(), wartość z danych; length znaków czcionki 9x18, jak pole GET o length znakach, a bez niego (0) długość tekstu; height 0 daje wysokość pola GET; funkcje jak dla etykiety",
      "category": "kontrolki",
      "categoryTitle": "Kontrolki"
    },
    {
      "name": "Set",
      "url": "reference/system/set.html",
      "summary": "Ustawia nową wartość ustawienia i zwraca poprzednią, ważną do następnego wywołania",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "SidebarAddAction",
      "url": "reference/sidebar/sidebaraddaction.html",
      "summary": "Przycisk z prawej strony nagłówka strony page, widoczny razem ze stroną, z podpowiedzią toolTip (\"\" bez niej); akcja dostaje pasek i dane data",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarAddButton",
      "url": "reference/sidebar/sidebaraddbutton.html",
      "summary": "Nowa strona: ikona na pasku obrazków i panel pod nagłówkiem; klik na ikonie pokazuje panel, klik na ikonie pokazanej strony go ukrywa; title to nazwa strony w nagłówku, w podpowiedzi ikony i w menu paska, shortcut jak w MenuAdd(); panel z SidebarPanel() bierze kontrolki, sekcje, listę albo menu; zwraca numer strony od 1",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarAddGlobal",
      "url": "reference/sidebar/sidebaraddglobal.html",
      "summary": "Przycisk na dole paska obrazków, np. ustawienia, z podpowiedzią toolTip (\"\" bez niej); akcja dostaje pasek i dane data",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarAddItem",
      "url": "reference/sidebar/sidebaradditem.html",
      "summary": "Nowy wiersz listy strony page, jak na liście rozszerzeń: obrazek z lewej, tytuł pogrubiony, tekst pod nim i info na dole (\"\" bez nich); klik na wierszu woła action z paskiem, numerem wiersza i danymi data; lista przewija się, gdy nie mieści się w panelu; zwraca numer wiersza od 1",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarAddSection",
      "url": "reference/sidebar/sidebaraddsection.html",
      "summary": "Nowa sekcja strony page: panel na kontrolki pod nagłówkiem ze strzałką i tytułem title; klik na nagłówku otwiera albo zamyka panel, a otwarte panele dzielą wysokość strony",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarClearItems",
      "url": "reference/sidebar/sidebarclearitems.html",
      "summary": "Usuwa wszystkie wiersze listy strony page, np. przed jej nowym wypełnieniem",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarCreate",
      "url": "reference/sidebar/sidebarcreate.html",
      "summary": "Pasek boczny bez stron przy lewej krawędzi okna, między paskami u góry i na dole",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarPage",
      "url": "reference/sidebar/sidebarpage.html",
      "summary": "Numer pokazanej strony; 0, gdy panel jest ukryty",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarPanel",
      "url": "reference/sidebar/sidebarpanel.html",
      "summary": "Panel strony page; kontrolki kładzie się na nim jak na oknie",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetAccentColor",
      "url": "reference/sidebar/sidebarsetaccentcolor.html",
      "summary": "Kolor znacznika pokazanej strony i liczników 0xRRGGBB, -1 wraca do koloru zaznaczenia systemu",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetBackground",
      "url": "reference/sidebar/sidebarsetbackground.html",
      "summary": "Kolor paneli stron, ich sekcji i nagłówków 0xRRGGBB; na początku kolor paska obrazków",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetBadge",
      "url": "reference/sidebar/sidebarsetbadge.html",
      "summary": "Licznik na ikonie strony; 0 go ukrywa",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetBarColor",
      "url": "reference/sidebar/sidebarsetbarcolor.html",
      "summary": "Kolor paska obrazków 0xRRGGBB, -1 wraca do koloru domyślnego",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetForeground",
      "url": "reference/sidebar/sidebarsetforeground.html",
      "summary": "Kolor tekstu paneli stron, ich sekcji i nagłówków 0xRRGGBB; na początku jasny",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetItemSettings",
      "url": "reference/sidebar/sidebarsetitemsettings.html",
      "summary": "Przycisk ustawień z prawej strony info wiersza item; klik na nim woła action jak klik na wierszu",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetMenu",
      "url": "reference/sidebar/sidebarsetmenu.html",
      "summary": "Panel strony page pokazuje pozycje menu jedna pod drugą: klik na poleceniu wykonuje je jak w pasku menu, klik na menu rozwijanym otwiera je z prawej strony",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetOnChange",
      "url": "reference/sidebar/sidebarsetonchange.html",
      "summary": "Akcja po pokazaniu albo ukryciu strony kliknięciem jej ikony, klawiszem albo krawędzią panelu; pokazaną stronę daje SidebarPage()",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetPage",
      "url": "reference/sidebar/sidebarsetpage.html",
      "summary": "Pokazuje stronę page; 0 ukrywa panel",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarSetWidth",
      "url": "reference/sidebar/sidebarsetwidth.html",
      "summary": "Szerokość panelu przy 96 DPI, nie mniejsza niż najmniejsza",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SidebarWidth",
      "url": "reference/sidebar/sidebarwidth.html",
      "summary": "Szerokość panelu przy 96 DPI",
      "category": "sidebar",
      "categoryTitle": "Pasek boczny"
    },
    {
      "name": "SliderCreate",
      "url": "reference/widoki/slidercreate.html",
      "summary": "Suwak poziomy z zakresem od 0 do 100; width i height 0 dają 200 x 30; przesuwanie woła akcję z ControlSetAction()",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "SliderMaximum",
      "url": "reference/widoki/slidermaximum.html",
      "summary": "Największe położenie",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "SliderMinimum",
      "url": "reference/widoki/sliderminimum.html",
      "summary": "Najmniejsze położenie",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "SliderSetMaximum",
      "url": "reference/widoki/slidersetmaximum.html",
      "summary": "Największe położenie, nie mniejsze od minimum",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "SliderSetMinimum",
      "url": "reference/widoki/slidersetminimum.html",
      "summary": "Najmniejsze położenie, nie większe od maksimum",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "SliderSetValue",
      "url": "reference/widoki/slidersetvalue.html",
      "summary": "Przesuwa suwak w zakresie od minimum do maksimum",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "SliderValue",
      "url": "reference/widoki/slidervalue.html",
      "summary": "Położenie suwaka",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "StatusBarAdd",
      "url": "reference/status/statusbaradd.html",
      "summary": "Nowy panel; width 0 dzieli z innymi to, co zostaje z paska; panel jest wklęsły, raised robi go wypukłym; pierwszy panel zastępuje jedyny tekst paska, a tekst \"\" zostawia tekst, który panel już ma; zwraca numer panelu od 1",
      "category": "status",
      "categoryTitle": "Pasek stanu"
    },
    {
      "name": "StatusBarCreate",
      "url": "reference/status/statusbarcreate.html",
      "summary": "Pasek stanu na dole okna z tekstem (w UTF-8); idzie za rozmiarem okna",
      "category": "status",
      "categoryTitle": "Pasek stanu"
    },
    {
      "name": "StatusBarSetBackground",
      "url": "reference/status/statusbarsetbackground.html",
      "summary": "Kolor paska 0xRRGGBB; pasek z własnym kolorem rysuje się sam; -1 wraca do koloru systemowego",
      "category": "status",
      "categoryTitle": "Pasek stanu"
    },
    {
      "name": "StatusBarSetForeground",
      "url": "reference/status/statusbarsetforeground.html",
      "summary": "Kolor tekstu paska 0xRRGGBB, -1 wraca do koloru systemowego",
      "category": "status",
      "categoryTitle": "Pasek stanu"
    },
    {
      "name": "StatusBarSetScoreboard",
      "url": "reference/status/statusbarsetscoreboard.html",
      "summary": "Panel od 1, który w czasie WinReadModal() pokazuje \"Ins\", gdy wstawianie jest włączone, jak SET SCOREBOARD; 0 bez niego",
      "category": "status",
      "categoryTitle": "Pasek stanu"
    },
    {
      "name": "StatusBarSetText",
      "url": "reference/status/statusbarsettext.html",
      "summary": "Tekst panelu liczonego od 1; pasek bez paneli ma jeden tekst, panel 1",
      "category": "status",
      "categoryTitle": "Pasek stanu"
    },
    {
      "name": "SvgArc",
      "url": "reference/svg/svgarc.html",
      "summary": "Łuk okręgu piórem; kąty w stopniach, 0 w prawo, 90 w dół",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgCircle",
      "url": "reference/svg/svgcircle.html",
      "summary": "Obrys okręgu piórem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgClose",
      "url": "reference/svg/svgclose.html",
      "summary": "Kończy rysunek i zamyka plik",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgComment",
      "url": "reference/svg/svgcomment.html",
      "summary": "Komentarz w pliku; po \"-\" przed \"-\" albo na końcu dochodzi spacja, bo XML nie pozwala na \"--\" w komentarzu",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgEllipse",
      "url": "reference/svg/svgellipse.html",
      "summary": "Obrys elipsy piórem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgFilledCircle",
      "url": "reference/svg/svgfilledcircle.html",
      "summary": "Koło wypełnione kolorem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgFilledEllipse",
      "url": "reference/svg/svgfilledellipse.html",
      "summary": "Elipsa o promieniach rx w poziomie i ry w pionie wypełniona kolorem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgFilledPath",
      "url": "reference/svg/svgfilledpath.html",
      "summary": "Kształt z linii, łuków i krzywych wypełniony kolorem; path to dane ścieżki SVG (M, L, A, Q, C, Z)",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgFilledPie",
      "url": "reference/svg/svgfilledpie.html",
      "summary": "Wycinek koła wypełniony kolorem; kąty jak w SvgArc()",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgFilledPolygon",
      "url": "reference/svg/svgfilledpolygon.html",
      "summary": "Wielokąt przez punkty { { x, y }, ... } wypełniony kolorem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgFilledRect",
      "url": "reference/svg/svgfilledrect.html",
      "summary": "Prostokąt wypełniony kolorem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgInit",
      "url": "reference/svg/svginit.html",
      "summary": "Nowy plik SVG width x height rysowany we współrzędnych od 0 do viewSize; viewSize 0 rysuje w pikselach",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgLine",
      "url": "reference/svg/svgline.html",
      "summary": "Linia piórem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgPath",
      "url": "reference/svg/svgpath.html",
      "summary": "Obrys ścieżki piórem; path jak w SvgFilledPath()",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgPen",
      "url": "reference/svg/svgpen.html",
      "summary": "Pióro do obrysów rysowanych po nim; round daje okrągłe końce i narożniki linii",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgPie",
      "url": "reference/svg/svgpie.html",
      "summary": "Obrys wycinka koła piórem; kąty jak w SvgArc()",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgPolygon",
      "url": "reference/svg/svgpolygon.html",
      "summary": "Obrys wielokąta przez punkty { { x, y }, ... } piórem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgRect",
      "url": "reference/svg/svgrect.html",
      "summary": "Obrys prostokąta piórem",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "SvgText",
      "url": "reference/svg/svgtext.html",
      "summary": "Tekst w punkcie x, y; align to SVG_ALIGN_LEFT, SVG_ALIGN_CENTER albo SVG_ALIGN_RIGHT",
      "category": "svg",
      "categoryTitle": "Zapis SVG"
    },
    {
      "name": "TabControlAddPage",
      "url": "reference/widoki/tabcontroladdpage.html",
      "summary": "Nowa zakładka ze stroną; strona to okno, które idzie za rozmiarem zakładek i na którym kładzie się kontrolki",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "TabControlCount",
      "url": "reference/widoki/tabcontrolcount.html",
      "summary": "Liczba stron",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "TabControlCreate",
      "url": "reference/widoki/tabcontrolcreate.html",
      "summary": "Zakładki bez stron; width i height 0 dają 300 x 200; wybór zakładki przez użytkownika woła akcję z ControlSetAction()",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "TabControlPage",
      "url": "reference/widoki/tabcontrolpage.html",
      "summary": "Strona zakładki o numerze position",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "TabControlSelected",
      "url": "reference/widoki/tabcontrolselected.html",
      "summary": "Numer wybranej strony; 0 bez stron",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "TabControlSetSelected",
      "url": "reference/widoki/tabcontrolsetselected.html",
      "summary": "Wybiera stronę i ją pokazuje",
      "category": "widoki",
      "categoryTitle": "Zakładki, suwaki i wskaźniki"
    },
    {
      "name": "TimerActive",
      "url": "reference/system/timeractive.html",
      "summary": "T, gdy timer działa",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "TimerCreate",
      "url": "reference/system/timercreate.html",
      "summary": "Zatrzymany timer okna; po TimerStart() akcja działa co interval milisekund i dostaje timer i dane data; okno zatrzymuje swoje timery, gdy się zamyka",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "TimerInterval",
      "url": "reference/system/timerinterval.html",
      "summary": "Odstęp w milisekundach",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "TimerSetInterval",
      "url": "reference/system/timersetinterval.html",
      "summary": "Odstęp w milisekundach; działający timer idzie dalej z nowym odstępem",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "TimerStart",
      "url": "reference/system/timerstart.html",
      "summary": "Uruchamia timer",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "TimerStop",
      "url": "reference/system/timerstop.html",
      "summary": "Zatrzymuje timer",
      "category": "system",
      "categoryTitle": "Ustawienia, daty i pliki"
    },
    {
      "name": "ToolbarAdd",
      "url": "reference/toolbar/toolbaradd.html",
      "summary": "Przycisk z tekstem; klik woła akcję, która dostaje pasek i dane data; zwraca numer przycisku",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarAddMenu",
      "url": "reference/toolbar/toolbaraddmenu.html",
      "summary": "Przycisk ze strzałką, który otwiera menu rozwijane z MenuCreatePopup() pod przyciskiem, a na pasku na dole nad nim; polecenia menu działają jak polecenia paska menu; zwraca numer przycisku",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarAddSeparator",
      "url": "reference/toolbar/toolbaraddseparator.html",
      "summary": "Odstęp między przyciskami",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarClear",
      "url": "reference/toolbar/toolbarclear.html",
      "summary": "Usuwa wszystkie przyciski, np. gdy pasek przejmuje inna część programu",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarCreate",
      "url": "reference/toolbar/toolbarcreate.html",
      "summary": "Pasek przycisków przy krawędzi okna side: TOOLBAR_TOP, TOOLBAR_BOTTOM (nad paskiem stanu; przyciski dzielą całą szerokość okna w jednym rzędzie), TOOLBAR_LEFT albo TOOLBAR_RIGHT (między paskami u góry i na dole, przyciski jeden pod drugim z tekstem pod obrazkiem)",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarEnable",
      "url": "reference/toolbar/toolbarenable.html",
      "summary": "Przycisk aktywny albo szary; szary przycisk i jego skrót nic nie robią",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarSetColor",
      "url": "reference/toolbar/toolbarsetcolor.html",
      "summary": "Kolor części paska part (TOOLBAR_FOREGROUND, TOOLBAR_BACKGROUND, TOOLBAR_HOVER..., TOOLBAR_PRESS...) 0xRRGGBB; -1 wraca do koloru systemu; bez żadnego koloru pasek rysuje Windows",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarSetPicture",
      "url": "reference/toolbar/toolbarsetpicture.html",
      "summary": "Obraz przycisku; pierwszy obraz ustala rozmiar obrazów paska, a obraz innego rozmiaru się nie pokaże",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarSetShortcut",
      "url": "reference/toolbar/toolbarsetshortcut.html",
      "summary": "Skrót przycisku jak w MenuAdd(), np. \"Ctrl+N\", \"Del\", \"F2\"; działa, gdy pasek jest widoczny, a przycisk aktywny",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "ToolbarSetToolTip",
      "url": "reference/toolbar/toolbarsettooltip.html",
      "summary": "Podpowiedź przycisku; skrót przycisku pokazuje się po niej w nawiasie",
      "category": "toolbar",
      "categoryTitle": "Pasek narzędzi"
    },
    {
      "name": "TreeViewAdd",
      "url": "reference/listy/treeviewadd.html",
      "summary": "Nowa pozycja na końcu korzenia drzewa; ważna do TreeViewClear()",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewAddChild",
      "url": "reference/listy/treeviewaddchild.html",
      "summary": "Nowa pozycja na końcu pozycji parent; ważna do TreeViewClear()",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewClear",
      "url": "reference/listy/treeviewclear.html",
      "summary": "Usuwa wszystkie pozycje",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewCollapse",
      "url": "reference/listy/treeviewcollapse.html",
      "summary": "Chowa pozycje podrzędne",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewCount",
      "url": "reference/listy/treeviewcount.html",
      "summary": "Liczba pozycji",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewCreate",
      "url": "reference/listy/treeviewcreate.html",
      "summary": "Drzewo tekstów; width i height 0 dają 200 x 200; wybór przez użytkownika woła akcję z ControlSetAction(), podwójny klik akcję z ControlSetDoubleClick()",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewExpand",
      "url": "reference/listy/treeviewexpand.html",
      "summary": "Pokazuje pozycje podrzędne",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewItemText",
      "url": "reference/listy/treeviewitemtext.html",
      "summary": "Tekst pozycji, ważny do następnego wywołania dla tej kontrolki",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewSelected",
      "url": "reference/listy/treeviewselected.html",
      "summary": "Wybrana pozycja; NULL, gdy nic nie jest wybrane",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewSetItemText",
      "url": "reference/listy/treeviewsetitemtext.html",
      "summary": "Zmienia tekst pozycji",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "TreeViewSetSelected",
      "url": "reference/listy/treeviewsetselected.html",
      "summary": "Wybiera pozycję; NULL czyści wybór",
      "category": "listy",
      "categoryTitle": "Listy i drzewa"
    },
    {
      "name": "WinBackground",
      "url": "reference/app/winbackground.html",
      "summary": "Kolor tła okna 0xRRGGBB, -1 dla koloru systemowego",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinCenter",
      "url": "reference/app/wincenter.html",
      "summary": "Ustawia okno na środku obszaru roboczego jego ekranu",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinClose",
      "url": "reference/app/winclose.html",
      "summary": "Zamyka okno jak przycisk zamknięcia, po zgodzie z WinSetOnClose(); zamknięcie głównego okna kończy AppRun()",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinCreate",
      "url": "reference/app/wincreate.html",
      "summary": "Tworzy ukryte okno z obszarem roboczym width x height pikseli logicznych; pierwsze okno aplikacji jest głównym; NULL dla rozmiaru mniejszego od 1",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinEndRead",
      "url": "reference/pola/winendread.html",
      "summary": "Kończy trwający WinReadModal() jak PgDn (save T) albo Esc (F), np. z przycisków Zapisz i Anuluj",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "WinFocusNext",
      "url": "reference/app/winfocusnext.html",
      "summary": "Przenosi fokus do następnej kontrolki w kolejności Tab, z previous do poprzedniej",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinForeground",
      "url": "reference/app/winforeground.html",
      "summary": "Kolor tekstu okna 0xRRGGBB, -1 dla koloru systemowego",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinHeight",
      "url": "reference/app/winheight.html",
      "summary": "Wysokość obszaru roboczego w pikselach logicznych",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinHide",
      "url": "reference/app/winhide.html",
      "summary": "Ukrywa okno bez zamykania",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinReadModal",
      "url": "reference/pola/winreadmodal.html",
      "summary": "Użytkownik wypełnia pola okna jak w ReadModal(): pola są edytowalne tylko w czasie odczytu, tabele, paski i menu czekają; Enter przechodzi do następnego pola, Enter na ostatnim polu, PgDn i PgUp kończą odczyt z zapisem po sprawdzeniu pola, Esc bez zapisu; z gets (count pól edycji, pól wyboru i przycisków opcji) tylko te pola biorą udział, w tej kolejności, a count 0 bierze wszystkie pola jednowierszowe okna; first to numer pola od 1, w którym zaczyna się edycja (0 = pierwsze widoczne); po zapisie pola GET wpisują wartości do swoich zmiennych",
      "category": "pola",
      "categoryTitle": "Pola edycji i formularze"
    },
    {
      "name": "WinRemoveContextMenu",
      "url": "reference/app/winremovecontextmenu.html",
      "summary": "Okno bez menu podręcznego",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinRemoveKey",
      "url": "reference/app/winremovekey.html",
      "summary": "Usuwa klawisz z WinSetKey()",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetBackground",
      "url": "reference/app/winsetbackground.html",
      "summary": "Kolor tła okna 0xRRGGBB, -1 wraca do koloru systemowego",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetContextMenu",
      "url": "reference/app/winsetcontextmenu.html",
      "summary": "Menu podręczne okna z MenuCreatePopup(), otwierane prawym przyciskiem myszy albo klawiszem menu, także nad kontrolkami bez własnego menu podręcznego; jego polecenia działają jak polecenia paska menu",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetForeground",
      "url": "reference/app/winsetforeground.html",
      "summary": "Kolor tekstu etykiet, ramek, pól wyboru i przycisków opcji okna 0xRRGGBB bez własnego koloru; -1 wraca do koloru systemowego; pola edycji zachowują swoje kolory",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetHeight",
      "url": "reference/app/winsetheight.html",
      "summary": "Nowa wysokość obszaru roboczego w pikselach logicznych; wartość mniejsza od 1 nic nie zmienia",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetIcon",
      "url": "reference/app/winseticon.html",
      "summary": "Ikona okna z pliku .ico (ścieżka w UTF-8); brak pliku zostawia ikonę programu",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetKey",
      "url": "reference/app/winsetkey.html",
      "summary": "Akcja pod klawiszem key w oknie i w jego kontrolkach, jak SetKey(); klawisz jak w MenuAdd() (\"PgDn\", \"Esc\", \"Enter\", \"Ctrl+S\"); ma pierwszeństwo przed skrótami menu i pasków, ale czeka w czasie WinReadModal(); klawisz już ustawiony dostaje nową akcję; F dla nieznanego klawisza",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetMenu",
      "url": "reference/app/winsetmenu.html",
      "summary": "Pasek menu okna; okno rośnie, żeby obszar roboczy zachował rozmiar",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetOnClose",
      "url": "reference/app/winsetonclose.html",
      "summary": "Zgoda na zamknięcie okna przyciskiem zamknięcia, Alt+F4 albo WinClose(): valid dostaje okno i dane data, a F zostawia okno otwarte, np. po pytaniu MsgYesNo()",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetOnResize",
      "url": "reference/app/winsetonresize.html",
      "summary": "Akcja po zmianie rozmiaru obszaru roboczego; nowy rozmiar dają WinWidth() i WinHeight()",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetSizable",
      "url": "reference/app/winsetsizable.html",
      "summary": "Pozwala zmieniać rozmiar okna myszą i pokazać je na całym ekranie; obszar roboczy zachowuje rozmiar, a kontrolki idą za swoimi kotwicami",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetState",
      "url": "reference/app/winsetstate.html",
      "summary": "Stan okna WIN_NORMAL, WIN_MAXIMIZED, WIN_MINIMIZED albo WIN_FULLSCREEN; ukryte okno pokaże się w tym stanie; zwraca poprzedni stan",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetTitle",
      "url": "reference/app/winsettitle.html",
      "summary": "Nowy tytuł okna",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSetWidth",
      "url": "reference/app/winsetwidth.html",
      "summary": "Nowa szerokość obszaru roboczego w pikselach logicznych; wartość mniejsza od 1 nic nie zmienia",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinShow",
      "url": "reference/app/winshow.html",
      "summary": "Pokazuje okno w jego stanie (normalne, zmaksymalizowane, zminimalizowane, pełny ekran)",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinSizable",
      "url": "reference/app/winsizable.html",
      "summary": "T, gdy użytkownik może zmieniać rozmiar okna myszą i pokazać je na całym ekranie",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinTitle",
      "url": "reference/app/wintitle.html",
      "summary": "Tytuł okna w UTF-8, ważny do następnej zmiany tytułu",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    },
    {
      "name": "WinWidth",
      "url": "reference/app/winwidth.html",
      "summary": "Szerokość obszaru roboczego w pikselach logicznych",
      "category": "app",
      "categoryTitle": "Aplikacja i okna"
    }
  ],
  "shortcuts": {
    "przeglad": "index.html",
    "api": "reference/index.html",
    "typy": "reference/typy.html",
    "budowanie": "reference/build/index.html",
    "przyklad": "examples/pierwsze-okno.html",
    "app": "reference/app/index.html",
    "kontrolki": "reference/kontrolki/index.html",
    "pola": "reference/pola/index.html",
    "listy": "reference/listy/index.html",
    "browse": "reference/browse/index.html",
    "widoki": "reference/widoki/index.html",
    "menu": "reference/menu/index.html",
    "toolbar": "reference/toolbar/index.html",
    "status": "reference/status/index.html",
    "sidebar": "reference/sidebar/index.html",
    "obrazy": "reference/obrazy/index.html",
    "system": "reference/system/index.html",
    "svg": "reference/svg/index.html",
    "AppArg": "reference/app/apparg.html",
    "AppCreate": "reference/app/appcreate.html",
    "AppDestroy": "reference/app/appdestroy.html",
    "AppRun": "reference/app/apprun.html",
    "BrowseAddCheck": "reference/browse/browseaddcheck.html",
    "BrowseAddColumn": "reference/browse/browseaddcolumn.html",
    "BrowseAddNumber": "reference/browse/browseaddnumber.html",
    "BrowseColor": "reference/browse/browsecolor.html",
    "BrowseColPos": "reference/browse/browsecolpos.html",
    "BrowseCreate": "reference/browse/browsecreate.html",
    "BrowseFreeze": "reference/browse/browsefreeze.html",
    "BrowseRefresh": "reference/browse/browserefresh.html",
    "BrowseSetColor": "reference/browse/browsesetcolor.html",
    "BrowseSetColPos": "reference/browse/browsesetcolpos.html",
    "BrowseSetEmpty": "reference/browse/browsesetempty.html",
    "BrowseSetFreeze": "reference/browse/browsesetfreeze.html",
    "BrowseSetPosition": "reference/browse/browsesetposition.html",
    "BrowseSetSource": "reference/browse/browsesetsource.html",
    "ButtonCreate": "reference/kontrolki/buttoncreate.html",
    "ButtonIsCancel": "reference/kontrolki/buttoniscancel.html",
    "ButtonIsDefault": "reference/kontrolki/buttonisdefault.html",
    "ButtonSetCancel": "reference/kontrolki/buttonsetcancel.html",
    "ButtonSetDefault": "reference/kontrolki/buttonsetdefault.html",
    "CheckBoxChecked": "reference/kontrolki/checkboxchecked.html",
    "CheckBoxCreate": "reference/kontrolki/checkboxcreate.html",
    "CheckBoxSetChecked": "reference/kontrolki/checkboxsetchecked.html",
    "ComboBoxCreate": "reference/listy/comboboxcreate.html",
    "ControlAnchor": "reference/kontrolki/controlanchor.html",
    "ControlColor": "reference/kontrolki/controlcolor.html",
    "ControlDestroy": "reference/kontrolki/controldestroy.html",
    "ControlEnabled": "reference/kontrolki/controlenabled.html",
    "ControlFocused": "reference/kontrolki/controlfocused.html",
    "ControlHeight": "reference/kontrolki/controlheight.html",
    "ControlRemoveContextMenu": "reference/kontrolki/controlremovecontextmenu.html",
    "ControlSetAction": "reference/kontrolki/controlsetaction.html",
    "ControlSetAnchor": "reference/kontrolki/controlsetanchor.html",
    "ControlSetColor": "reference/kontrolki/controlsetcolor.html",
    "ControlSetContextMenu": "reference/kontrolki/controlsetcontextmenu.html",
    "ControlSetDoubleClick": "reference/kontrolki/controlsetdoubleclick.html",
    "ControlSetEnabled": "reference/kontrolki/controlsetenabled.html",
    "ControlSetFocus": "reference/kontrolki/controlsetfocus.html",
    "ControlSetFont": "reference/kontrolki/controlsetfont.html",
    "ControlSetHeight": "reference/kontrolki/controlsetheight.html",
    "ControlSetText": "reference/kontrolki/controlsettext.html",
    "ControlSetToolTip": "reference/kontrolki/controlsettooltip.html",
    "ControlSetValid": "reference/kontrolki/controlsetvalid.html",
    "ControlSetVisible": "reference/kontrolki/controlsetvisible.html",
    "ControlSetWidth": "reference/kontrolki/controlsetwidth.html",
    "ControlSetX": "reference/kontrolki/controlsetx.html",
    "ControlSetY": "reference/kontrolki/controlsety.html",
    "ControlText": "reference/kontrolki/controltext.html",
    "ControlToolTip": "reference/kontrolki/controltooltip.html",
    "ControlVisible": "reference/kontrolki/controlvisible.html",
    "ControlWidth": "reference/kontrolki/controlwidth.html",
    "ControlX": "reference/kontrolki/controlx.html",
    "ControlY": "reference/kontrolki/controly.html",
    "DatePickerCreate": "reference/widoki/datepickercreate.html",
    "DatePickerDate": "reference/widoki/datepickerdate.html",
    "DatePickerSetDate": "reference/widoki/datepickersetdate.html",
    "DateYear": "reference/system/dateyear.html",
    "DialogCreate": "reference/app/dialogcreate.html",
    "DialogEnd": "reference/app/dialogend.html",
    "DialogShowModal": "reference/app/dialogshowmodal.html",
    "DirCreate": "reference/system/dircreate.html",
    "EditCreate": "reference/pola/editcreate.html",
    "EditDate": "reference/pola/editdate.html",
    "EditMaxLength": "reference/pola/editmaxlength.html",
    "EditNumber": "reference/pola/editnumber.html",
    "EditPicture": "reference/pola/editpicture.html",
    "EditReadOnly": "reference/pola/editreadonly.html",
    "EditSetDate": "reference/pola/editsetdate.html",
    "EditSetMaxLength": "reference/pola/editsetmaxlength.html",
    "EditSetNumber": "reference/pola/editsetnumber.html",
    "EditSetPicture": "reference/pola/editsetpicture.html",
    "EditSetReadOnly": "reference/pola/editsetreadonly.html",
    "FileExecute": "reference/system/fileexecute.html",
    "FileExists": "reference/system/fileexists.html",
    "FileOpenDialog": "reference/system/fileopendialog.html",
    "FileSaveDialog": "reference/system/filesavedialog.html",
    "FontIconCreate": "reference/obrazy/fonticoncreate.html",
    "GetDate": "reference/pola/getdate.html",
    "GetMemo": "reference/pola/getmemo.html",
    "GetNumber": "reference/pola/getnumber.html",
    "GetText": "reference/pola/gettext.html",
    "GroupBoxCreate": "reference/kontrolki/groupboxcreate.html",
    "LabelAddLineAfter": "reference/kontrolki/labeladdlineafter.html",
    "LabelAlign": "reference/kontrolki/labelalign.html",
    "LabelBorder": "reference/kontrolki/labelborder.html",
    "LabelCreate": "reference/kontrolki/labelcreate.html",
    "LabelSetAlign": "reference/kontrolki/labelsetalign.html",
    "LabelSetBorder": "reference/kontrolki/labelsetborder.html",
    "ListBoxAdd": "reference/listy/listboxadd.html",
    "ListBoxClear": "reference/listy/listboxclear.html",
    "ListBoxCount": "reference/listy/listboxcount.html",
    "ListBoxCreate": "reference/listy/listboxcreate.html",
    "ListBoxItem": "reference/listy/listboxitem.html",
    "ListBoxSelected": "reference/listy/listboxselected.html",
    "ListBoxSelectedText": "reference/listy/listboxselectedtext.html",
    "ListBoxSetSelected": "reference/listy/listboxsetselected.html",
    "ListViewAddColumn": "reference/listy/listviewaddcolumn.html",
    "ListViewAddRow": "reference/listy/listviewaddrow.html",
    "ListViewCell": "reference/listy/listviewcell.html",
    "ListViewClear": "reference/listy/listviewclear.html",
    "ListViewColumnCount": "reference/listy/listviewcolumncount.html",
    "ListViewCount": "reference/listy/listviewcount.html",
    "ListViewCreate": "reference/listy/listviewcreate.html",
    "ListViewDelete": "reference/listy/listviewdelete.html",
    "ListViewSelected": "reference/listy/listviewselected.html",
    "ListViewSetCell": "reference/listy/listviewsetcell.html",
    "ListViewSetSelected": "reference/listy/listviewsetselected.html",
    "MemoCreate": "reference/pola/memocreate.html",
    "MenuAdd": "reference/menu/menuadd.html",
    "MenuAddDisabled": "reference/menu/menuadddisabled.html",
    "MenuAddMenu": "reference/menu/menuaddmenu.html",
    "MenuAddSeparator": "reference/menu/menuaddseparator.html",
    "MenuCreate": "reference/menu/menucreate.html",
    "MenuCreatePopup": "reference/menu/menucreatepopup.html",
    "MenuStyle": "reference/menu/menustyle.html",
    "MsgError": "reference/app/msgerror.html",
    "MsgInfo": "reference/app/msginfo.html",
    "MsgWarning": "reference/app/msgwarning.html",
    "MsgYesNo": "reference/app/msgyesno.html",
    "PanelAnchor": "reference/kontrolki/panelanchor.html",
    "PanelCreate": "reference/kontrolki/panelcreate.html",
    "PanelSetAnchor": "reference/kontrolki/panelsetanchor.html",
    "PictureCreate": "reference/obrazy/picturecreate.html",
    "ProgressBarCreate": "reference/widoki/progressbarcreate.html",
    "ProgressBarMaximum": "reference/widoki/progressbarmaximum.html",
    "ProgressBarSetMaximum": "reference/widoki/progressbarsetmaximum.html",
    "ProgressBarSetValue": "reference/widoki/progressbarsetvalue.html",
    "ProgressBarValue": "reference/widoki/progressbarvalue.html",
    "RadioButtonCreate": "reference/kontrolki/radiobuttoncreate.html",
    "ReadLastKey": "reference/pola/readlastkey.html",
    "SayCreate": "reference/kontrolki/saycreate.html",
    "Set": "reference/system/set.html",
    "SidebarAddAction": "reference/sidebar/sidebaraddaction.html",
    "SidebarAddButton": "reference/sidebar/sidebaraddbutton.html",
    "SidebarAddGlobal": "reference/sidebar/sidebaraddglobal.html",
    "SidebarAddItem": "reference/sidebar/sidebaradditem.html",
    "SidebarAddSection": "reference/sidebar/sidebaraddsection.html",
    "SidebarClearItems": "reference/sidebar/sidebarclearitems.html",
    "SidebarCreate": "reference/sidebar/sidebarcreate.html",
    "SidebarPage": "reference/sidebar/sidebarpage.html",
    "SidebarPanel": "reference/sidebar/sidebarpanel.html",
    "SidebarSetAccentColor": "reference/sidebar/sidebarsetaccentcolor.html",
    "SidebarSetBackground": "reference/sidebar/sidebarsetbackground.html",
    "SidebarSetBadge": "reference/sidebar/sidebarsetbadge.html",
    "SidebarSetBarColor": "reference/sidebar/sidebarsetbarcolor.html",
    "SidebarSetForeground": "reference/sidebar/sidebarsetforeground.html",
    "SidebarSetItemSettings": "reference/sidebar/sidebarsetitemsettings.html",
    "SidebarSetMenu": "reference/sidebar/sidebarsetmenu.html",
    "SidebarSetOnChange": "reference/sidebar/sidebarsetonchange.html",
    "SidebarSetPage": "reference/sidebar/sidebarsetpage.html",
    "SidebarSetWidth": "reference/sidebar/sidebarsetwidth.html",
    "SidebarWidth": "reference/sidebar/sidebarwidth.html",
    "SliderCreate": "reference/widoki/slidercreate.html",
    "SliderMaximum": "reference/widoki/slidermaximum.html",
    "SliderMinimum": "reference/widoki/sliderminimum.html",
    "SliderSetMaximum": "reference/widoki/slidersetmaximum.html",
    "SliderSetMinimum": "reference/widoki/slidersetminimum.html",
    "SliderSetValue": "reference/widoki/slidersetvalue.html",
    "SliderValue": "reference/widoki/slidervalue.html",
    "StatusBarAdd": "reference/status/statusbaradd.html",
    "StatusBarCreate": "reference/status/statusbarcreate.html",
    "StatusBarSetBackground": "reference/status/statusbarsetbackground.html",
    "StatusBarSetForeground": "reference/status/statusbarsetforeground.html",
    "StatusBarSetScoreboard": "reference/status/statusbarsetscoreboard.html",
    "StatusBarSetText": "reference/status/statusbarsettext.html",
    "SvgArc": "reference/svg/svgarc.html",
    "SvgCircle": "reference/svg/svgcircle.html",
    "SvgClose": "reference/svg/svgclose.html",
    "SvgComment": "reference/svg/svgcomment.html",
    "SvgEllipse": "reference/svg/svgellipse.html",
    "SvgFilledCircle": "reference/svg/svgfilledcircle.html",
    "SvgFilledEllipse": "reference/svg/svgfilledellipse.html",
    "SvgFilledPath": "reference/svg/svgfilledpath.html",
    "SvgFilledPie": "reference/svg/svgfilledpie.html",
    "SvgFilledPolygon": "reference/svg/svgfilledpolygon.html",
    "SvgFilledRect": "reference/svg/svgfilledrect.html",
    "SvgInit": "reference/svg/svginit.html",
    "SvgLine": "reference/svg/svgline.html",
    "SvgPath": "reference/svg/svgpath.html",
    "SvgPen": "reference/svg/svgpen.html",
    "SvgPie": "reference/svg/svgpie.html",
    "SvgPolygon": "reference/svg/svgpolygon.html",
    "SvgRect": "reference/svg/svgrect.html",
    "SvgText": "reference/svg/svgtext.html",
    "TabControlAddPage": "reference/widoki/tabcontroladdpage.html",
    "TabControlCount": "reference/widoki/tabcontrolcount.html",
    "TabControlCreate": "reference/widoki/tabcontrolcreate.html",
    "TabControlPage": "reference/widoki/tabcontrolpage.html",
    "TabControlSelected": "reference/widoki/tabcontrolselected.html",
    "TabControlSetSelected": "reference/widoki/tabcontrolsetselected.html",
    "TimerActive": "reference/system/timeractive.html",
    "TimerCreate": "reference/system/timercreate.html",
    "TimerInterval": "reference/system/timerinterval.html",
    "TimerSetInterval": "reference/system/timersetinterval.html",
    "TimerStart": "reference/system/timerstart.html",
    "TimerStop": "reference/system/timerstop.html",
    "ToolbarAdd": "reference/toolbar/toolbaradd.html",
    "ToolbarAddMenu": "reference/toolbar/toolbaraddmenu.html",
    "ToolbarAddSeparator": "reference/toolbar/toolbaraddseparator.html",
    "ToolbarClear": "reference/toolbar/toolbarclear.html",
    "ToolbarCreate": "reference/toolbar/toolbarcreate.html",
    "ToolbarEnable": "reference/toolbar/toolbarenable.html",
    "ToolbarSetColor": "reference/toolbar/toolbarsetcolor.html",
    "ToolbarSetPicture": "reference/toolbar/toolbarsetpicture.html",
    "ToolbarSetShortcut": "reference/toolbar/toolbarsetshortcut.html",
    "ToolbarSetToolTip": "reference/toolbar/toolbarsettooltip.html",
    "TreeViewAdd": "reference/listy/treeviewadd.html",
    "TreeViewAddChild": "reference/listy/treeviewaddchild.html",
    "TreeViewClear": "reference/listy/treeviewclear.html",
    "TreeViewCollapse": "reference/listy/treeviewcollapse.html",
    "TreeViewCount": "reference/listy/treeviewcount.html",
    "TreeViewCreate": "reference/listy/treeviewcreate.html",
    "TreeViewExpand": "reference/listy/treeviewexpand.html",
    "TreeViewItemText": "reference/listy/treeviewitemtext.html",
    "TreeViewSelected": "reference/listy/treeviewselected.html",
    "TreeViewSetItemText": "reference/listy/treeviewsetitemtext.html",
    "TreeViewSetSelected": "reference/listy/treeviewsetselected.html",
    "WinBackground": "reference/app/winbackground.html",
    "WinCenter": "reference/app/wincenter.html",
    "WinClose": "reference/app/winclose.html",
    "WinCreate": "reference/app/wincreate.html",
    "WinEndRead": "reference/pola/winendread.html",
    "WinFocusNext": "reference/app/winfocusnext.html",
    "WinForeground": "reference/app/winforeground.html",
    "WinHeight": "reference/app/winheight.html",
    "WinHide": "reference/app/winhide.html",
    "WinReadModal": "reference/pola/winreadmodal.html",
    "WinRemoveContextMenu": "reference/app/winremovecontextmenu.html",
    "WinRemoveKey": "reference/app/winremovekey.html",
    "WinSetBackground": "reference/app/winsetbackground.html",
    "WinSetContextMenu": "reference/app/winsetcontextmenu.html",
    "WinSetForeground": "reference/app/winsetforeground.html",
    "WinSetHeight": "reference/app/winsetheight.html",
    "WinSetIcon": "reference/app/winseticon.html",
    "WinSetKey": "reference/app/winsetkey.html",
    "WinSetMenu": "reference/app/winsetmenu.html",
    "WinSetOnClose": "reference/app/winsetonclose.html",
    "WinSetOnResize": "reference/app/winsetonresize.html",
    "WinSetSizable": "reference/app/winsetsizable.html",
    "WinSetState": "reference/app/winsetstate.html",
    "WinSetTitle": "reference/app/winsettitle.html",
    "WinSetWidth": "reference/app/winsetwidth.html",
    "WinShow": "reference/app/winshow.html",
    "WinSizable": "reference/app/winsizable.html",
    "WinTitle": "reference/app/wintitle.html",
    "WinWidth": "reference/app/winwidth.html"
  }
};
