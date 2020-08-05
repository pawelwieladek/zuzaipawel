import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Heading from './heading';

export default function About() {
  return (
    <div className="about">
        <div className="about__heading">
            <Heading importance={2} color="black">Młoda Para</Heading>
            <Heading importance={5} subheading color="ocean">Sami o sobie</Heading>
        </div>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                    <div className="about__column">
                        <img className="about__image" width="150" src="/images/bali-beach.jpg" />
                        <Heading importance={5} subheading color="ocean">Zuzia</Heading>
                        <Heading importance={2} color="black">O Pawle</Heading>
                        <Card>
                            <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className="about__column-divider">
                        <img className="about__icon about__icon--column-divider" width="50" src="/images/icon-1.svg" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <div className="about__column">
                        <img className="about__image" width="150" src="/images/bali-beach.jpg" />
                        <Heading importance={5} subheading color="ocean">Paweł</Heading>
                        <Heading importance={2} color="black">O Zuzi</Heading>
                        <Card>
                            <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img className="about__icon" width="150" src="/images/icons-vertical.svg" />
                </Grid>
            </Grid>
        </Container>
        <style jsx>{`
        .about {
            width: 100%;
            background: #e5ccaf;
            padding: 20px 0;
        }

        .about__heading {
            text-align: center;
        }

        .about__column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .about__image {
            border-radius: 50%;
            margin: 0 auto;
        }

        .about__column-divider {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100%;
        }

        .about__icon--column-divider{
            flex: 1;
        }

        .about__icon {
            display: block;
            margin: 0 auto;
        }
        `}</style>
    </div>
  )
}
