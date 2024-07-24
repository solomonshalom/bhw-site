import Document, { Html, Head, Main, NextScript } from 'next/document'

const org = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Bethel Buildathon',
  url: 'https://buildathon.bethelagindia.org',
  logo: 'https://hackclub.com/social.png',
  sameAs: [
    'https://twitter.com/hackclub',
    'https://github.com/hackclub',
    'https://www.instagram.com/starthackclub',
    'https://www.facebook.com/Hack-Club-741805665870458',
    'https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w'
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'info@bethelagindia.org',
      contactType: 'email',
      url: 'https://buildathon.bethelagindia.org'
    }
  ]
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="format-detection" content="telephone=no" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
          />
          <script
            async
            src="https://cloud.umami.is/script.js"
            data-website-id="57b3767b-b825-4b2a-bed8-4afe9d8f9af1"
          ></script>
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
