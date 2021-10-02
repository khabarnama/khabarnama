import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='dr' className='light'>
        <Head>
          <meta name='application-name' content='خبرنامه' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='IAP' />
          <meta name='description' content='رسانه‌ای برای نسل به هم‌پیوسته' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link
            rel='apple-touch-icon'
            href='https://admin.iap.af/wp-content/uploads/2021/06/cropped-IAP-Square-Initials-scaled-1-192x192.jpg'
          />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='shortcut icon'
            href='https://admin.iap.af/wp-content/uploads/2021/06/cropped-IAP-Square-Initials-scaled-1-192x192.jpg'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
