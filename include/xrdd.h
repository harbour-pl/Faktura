#ifndef XRDD_H
#define XRDD_H

#ifdef __cplusplus
extern "C"
{
#endif

/* ---------------------------------------------------------------------------------------------
   Definicje
   --------------------------------------------------------------------------------------------- */

/* Funkcje biblioteki DLL: przy budowie xRDD (XRDD_BUILD) eksportowane, w programie importowane; poza Windows bez
   znaczenia */
#if defined( _WIN32 ) && defined( XRDD_BUILD )
   #define XRDD_API __declspec( dllexport )
#elif defined( _WIN32 )
   #define XRDD_API __declspec( dllimport )
#else
   #define XRDD_API
#endif

/* Typ logiczny wspólny z XWGUI; program może dołączyć oba nagłówki */
#ifndef XBOOL_DEFINED
   #define XBOOL_DEFINED
   typedef enum xBool
   {
      F = 0,
      T = ( ! 0 )
   } xBool;
#endif

/* Pole tabeli dla DbCreate(), jak wiersz tablicy struktury Clippera: nazwa do 32 znaków ASCII, typ 'C', 'N', 'D',
   'L', 'M' albo 'P' (binarne), długość w bajtach i miejsca po kropce. C ma do 254 bajtów, N do 20 cyfr; D (8),
   L (1), M i P (10) mają stałą długość, więc podana się nie liczy */
typedef struct
{
   const char *name;
   char        type;
   int         length;
   int         decimals;
} DbField;

/* Klucz indeksu bieżącego rekordu, jak blok klucza Clippera: akcja zapisuje tekst klucza z zerem na końcu do key
   o rozmiarze size (np. FieldGetC() jednego albo kilku pól); data z OrdCreate() albo DbSetIndex(). Długość klucza
   w indeksie to długość tekstu przy OrdCreate(); dłuższy jest obcinany, krótszy dopełniany spacjami. Klucze porównuje
   się bajt po bajcie */
typedef void ( *DbKey )( char *key, int size, void *data );

/* Warunek dla bieżącego rekordu, jak blok FOR Clippera: T, gdy rekord pasuje (DbSetFilter(), DbLocate(), DbEval()) */
typedef xBool ( *DbFor )( void *data );

/* Akcja dla bieżącego rekordu w DbEval() */
typedef void ( *DbAction )( void *data );

/* ---------------------------------------------------------------------------------------------
   Tabele i obszary robocze
   --------------------------------------------------------------------------------------------- */

XRDD_API xBool DbCreate( const char *file, const DbField *fields, int count );
XRDD_API xBool DbUseArea( xBool newArea, const char *file, const char *alias, xBool shared, xBool readOnly );
XRDD_API void  DbCloseArea( void );
XRDD_API void  DbCloseAll( void );
XRDD_API xBool DbSelectArea( const char *alias );
XRDD_API int   Select( void );
XRDD_API const char *Alias( void );
XRDD_API xBool Used( void );
XRDD_API xBool NetErr( void );
XRDD_API const char *DbError( void );
XRDD_API xBool SetDeleted( xBool deleted );

/* ---------------------------------------------------------------------------------------------
   Rekordy
   --------------------------------------------------------------------------------------------- */

XRDD_API void  DbGoTop( void );
XRDD_API void  DbGoBottom( void );
XRDD_API void  DbGoto( long record );
XRDD_API void  DbSkip( long records );
XRDD_API long  DbSkipper( long records );
XRDD_API xBool Bof( void );
XRDD_API xBool Eof( void );
XRDD_API xBool Found( void );
XRDD_API long  RecNo( void );
XRDD_API long  LastRec( void );
XRDD_API xBool DbAppend( xBool releaseLocks );
XRDD_API void  DbDelete( void );
XRDD_API void  DbRecall( void );
XRDD_API xBool Deleted( void );
XRDD_API void  DbCommit( void );
XRDD_API xBool DbPack( void );
XRDD_API xBool DbZap( void );
XRDD_API void  DbSetFilter( DbFor condition, void *data );
XRDD_API void  DbClearFilter( void );
XRDD_API xBool DbLocate( DbFor condition, void *data );
XRDD_API xBool DbContinue( void );
XRDD_API void  DbEval( DbAction action, DbFor condition, void *data );

/* ---------------------------------------------------------------------------------------------
   Relacje i kopiowanie między tabelami
   --------------------------------------------------------------------------------------------- */

XRDD_API xBool DbSetRelation( const char *alias, DbKey key, void *data );
XRDD_API void  DbClearRelation( void );
XRDD_API xBool DbCopy( const char *file, DbFor condition, void *data );
XRDD_API xBool DbAppendFrom( const char *file, DbFor condition, void *data );

/* ---------------------------------------------------------------------------------------------
   Blokady
   --------------------------------------------------------------------------------------------- */

XRDD_API xBool RLock( void );
XRDD_API xBool FLock( void );
XRDD_API void  DbUnlock( void );
XRDD_API xBool DbRLock( long record );
XRDD_API void  DbRUnlock( long record );

/* ---------------------------------------------------------------------------------------------
   Pola: wartość bieżącego rekordu; tekst w UTF-8, data jako liczba RRRRMMDD (0 = pusta)
   --------------------------------------------------------------------------------------------- */

XRDD_API int   FCount( void );
XRDD_API const char *FieldName( int field );
XRDD_API int   FieldPos( const char *name );
XRDD_API char  FieldType( int field );
XRDD_API int   FieldLen( int field );
XRDD_API int   FieldDec( int field );
XRDD_API int   RecSize( void );
XRDD_API int   Header( void );
XRDD_API int   LUpdate( void );
XRDD_API const char *FieldGetC( int field );
XRDD_API double FieldGetN( int field );
XRDD_API int   FieldGetD( int field );
XRDD_API xBool FieldGetL( int field );
XRDD_API xBool FieldPutC( int field, const char *text );
XRDD_API xBool FieldPutN( int field, double value );
XRDD_API xBool FieldPutD( int field, int date );
XRDD_API xBool FieldPutL( int field, xBool value );

/* ---------------------------------------------------------------------------------------------
   Indeksy NTX
   --------------------------------------------------------------------------------------------- */

XRDD_API xBool OrdCreate( const char *file, const char *expression, DbKey key, void *data, xBool unique );
XRDD_API xBool DbSetIndex( const char *file, DbKey key, void *data );
XRDD_API void  DbClearIndex( void );
XRDD_API int   OrdSetFocus( int order );
XRDD_API xBool DbSeek( const char *key, xBool softSeek );
XRDD_API void  DbReindex( void );
XRDD_API char *OrdKeyPolish( char *key, int size, const char *text );
XRDD_API void  OrdScope( int scope, const char *key );
XRDD_API long  OrdKeyCount( void );
XRDD_API long  OrdKeyNo( void );

/* Granice OrdScope(), jak w ord.ch Clippera */
enum
{
   TOPSCOPE = 0,
   BOTTOMSCOPE = 1
};

#ifdef __cplusplus
}
#endif

#endif /* XRDD_H */
