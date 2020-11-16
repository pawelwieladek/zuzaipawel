import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useTheme } from '@material-ui/core/styles';

import Section from 'components/common/section';
import Paragraph from 'components/common/paragraph';

export default function Details() {
    const theme = useTheme();
    return (
        <Section heading="Plan podróży" subheading="Najważniejsze informacje" color="primary">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>Data i godzina</Grid>
                <Grid item xs={12} md={6}>04.06.2021</Grid>
                <Grid item xs={12} md={6}>Ślub</Grid>
                <Grid item xs={12} md={6}>Parafia Najświętszego Serca Pana Jezusa w Starej Miłośnie</Grid>
            </Grid>
            {/* <iframe src="https://snazzymaps.com/embed/253473" width="100%" height="400px" style={{ border: 'none' }}></iframe> */}
            <style jsx>{`
            
            `}</style>
        </Section>
    )
}
