import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useTheme } from '@material-ui/core/styles';

import Section from 'components/common/section';
import Heading from 'components/common/heading';
import Paragraph from 'components/common/paragraph';
import IconDivider from 'components/common/icon-divider';

export default function Wedding() {
    const theme = useTheme();
    return (
        <Section heading="Ślub" subheading="" color="secondary">
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <div className="about__column">
                        <Card>
                            <CardContent>
                                <Paragraph>
                                    <span className="invitation">
                                    Z wielką radością zapraszamy
                                    <br />
                                    na nasz <strong>ślub</strong>,
                                    <br />
                                    który odbędzie się <strong>4 czerwca 2021</strong>
                                    <br />
                                    o godzinie <strong>15:00</strong>
                                    <br />
                                    w <strong>Starej Miłośnie</strong> w drewnianym kościele
                                    <br />
                                    parafii Naświętszego Serca Pana Jezusa!
                                    </span>
                                </Paragraph>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs ={12} sm={2}>
                    <IconDivider />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <div className="about__column">
                        <img className="about__image" width="150" src="/images/bali-beach.jpg" />
                        <div className="about__heading">
                            <Heading importance={6} subheading color={theme.palette.primary.main}>Paweł</Heading>
                            <Heading importance={5} color={theme.palette.black.main}>O Zuzi</Heading>
                        </div>
                        <Card>
                            <CardContent>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

                                </Paragraph>
                            </CardContent>
                        </Card>
                    </div>
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
                margin: 20px 0;
                text-align: center;
            }

            .about__image {
                border-radius: 50%;
                margin: 0 auto;
            }

            .invitation {
                font-size: 1.2rem;
            }
            `}</style>
        </Section>
    )
}
