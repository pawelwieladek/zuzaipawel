import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useTheme } from '@material-ui/core/styles';

import Section from 'components/common/section';
import Heading from 'components/common/heading';
import Paragraph from 'components/common/paragraph';

export default function About() {
    const theme = useTheme();
    return (
        <Section heading="Młoda para" subheading="Sami o sobie" color="secondary">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                    <div className="about__column">
                        <img className="about__image" width="150" src="/images/bali-beach.jpg" />
                        <p className="about__heading">
                            <Heading importance={6} subheading color={theme.palette.primary.main}>Zuzia</Heading>
                            <Heading importance={5} color={theme.palette.black.main}>O Pawle</Heading>
                        </p>
                        <Card>
                            <CardContent>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </Paragraph>
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
                        <p className="about__heading">
                            <Heading importance={6} subheading color={theme.palette.primary.main}>Paweł</Heading>
                            <Heading importance={5} color={theme.palette.black.main}>O Zuzi</Heading>
                        </p>
                        <Card>
                            <CardContent>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </Paragraph>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img className="about__icon" width="150" src="/images/icons-vertical.svg" />
                </Grid>
            </Grid>
            <style jsx>{`
            .about__column {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .about__heading {
                text-align: center;
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
        </Section>
    )
}
