import './index.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    spacing: 16,
    palette: {
        primary: {
            main: '#16595a',
            dark: '#145051',
        },
        secondary: {
            main: '#e5ccaf',
            dark: '#ceb79d',
        },
        neutral: {
            main: '#ffffff',
            dark: '#e5e5e5',
            darker: '#d4d4d4',
        }
    }
});

export default function ({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}