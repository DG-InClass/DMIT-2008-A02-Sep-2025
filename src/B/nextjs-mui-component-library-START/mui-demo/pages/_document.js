import { Html, Head, Main, NextScript } from "next/document";
// This is the "top-level" layout of the app,
// because it defines the root/key aspects of
// our HTML page
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
