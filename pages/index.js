import Head from 'next/head'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Rsvp from '../components/rsvp';

const Accordion = withStyles({
  root: {
    backgroundColor: '#e5ccaf',
    boxShadow: 'none',
    color: '#000000',
    '&$expanded': {
      margin: 0,
      marginBottom: 0,
    },
    '&:last-child': {
      borderBottom: 0,
      borderRadius: 0,
    },
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({})(MuiAccordionSummary);
const AccordionDetails = withStyles((theme) => ({}))(MuiAccordionDetails);

export default function Index() {
  return (
    <main>
      <Head>
        <title>Zuzanna i Paweł biorą ślub!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/c9c81a6bf5.js" crossOrigin="anonymous"></script>
        <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"></script>
      </Head>
      <div>
        <Grid container>
          <Grid item xs={12} md={6} className="column background" style={{ backgroundColor: '#145051' }}>
            <img src="images/rings.svg" className="image--block image--shadow" height="50" />
            <img src="images/logo.svg" className="image--block image--shadow" height="100" style={{ marginTop: 40 }} />
            <img src="images/date.svg" className="image--block image--shadow" width="300" style={{ marginTop: 80 }} />
          </Grid>
          <Grid item xs={12} md={6} className="column text--light" style={{ backgroundColor: '#16595a' }}>
            <img src="images/husband-wife-2.jpg" className="image--block image--rounded" width="240" />
            <h2>Młoda Para</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus. Pellentesque dictum odio nulla, id luctus lorem convallis et. Vestibulum tincidunt sagittis sem, a laoreet velit gravida ut. Pellentesque vulputate a felis id semper.</p>
          </Grid>
          <Grid item xs={12} md={6} className="column text--dark" style={{ backgroundColor: '#e5ccaf' }}>
            <img src="images/church.jpg" className="image--block image--rounded" width="240" />
            <h2>Ślub</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus.</p>
            <Grid container spacing={2} className="text--center" style={{ marginTop: 40 }}>
              <Grid item sm={4} xs={12}>
                <img src="images/calendar.svg" height="48" />
                <hr />
                <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">04.06.2021</h4>
              </Grid>
              <Grid item sm={4} xs={12}>
                <img src="images/clock-1.svg" height="48" />
                <hr />
                <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">15:00</h4>
              </Grid>
              <Grid item sm={4} xs={12}>
                <img src="images/map.svg" height="48" />
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
          <Grid item xs={12} md={6} className="column text--light" style={{ backgroundColor: '#145051' }}>
            <h2>Świadkowie</h2>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <img src="images/dominika.jpg" className="image--block image--rounded" width="160" />
                <h4 className="text--center">Dominika Mońka</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus.</p>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="images/marcin.jpg" className="image--block image--rounded" width="160" />
                <h4 className="text--center">Marcin Wielądek</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus.</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="column" style={{ backgroundColor: '#ceb79d' }}>
            <h3>Często zadawane pytania</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h4 className="text--no-margin">Transport na salę weselną</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h4 className="text--no-margin">Transport powrotny</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <h4 className="text--no-margin">Animacje dla dzieci</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <h4 className="text--no-margin">Prezenty</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <h4 className="text--no-margin">Kontakt</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6} className="column" style={{ backgroundColor: '#e5e5e5' }}>
            <Rsvp />
          </Grid>
          <Grid item xs={12} md={6} className="column" style={{ backgroundColor: '#ffffff' }}>
            <p className="text--mono">Made with <img src="images/heart.svg" height="16" /> by Zuzia i Paweł</p>
          </Grid>
        </Grid>
      </div>
    </main>
  )
}
