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
            <Paragraph color={theme.palette.white.main}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </Paragraph>
            <style jsx>{`
            
            `}</style>
        </Section>
    )
}
