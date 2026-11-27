/*
 * Biblioteka...: XWGUI
 * Plik.........: example/xwgui.c
 *
 */

#include "xwgui.h"

int main( void )
{
   App *app;
   Win *win;
   int result;

   app = AppCreate();

   win = WinCreate( app, "xBiuro", 1000, 640 );
   WinSetBackground( win, 0x132639 );

   WinCenter( win );
   WinShow( win );

   result = AppRun( app, win );

   AppDestroy( app );

   return result;
}
