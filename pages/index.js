import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Page from '../components/page';
import Rsvp from '../components/rsvp';
import Faq from '../components/faq';
import Section from '../components/section';

const Intro = () => (
  <Section className="background" color="primary">
    <img src="images/rings.svg" className="image--block image--shadow" height="50" />
    <img src="images/logo.svg" className="image--block image--shadow" height="100" style={{ marginTop: 40 }} />
    <img src="images/date.svg" className="image--block image--shadow" width="300" style={{ marginTop: 80 }} />
  </Section>
)

const Newlyweds = () => (
  <Section color="primary">
    <img src="images/husband-wife-2.jpg" className="image--block image--rounded" width="240" />
    <h2>Młoda Para</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus. Pellentesque dictum odio nulla, id luctus lorem convallis et. Vestibulum tincidunt sagittis sem, a laoreet velit gravida ut. Pellentesque vulputate a felis id semper.</p>
  </Section>
)

const Wedding = () => {
  const theme = useTheme();
  return (
    <Section color="secondary">
      <img src="images/church.jpg" className="image--block image--rounded" width="240" />
      <h2>Ślub</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus.</p>
      <Grid container spacing={2} className="text--center" style={{ marginTop: 40 }}>
        <Grid item sm={4} xs={12}>
          <img src="images/calendar.svg" height="48" />
          <hr style={{ borderColor: theme.palette.secondary.dark }} />
          <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">04.06.2021</h4>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img src="images/clock-1.svg" height="48" />
          <hr style={{ borderColor: theme.palette.secondary.dark }} />
          <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">15:00</h4>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img src="images/map.svg" height="48" />
          <hr style={{ borderColor: theme.palette.secondary.dark }} />
          <h4 style={{ marginTop: 0, fontSize: '14px' }} className="text--mono">ul. Borkowska 1,<br />05-077 Warszawa</h4>
        </Grid>
      </Grid>
    </Section>
  )
}

const Map = () => (
  <Section color="secondary" dark style={{ padding: 0 }}>
    <div className="map">
      <iframe src="https://snazzymaps.com/embed/253473" width="100%" height="100%" style={{ border: 'none' }} />
    </div>
  </Section>
)

const Witnesses = () => (
  <Section dark>
    <h2>Świadkowie</h2>
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <img src="images/dominika.jpg" className="image--block image--rounded" width="160" />
        <h3 className="text--center">Dominika Mońka</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus.</p>
      </Grid>
      <Grid item xs={12} lg={6}>
        <img src="images/marcin.jpg" className="image--block image--rounded" width="160" />
        <h3 className="text--center">Marcin Wielądek</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at purus risus. Integer nec imperdiet sapien. Pellentesque sollicitudin, nisi non semper lobortis, orci nulla tempor nunc, ut varius justo arcu et ex. Quisque sed mauris massa. Cras mollis porttitor lectus scelerisque rhoncus. Donec mi odio, pulvinar at finibus at, mollis id tellus.</p>
      </Grid>
    </Grid>
  </Section>
)

const FaqSection = () => (
  <Section>
    <h3>Często zadawane pytania</h3>
    <Faq />
  </Section>
)

const RsvpSection = () => (
  <Section color="neutral" dark>
    <h3>Czy będziesz na naszym ślubie?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.</p>
    <Container maxWidth="sm">
      <Rsvp />
    </Container>
  </Section>
)

const Footer = () => (
  <Section color="neutral">
    <p className="text--mono">Made with <img src="images/heart.svg" height="16" /> by Zuzia i Paweł</p>
    <Link href="https://www.privacypolicygenerator.info/live.php?token=1gub9oMMQpYXW9AEFMh8iO1IyrRKaxhi" color="secondary">Polityka prywatności</Link>
    <Link href="https://www.gdprprivacypolicy.net/live.php?token=A6fp897lCt4k7DcWHU4fXSWdN3SeyRo7" color="secondary">Informacje o RODO</Link>
  </Section>
)

export default function Index() {
  return (
    <Page>
      <Grid container>
        <Intro />
        <Newlyweds />
        <Wedding />
        <Map />
        <Witnesses />
        <FaqSection />
        <RsvpSection />
        <Footer />
      </Grid>
    </Page>
  )
}
