/*
 * Biblioteka: XWGUI
 * Plik......: xwgui-inkey.h
 *
 * Kody klawiszy wspólne dla Windows i Linuksa, jak inkey.ch xDev; warstwa systemowa tłumaczy na nie swoje klawisze.
 * Kody Ctrl+litera są takie same jak kody strzałek i klawiszy edycji (K_CTRL_S to K_LEFT), jak w Clipperze; skróty
 * bez tej dwuznaczności podaje się nazwą, jak w MenuAdd() i WinSetKey()
 *
 */

#ifndef XWGUI_INKEY_H
#define XWGUI_INKEY_H

/* Strzałki i klawisze ruchu */

#define K_UP                    5
#define K_DOWN                 24
#define K_LEFT                 19
#define K_RIGHT                 4
#define K_HOME                  1
#define K_END                   6
#define K_PGUP                 18
#define K_PGDN                  3

#define K_CTRL_UP             397
#define K_CTRL_DOWN           401
#define K_CTRL_LEFT            26
#define K_CTRL_RIGHT            2
#define K_CTRL_HOME            29
#define K_CTRL_END             23
#define K_CTRL_PGUP            31
#define K_CTRL_PGDN            30

#define K_ALT_UP              408
#define K_ALT_DOWN            416
#define K_ALT_LEFT            411
#define K_ALT_RIGHT           413
#define K_ALT_HOME            407
#define K_ALT_END             415
#define K_ALT_PGUP            409
#define K_ALT_PGDN            417

/* Enter, spacja i Esc */

#define K_ENTER                13
#define K_INTRO                13
#define K_RETURN               13
#define K_SPACE                32
#define K_ESC                  27

#define K_CTRL_ENTER           10
#define K_CTRL_RETURN          10
#define K_CTRL_RET             10
#define K_CTRL_PRTSCR         379
#define K_CTRL_QUESTION       309

#define K_ALT_ENTER           284
#define K_ALT_RETURN          284
#define K_ALT_EQUALS          387
#define K_ALT_ESC             257

/* Klawisze edycji */

#define K_INS                  22
#define K_DEL                   7
#define K_BS                    8
#define K_TAB                   9
#define K_SH_TAB              271

#define K_CTRL_INS            402
#define K_CTRL_DEL            403
#define K_CTRL_BS             127
#define K_CTRL_TAB            404

#define K_ALT_INS             418
#define K_ALT_DEL             419
#define K_ALT_BS              270
#define K_ALT_TAB             421

#define K_CTRL_SH_TAB         423
#define K_SH_BS               423

/* Ctrl+litera */

#define K_CTRL_A                1
#define K_CTRL_B                2
#define K_CTRL_C                3
#define K_CTRL_D                4
#define K_CTRL_E                5
#define K_CTRL_F                6
#define K_CTRL_G                7
#define K_CTRL_H                8
#define K_CTRL_I                9
#define K_CTRL_J               10
#define K_CTRL_K               11
#define K_CTRL_L               12
#define K_CTRL_M               13
#define K_CTRL_N               14
#define K_CTRL_O               15
#define K_CTRL_P               16
#define K_CTRL_Q               17
#define K_CTRL_R               18
#define K_CTRL_S               19
#define K_CTRL_T               20
#define K_CTRL_U               21
#define K_CTRL_V               22
#define K_CTRL_W               23
#define K_CTRL_X               24
#define K_CTRL_Y               25
#define K_CTRL_Z               26

/* Alt+litera, cyfra i znak */

#define K_ALT_A               286
#define K_ALT_B               304
#define K_ALT_C               302
#define K_ALT_D               288
#define K_ALT_E               274
#define K_ALT_F               289
#define K_ALT_G               290
#define K_ALT_H               291
#define K_ALT_I               279
#define K_ALT_J               292
#define K_ALT_K               293
#define K_ALT_L               294
#define K_ALT_M               306
#define K_ALT_N               305
#define K_ALT_O               280
#define K_ALT_P               281
#define K_ALT_Q               272
#define K_ALT_R               275
#define K_ALT_S               287
#define K_ALT_T               276
#define K_ALT_U               278
#define K_ALT_V               303
#define K_ALT_W               273
#define K_ALT_X               301
#define K_ALT_Y               277
#define K_ALT_Z               300
#define K_ALT_BACKQUOTE       297
#define K_ALT_1               376
#define K_ALT_2               377
#define K_ALT_3               378
#define K_ALT_4               379
#define K_ALT_5               380
#define K_ALT_6               381
#define K_ALT_7               382
#define K_ALT_8               383
#define K_ALT_9               384
#define K_ALT_0               385
#define K_ALT_MINUS           386
#define K_ALT_OSB             282
#define K_ALT_CSB             283
#define K_ALT_BACKSLASH       299
#define K_ALT_SC              295
#define K_ALT_QUOTE           296
#define K_ALT_COMMA           307
#define K_ALT_PERIOD          308
#define K_ALT_SLASH           309

/* Klawisze funkcyjne */

#define K_F1                   28
#define K_F2                   -1
#define K_F3                   -2
#define K_F4                   -3
#define K_F5                   -4
#define K_F6                   -5
#define K_F7                   -6
#define K_F8                   -7
#define K_F9                   -8
#define K_F10                  -9
#define K_F11                 -40
#define K_F12                 -41

/* Ctrl+klawisz funkcyjny */

#define K_CTRL_F1             -20
#define K_CTRL_F2             -21
#define K_CTRL_F3             -22
#define K_CTRL_F4             -23
#define K_CTRL_F5             -24
#define K_CTRL_F6             -25
#define K_CTRL_F7             -26
#define K_CTRL_F8             -27
#define K_CTRL_F9             -28
#define K_CTRL_F10            -29
#define K_CTRL_F11            -44
#define K_CTRL_F12            -45

/* Alt+klawisz funkcyjny */

#define K_ALT_F1              -30
#define K_ALT_F2              -31
#define K_ALT_F3              -32
#define K_ALT_F4              -33
#define K_ALT_F5              -34
#define K_ALT_F6              -35
#define K_ALT_F7              -36
#define K_ALT_F8              -37
#define K_ALT_F9              -38
#define K_ALT_F10             -39
#define K_ALT_F11             -46
#define K_ALT_F12             -47

/* Shift+klawisz funkcyjny */

#define K_SH_F1               -10
#define K_SH_F2               -11
#define K_SH_F3               -12
#define K_SH_F4               -13
#define K_SH_F5               -14
#define K_SH_F6               -15
#define K_SH_F7               -16
#define K_SH_F8               -17
#define K_SH_F9               -18
#define K_SH_F10              -19
#define K_SH_F11              -42
#define K_SH_F12              -43

#endif /* XWGUI_INKEY_H */
