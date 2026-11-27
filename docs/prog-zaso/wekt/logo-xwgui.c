/*
 *
 * Library...: XWGUI
 * File......: logo-xwgui.c
 *
 */

#include "xwgui.h"

int main( void )
{
   const int width = 512;
   const int height = 512;
   Svg *svg = SvgInit( "logo-xwgui.svg", width, height, width );

   SvgComment( svg, "#070F17 #264D73 #73264D #4D7326 #262773 #267373 #734C26 #E9EDF1" );

   SvgFilledCircle( svg, width / 2.0, height / 2.0, 255, "#4D7326" );

   SvgPen( svg, 30, "#323232", F );

   SvgLine( svg, 42, ( height - 250 ) / 2.0, width - 42, ( height - 250 ) / 2.0, "" );

   SvgFilledRect( svg, 25, ( height - 220 ) / 2.0, width - 50, 180, "#F2F2F2", 0 );

   SvgLine( svg, 25, ( height + 141 ) / 2.0, width - 25, ( height + 141 ) / 2.0, "" );

   SvgCircle( svg, width / 2.0, height / 2.0, 256 - 15, "" );

   SvgText( svg, 39, ( height + 40 ) / 2.0, "xWGUI", "Times New Roman", 128, FONT_WEIGHT_BOLD, "#0C0C0C", SVG_ALIGN_LEFT );

   SvgClose( svg );

   return 0;
}



