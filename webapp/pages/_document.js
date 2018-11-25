import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet"></link>
          <style jsx global>{`
            html {
              box-sizing: border-box;
            }
            body {
              font-family: 'Roboto', sans-serif;
              margin: 0;
            }
            *, *:before, *:after {
              box-sizing: inherit;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
