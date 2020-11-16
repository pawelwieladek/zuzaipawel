import Head from 'next/head'

import Grid from '@material-ui/core/Grid';

export default function Index() {
  return (
    <main>
      <Head>
        <title>Zuzanna i Paweł biorą ślub!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/c9c81a6bf5.js" crossOrigin="anonymous"></script>
      </Head>
      <div>
        <Grid container>
          <Grid item xs={12} md={6} className="column" style={{ backgroundColor: '#145051' }}>
            <img src="images/rings.svg" className="image--block" height="50" />
            <img src="images/logo.svg" className="image--block" height="100" style={{ marginTop: 40 }} />
            <img src="images/date.svg" className="image--block" width="300" style={{ marginTop: 80 }} />
          </Grid>
          <Grid item xs={12} md={6} className="column text--light" style={{ backgroundColor: '#16595a' }}>
            <img src="images/husband-wife-2.jpg" className="image--block image--rounded" width="240" />
            <h2>Mąż i Żona</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus. Pellentesque dictum odio nulla, id luctus lorem convallis et. Vestibulum tincidunt sagittis sem, a laoreet velit gravida ut. Pellentesque vulputate a felis id semper.</p>
          </Grid>
          <Grid item xs={12} md={6} className="column text--dark" style={{ backgroundColor: '#e5ccaf' }}>
            <img src="images/church.jpg" className="image--block image--rounded" width="240" />
            <h2>Ślub</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus.</p>
            <Grid container spacing={2} className="text--center" style={{ marginTop: 40 }}>
              <Grid item sm={4} xs={12}>
                <img src="images/calendar-alt-regular.svg" height="48" />
                <hr />
                <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">04.06.2021</h4>
              </Grid>
              <Grid item sm={4} xs={12}>
              <img src="images/clock-regular.svg" height="48" />
                <hr />
                <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">15:00</h4>
              </Grid>
              <Grid item sm={4} xs={12}>
              <img src="images/map-marked-alt-solid.svg" height="48" />
                <hr />
                <h4 style={{ marginTop: 0, fontSize: '14px' }} className="text--mono">ul. Borkowska 1,<br />05-077 Warszawa</h4>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="column" style={{ backgroundColor: '#ceb79d', padding: 0 }}>
            <div className="map">
              <iframe src="https://snazzymaps.com/embed/253473" width="100%" height="100%" style={{ border: 'none' }} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="column" style={{ backgroundColor: '#e5e5e5' }}></Grid>
          <Grid item xs={12} md={6} className="column" style={{ backgroundColor: '#ffffff' }}>
            <p className="text--mono">Made with <img src="images/heart.svg" height="16" /> by Zuzia i Paweł</p>
          </Grid>
        </Grid>
      </div>

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
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 15px;
        }

        * {
          box-sizing: border-box;
        }

        h2 {
          font-family: 'PT Serif', serif;
          font-weight: 700;
          font-size: 48px;
        }

        h4 {
          font-family: 'PT Serif', serif;
          font-weight: 400;
          font-size: 18px;
        }

        hr {
          border-width: 1px;
          border-style: solid;
        }

        .column {
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          text-align: justify;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .text--dark {
          color: black;
        }

        .text--light {
          color: white;
        }

        .text--center {
          text-align: center;
        }

        .text--mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .text--dark hr {
          border-color: #ceb79d;
        }

        .image--block {
          display: block;
        }

        .image--rounded {
          border-radius: 50%;
        }

        .map {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
    </main>
  )
}
