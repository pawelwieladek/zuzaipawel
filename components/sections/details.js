import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import Section from 'components/common/section';
import IconDivider from 'components/common/icon-divider';

import Paragraph from 'components/common/paragraph';

export default function Details() {
    const theme = useTheme();
    return (
        <Section heading="Kiedy?" subheading="tuż tuż" color="primary">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}></Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h1">
                                <span className="datetime">
                                    <span className="datetime--signal">04</span>/<span className="datetime--signal">06</span>/2021
                                </span>
                            </Typography>
                            <Typography variant="h2">
                                <span className="datetime">
                                    <span className="datetime--signal">15</span>:00
                                </span>
                            </Typography>
                            <div className="divider">
                                <Divider classes={{ root: 'divider' }} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button color="primary">
                                Dodaj do Kalendarza Google
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            
            <style jsx>{`
            .datetime {
                display: block;
                text-align: center;
            }

            .divider {
                margin-top: 20px;
            }
            `}</style>
            
            <style jsx>{`
            .datetime--signal {
                color: ${theme.palette.primary.main}
            }
            `}</style>
        </Section>
    )
}
