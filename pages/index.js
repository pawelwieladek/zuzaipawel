import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

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
  <>
    <Section color="primary">
      <img src="images/couple.jpg" className="image--block image--rounded" width="240" />
      <h2>Młoda Para</h2>
      <p>5 lat temu spotkali się na pierwszej randce i poszli na długi letni spacer przez Warszawę. Od tamtej pory wspólne podróże zamieniają w niezapomniane przygody i piękne zdjęcia. Zwiedzając miejsca odległe i bliskie poznają nie tylko świat, ale przede wszystkim siebie nawzajem.</p>
    </Section>
    <Section color="secondary">
      <h3>Zuzia o Pawle</h3>
      <p>Pasjonat podróży i fotografii. Co chwilę wykombinuje coś szalonego, a ja zawsze się na to zgadzam. Robi najlepsze curry na północ od równika. Zanim podejmie jakąkolwiek decyzje, musi sprawdzić wszystkie możliwe opcje (ciekawe czy ze mną też tak zrobił). Najbardziej lubi, gdy jego domem staje się namiot, a do przygotowania posiłku trzeba użyć menażki. Gdybym miała wybrać bez czego nie mógłby żyć, miałabym problem między kawą, a czytaniem przy jedzeniu.</p>
    </Section>
    <Section color="secondary" dark>
      <h3>Paweł o Zuzi</h3>
      <p>Miłośniczka zwierząt i tańca. Zagaduje na ulicy każdego napotkanego kota, a najbardziej grymaśny pies słucha jej poleceń. Zawsze wie gdzie położyłem kluczyki do samochodu. Kiedy potrzebuję powodu do uśmiechu, wystarczy mi spojrzeć na nią przez chwilę. Nie mogłaby żyć bez przytulania.</p>
    </Section>
  </>
)

const Wedding = () => {
  const theme = useTheme();
  return (
    <>
    <Section color="neutral" dark>
      <img src="images/church.jpg" className="image--block image--rounded" width="240" />
      <h2>Ślub</h2>
      <p>Nasz ślub odbędzie się w drewnianym, zabytkowym kościele w Starej Miłośnie. To miejsce jest związane z nami od dziecka, więc cieszymy się, że to właśnie w nim rozpoczniemy wspólne życie. Będzie nam bardzo miło, jeśli przeżyjecie ten dzień razem z nami!</p>
      <Button variant="contained" color="primary" href="https://www.google.pl/maps/place/Parafia+Rzymskokatolicka+Naj%C5%9Bwi%C4%99tszego+Serca+Pana+Jezusa+w+Starej+Mi%C5%82o%C5%9Bnie/@52.2212887,21.2185303,17z/data=!3m1!4b1!4m5!3m4!1s0x471ed393494c54bf:0x4f657bfa3f49f40f!8m2!3d52.2212854!4d21.220719">Otwórz w Mapach Google</Button>
      <Grid container spacing={2} className="text--center" style={{ marginTop: 40, maxWidth: 540 }}>
        <Grid item sm={4} xs={12}>
          <img src="images/calendar.svg" height="48" />
          <hr style={{ borderColor: theme.palette.neutral.darker }} />
          <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">04.06.2021</h4>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img src="images/clock-1.svg" height="48" />
          <hr style={{ borderColor: theme.palette.neutral.darker }} />
          <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">15:00</h4>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img src="images/map.svg" height="48" />
          <hr style={{ borderColor: theme.palette.neutral.darker }} />
          <h4 style={{ marginTop: 0, fontSize: '14px' }} className="text--mono">ul. Borkowska 1,<br />05-077 Warszawa</h4>
        </Grid>
      </Grid>
    </Section>
    <Section color="neutral" style={{ padding: 0 }}>
      <div className="map">
        <iframe src="https://snazzymaps.com/embed/253473" width="100%" height="100%" style={{ border: 'none' }} />
      </div>
    </Section>
    </>
  )
}

const Party = () => {
  const theme = useTheme();
  return (
    <>
    <Section color="primary">
      <img src="images/party.jpg" className="image--block image--rounded" width="240" />
      <h2>Wesele</h2>
      <p>Po ceremonii zaślubin goście weseli udadzą się w kierunku sali. Zaplanujcie kilkadziesiąt minut na transport pomiędzy kościołem, a miejscem przyjęcia weselnego. Mamy nadzieję, że będziecie się tego dnia świetnie bawić!</p>
      <Button variant="contained" color="secondary" href="https://www.google.pl/maps/place/Szklarnia+Grodzisk/@52.1181065,20.6550628,17z/data=!3m1!4b1!4m5!3m4!1s0x471949e44a8190bd:0xba9e946321db1b41!8m2!3d52.1181032!4d20.6572515">Otwórz w Mapach Google</Button>
      <Grid container spacing={2} className="text--center" style={{ marginTop: 40, maxWidth: 540 }}>
        <Grid item sm={6} xs={12}>
          <img src="images/street-sign.svg" height="48" />
          <hr style={{ borderColor: theme.palette.primary.dark }} />
          <h4 style={{ marginTop: 0, fontSize: '24px' }} className="text--mono">Szklarnia Grodzisk</h4>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img src="images/map.svg" height="48" />
          <hr style={{ borderColor: theme.palette.primary.dark }} />
          <h4 style={{ marginTop: 0, fontSize: '14px' }} className="text--mono">ul. 3 Maja 4,<br />Grodzisk Mazowiecki</h4>
        </Grid>
      </Grid>
    </Section>
    <Section color="primary" dark style={{ padding: 0 }}>
      <div className="map">
        <iframe src="https://snazzymaps.com/embed/287001" width="100%" height="100%" style={{ border: 'none' }} />
      </div>
    </Section>
    </>
  )
}

const Witnesses = () => (
  <>
  <Section color="secondary" dark>
    <h2>Pierwsza druhna</h2>
    <img src="images/dominika.jpg" className="image--block image--rounded" width="160" />
        <h3 className="text--center">Dominika Mońka</h3>
        <p>Najlepsza przyjaciółka Panny Młodej od czasów gimnazjum. Studiuje matematykę, więc zawsze można na nią liczyć. Poza zamiłowaniem do królowej nauk realizuje swoją pasję aktorską oraz marzy, aby zwiedzić Amerykę Południową.</p>
  </Section>
  <Section color="secondary">
    <h2>Pierwszy drużba</h2>
    <img src="images/marcin.jpg" className="image--block image--rounded" width="160" />
        <h3 className="text--center">Marcin Wielądek</h3>
        <p>Brat i najlepszy przyjaciel Pana Młodego. W zamian za podróże samolotem chętnie oddałby rejs swoim pontonem po mazurskich jeziorach. Dusza towarzystwa i wspaniały organizator, więc rola Świadka nie mogła przypaść nikomu innemu.</p>
  </Section>
  </>
)

const FaqSection = () => (
  <Section color="secondary" dark>
    <h3>Często zadawane pytania</h3>
    <Faq />
  </Section>
)

const RsvpSection = () => (
  <Section color="neutral" dark>
    <h3>Czy będziesz na naszym ślubie?</h3>
    <p>Klikając poniżej <em>Tak</em> lub <em>Nie</em> zostaniesz przekierowany na Facebooka, aby potwierdzić tożsamość. Zaloguj się do naszej Facebookowej aplikacji, dzięki czemu od razu poznamy Twoją odpowiedź.</p>
    <Container maxWidth="sm">
      <Rsvp />
    </Container>
  </Section>
)

const Footer = () => (
  <>
  <Section color="neutral">
    <p className="text--mono">Made with <img src="images/heart.svg" height="16" /> by Zuzia i Paweł</p>
    <Link href="https://www.privacypolicygenerator.info/live.php?token=1gub9oMMQpYXW9AEFMh8iO1IyrRKaxhi" color="secondary">Polityka prywatności</Link>
    <Link href="https://www.gdprprivacypolicy.net/live.php?token=A6fp897lCt4k7DcWHU4fXSWdN3SeyRo7" color="secondary">Informacje o RODO</Link>
  </Section>
  <Section className="background" color="primary">
    <img src="images/rings.svg" className="image--block image--shadow" height="50" />
    <img src="images/logo.svg" className="image--block image--shadow" height="100" style={{ marginTop: 40 }} />
    <img src="images/date.svg" className="image--block image--shadow" width="300" style={{ marginTop: 80 }} />
  </Section>
  </>
)

export default function Index() {
  return (
    <Page>
      <Grid container>
        <Intro />
        <Newlyweds />
        <Wedding />
        <Witnesses />
        <Party />
        <FaqSection />
        <RsvpSection />
        <Footer />
      </Grid>
    </Page>
  )
}
