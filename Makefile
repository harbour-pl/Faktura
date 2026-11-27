#
# Biblioteka: XWGUI
# Plik......: Makefile
#
#   make            buduje lib/libxwgui.dll, lib/libxrdd.dll i lib/libxsiec.dll z ich bibliotekami importu lib/*.dll.a
#   make xrdd       buduje samo xRDD: w Windows lib/libxrdd.dll, w Linuksie lib/libxrdd.so
#   make xsiec      buduje samo xSiec: lib/libxsiec.dll
#   make example    buduje example/xwgui.exe z kopią libxwgui.dll obok
#   make install    kopiuje DLL do $(PREFIX)/bin, biblioteki importu do $(PREFIX)/lib i nagłówki do $(PREFIX)/include
#
# XWGUI i xRDD są tylko DLL: program i jego moduły mają jedną kopię każdej biblioteki i jeden jej stan; xRDD nie zależy
# od XWGUI i kiedyś może być osobnym projektem
#
# Bez plików obiektów: każda DLL powstaje jednym poleceniem prosto ze źródeł. Bez src/ (repozytorium na GitHubie) DLL
# są gotowe w lib/ i nic się nie buduje
#

CC       = clang
PREFIX  ?= $(if $(MINGW_PREFIX),$(MINGW_PREFIX),/usr/local)
PLATFORM = win32

SRCDIR   = src
INCDIR   = include
LIBDIR   = lib

DLL      = $(LIBDIR)/libxwgui.dll
IMPLIB   = $(LIBDIR)/libxwgui.dll.a
SRCS     = $(wildcard $(SRCDIR)/*.c) $(wildcard $(SRCDIR)/$(PLATFORM)/*.c)
HDRS     = $(if $(SRCS),$(wildcard $(INCDIR)/*.h $(SRCDIR)/*.h $(SRCDIR)/fonts/*.h $(SRCDIR)/$(PLATFORM)/*.h))

# xRDD: rdzeń w src/xrdd/, pliki i blokady systemu w src/xrdd/win32/ albo w Linuksie src/xrdd/posix/; system według
# tego, dla czego buduje kompilator (x86_64-w64-windows-gnu, x86_64-w64-mingw32 to Windows)
TARGET  := $(shell $(CC) -dumpmachine)
ifneq ($(findstring -w64-,$(TARGET)),)
   RDDPLATFORM = win32
   RDDDLL      = $(LIBDIR)/libxrdd.dll
   RDDLINK     = -Wl,--out-implib,$(RDDIMP)
   RDDFLAGS    =
else
   RDDPLATFORM = posix
   RDDDLL      = $(LIBDIR)/libxrdd.so
   RDDLINK     =
   RDDFLAGS    = -fPIC
endif
RDDIMP   = $(LIBDIR)/libxrdd.dll.a
RDDSRCS  = $(wildcard $(SRCDIR)/xrdd/*.c) $(wildcard $(SRCDIR)/xrdd/$(RDDPLATFORM)/*.c)
RDDHDRS  = $(if $(RDDSRCS),$(wildcard $(INCDIR)/xrdd.h $(SRCDIR)/xrdd/*.h $(SRCDIR)/xrdd/$(RDDPLATFORM)/*.h))

# xSiec: JSON, kody QR, kryptografia (OpenSSL) i HTTPS (libcurl) z bibliotek xDev; nie zależy od XWGUI
SIECDLL  = $(LIBDIR)/libxsiec.dll
SIECIMP  = $(LIBDIR)/libxsiec.dll.a
SIECSRCS = $(wildcard $(SRCDIR)/xsiec/*.c)
SIECHDRS = $(if $(SIECSRCS),$(wildcard $(INCDIR)/xsiec.h $(SRCDIR)/xsiec/*.h))
SIECLIBS = -lcurl -lcrypto

EXAMPLE  = example/xwgui.exe
SYSLIBS  = -luser32 -lgdi32 -lshell32 -lcomctl32 -lcomdlg32 -luxtheme -lole32 -lwindowscodecs -luuid

CFLAGS  ?= -O2
CFLAGS  += -std=c11 -Wall -Wextra
CPPFLAGS += -I$(INCDIR) -DUNICODE -D_UNICODE

.PHONY: all xrdd xsiec example install FORCE

all: $(DLL) $(RDDDLL) $(SIECDLL)

xrdd: $(RDDDLL)

xsiec: $(SIECDLL)

# Biblioteka importu powstaje razem z DLL; funkcje API są eksportowane tylko przy budowie biblioteki (XWGUI_BUILD,
# XRDD_BUILD)
$(DLL): $(SRCS) $(HDRS) $(if $(SRCS),FORCE)
	@mkdir -p $(@D)
	@tmp=$$(mktemp -d); for f in $(SRCS); do echo "$(CC) $(CPPFLAGS) -DXWGUI_BUILD $(CFLAGS) -c $$f"; $(CC) $(CPPFLAGS) -DXWGUI_BUILD $(CFLAGS) -c $$f -o $$tmp/$$(echo $$f | tr / _).o || { rm -rf $$tmp; exit 1; }; done; echo "$(CC) -shared -o $@ -Wl,--out-implib,$(IMPLIB) $(SYSLIBS)"; $(CC) -shared $$tmp/*.o -o $@ -Wl,--out-implib,$(IMPLIB) $(SYSLIBS); status=$$?; rm -rf $$tmp; exit $$status

$(RDDDLL): $(RDDSRCS) $(RDDHDRS) $(if $(RDDSRCS),FORCE)
	@mkdir -p $(@D)
	@tmp=$$(mktemp -d); for f in $(RDDSRCS); do echo "$(CC) $(CPPFLAGS) -DXRDD_BUILD $(CFLAGS) $(RDDFLAGS) -c $$f"; $(CC) $(CPPFLAGS) -DXRDD_BUILD $(CFLAGS) $(RDDFLAGS) -c $$f -o $$tmp/$$(echo $$f | tr / _).o || { rm -rf $$tmp; exit 1; }; done; echo "$(CC) -shared -o $@ $(RDDLINK)"; $(CC) -shared $$tmp/*.o -o $@ $(RDDLINK); status=$$?; rm -rf $$tmp; exit $$status

$(SIECDLL): $(SIECSRCS) $(SIECHDRS) $(if $(SIECSRCS),FORCE)
	@mkdir -p $(@D)
	@tmp=$$(mktemp -d); for f in $(SIECSRCS); do echo "$(CC) $(CPPFLAGS) -DXSIEC_BUILD $(CFLAGS) -c $$f"; $(CC) $(CPPFLAGS) -DXSIEC_BUILD $(CFLAGS) -c $$f -o $$tmp/$$(echo $$f | tr / _).o || { rm -rf $$tmp; exit 1; }; done; echo "$(CC) -shared -o $@ -Wl,--out-implib,$(SIECIMP) $(SIECLIBS)"; $(CC) -shared $$tmp/*.o -o $@ -Wl,--out-implib,$(SIECIMP) $(SIECLIBS); status=$$?; rm -rf $$tmp; exit $$status

example: $(EXAMPLE)

$(EXAMPLE): example/xwgui.c $(DLL)
	$(CC) $(CPPFLAGS) $(CFLAGS) -mwindows $< -o $@ -L$(LIBDIR) -lxwgui
	cp $(DLL) example/

install:
	mkdir -p $(PREFIX)/bin $(PREFIX)/lib $(PREFIX)/include
	cp $(DLL) $(RDDDLL) $(SIECDLL) $(PREFIX)/bin/
	cp $(IMPLIB) $(RDDIMP) $(SIECIMP) $(PREFIX)/lib/
	cp $(INCDIR)/xwgui.h $(INCDIR)/xwgui-inkey.h $(INCDIR)/xrdd.h $(INCDIR)/xsiec.h $(PREFIX)/include/
