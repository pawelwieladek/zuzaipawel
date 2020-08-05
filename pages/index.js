import Head from 'next/head'
import Link from 'next/link'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

import Intro from './intro';
import About from './about';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Zuzanna i Paweł biorą ślub!</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet"/>
      </Head>
      <Intro />
      <About />

      <style jsx>{`
      
      `}</style>

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
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .text-color-ocean {
          color: #007f7b;
        }

        .text-color-sand {
          color: #e5ccaf;
        }

        .text-color-white {
          color: #fff;
        }

        .text-color-red {
          color: #ef3340;
        }

        .text-color-black {
          color: #000;
        }
      `}</style>
    </main>
  )
}
