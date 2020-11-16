import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';

import Heading from './heading';

const Subheading = ({ children, color }) => {
    return children ? (
        <Heading importance={6} color={color}>{children}</Heading>
    ) : null;
}

function getThemeMapping(theme) {
    return {
        primary: {
            section: theme.palette.primary.main,
            heading: theme.palette.white.main,
            subheading: theme.palette.secondary.main
        },
        secondary: {
            section: theme.palette.secondary.main,
            heading: theme.palette.black.main,
            subheading: theme.palette.primary.main
        },
    }
}

export default function Section({ heading, subheading, color, children }) {
    const theme = useTheme();
    const themeMapping = getThemeMapping(theme);
    const colorMapping = themeMapping[color] || themeMapping.primary;

    return (
        <section className="section">
            <div className="heading">
                <Heading importance={3} color={colorMapping.heading}>{heading}</Heading>
                <Subheading color={colorMapping.subheading}>{subheading}</Subheading>
            </div>
            <Container maxWidth="lg">
                {children}
            </Container>
            <style jsx>{`
            .section {
                width: 100%;
                padding: 20px 0;
            }

            .heading {
                text-align: center;
                margin-bottom: 20px;
            }
            `}</style>

            <style jsx>{`
            .section {
                background: ${colorMapping.section};
            }
            `}</style>
        </section>
    )
}
