import Head from 'next/head'

import Intro from 'components/sections/intro';
import Wedding from 'components/sections/wedding';
import About from 'components/sections/about';
import Details from 'components/sections/details';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Zuzanna i Paweł biorą ślub!</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet"/>
      </Head>
      <Intro />
      <About />
      <Details />
      <Wedding />

      <style jsx global>{`
        @font-face{
          font-family: 'JetBrains Mono';
          src: url('/fonts/JetBrainsMono/web/eot/JetBrainsMono-Regular.eot') format('embedded-opentype'),
               url('/fonts/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2') format('woff2'),
               url('/fonts/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff') format('woff'),
               url('/fonts/JetBrainsMono/ttf/JetBrainsMono-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
      }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </main>
  )
}
