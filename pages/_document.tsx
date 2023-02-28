import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <head>
          {/* <meta charSet="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <script type="text/javascript" src="%REACT_APP_MAP_KEY%"></script>
          <title>아나바다</title>
          <meta property="og:image" content="/assets/poster.png" />
          <meta
            property="og:description"
            content="모두의 서핑을 위한 커뮤니티"
          /> */}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
