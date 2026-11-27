#ifndef XSIEC_H
#define XSIEC_H

#include <stddef.h>

#ifdef __cplusplus
extern "C"
{
#endif

#if defined( _WIN32 ) && defined( XSIEC_BUILD )
   #define XSIEC_API __declspec( dllexport )
#elif defined( _WIN32 )
   #define XSIEC_API __declspec( dllimport )
#else
   #define XSIEC_API
#endif

#ifndef XBOOL_DEFINED
   #define XBOOL_DEFINED
   typedef enum xBool
   {
      F = 0,
      T = ( ! 0 )
   } xBool;
#endif

#define AES_MODE_CBC 1
#define AES_MODE_CTR 2
#define AES_MODE_GCM 3
#define AES_MODE_ECB 4

#define RSA_PADDING_OAEP_SHA256 1
#define RSA_PADDING_OAEP_SHA1   2
#define RSA_PADDING_PKCS1       3
#define RSA_PADDING_PSS         4

#define QR_ECC_LOW      0
#define QR_ECC_MEDIUM   1
#define QR_ECC_QUARTILE 2
#define QR_ECC_HIGH     3
#define QR_MAX_SIZE     177

#define JSON_NULL    0
#define JSON_LOGICAL 1
#define JSON_NUMBER  2
#define JSON_STRING  3
#define JSON_ARRAY   4
#define JSON_OBJECT  5

typedef struct
{
   unsigned char *data;
   size_t         size;
} Bytes;

typedef struct
{
   char  subject[ 512 ];
   char  issuer[ 512 ];
   char  serial[ 128 ];
   char  notBefore[ 32 ];
   char  notAfter[ 32 ];
   Bytes der;
} CertDetails;

typedef struct Json Json;

XSIEC_API void        BytesFree( Bytes *bytes );
XSIEC_API char       *Base64Encode( const void *data, size_t size );
XSIEC_API Bytes       Base64Decode( const char *text );
XSIEC_API Bytes       HashData( const char *algorithm, const void *data, size_t size );
XSIEC_API Bytes       RandomBytes( size_t size );
XSIEC_API Bytes       AesEncrypt( Bytes key, Bytes iv, const void *data, size_t size, int mode );
XSIEC_API Bytes       AesDecrypt( Bytes key, Bytes iv, const void *data, size_t size, int mode );
XSIEC_API Bytes       RsaEncrypt( Bytes publicKey, const void *data, size_t size, int padding );
XSIEC_API Bytes       SignData( Bytes privateKey, const void *data, size_t size, const char *digest, const char *password, int padding );
XSIEC_API xBool       VerifyData( Bytes publicKey, const void *data, size_t size, Bytes signature, const char *digest, int padding );
XSIEC_API xBool       CertInfo( Bytes certificate, CertDetails *details );
XSIEC_API const char *CryptoError( void );

XSIEC_API char       *XadesSign( const char *xml, size_t length, Bytes privateKey, Bytes certificate, const char *password );
XSIEC_API const char *XadesError( void );

XSIEC_API Json       *JsonDecode( const char *text, size_t length );
XSIEC_API void        JsonFree( Json *json );
XSIEC_API int         JsonType( const Json *json );
XSIEC_API Json       *JsonGet( const Json *json, const char *key );
XSIEC_API Json       *JsonItem( const Json *json, int item );
XSIEC_API int         JsonCount( const Json *json );
XSIEC_API const char *JsonString( const Json *json );
XSIEC_API double      JsonNumber( const Json *json );
XSIEC_API char       *JsonQuote( const char *text );
XSIEC_API const char *JsonError( void );

XSIEC_API int QrEncode( const char *text, int ecc, unsigned char *modules );

XSIEC_API xBool       HttpRequest( const char *method, const char *url, const char *headers[], const void *body, size_t bodySize, int timeout, Bytes *response, long *status );
XSIEC_API const char *HttpError( void );

#ifdef __cplusplus
}
#endif

#endif
