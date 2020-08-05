import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#004b4c',
        },
        secondary: {
            main: '#e5ccaf',
        },
        black: {
            main: '#000',
        },
        white: {
            main: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontSize: 12,
        h1: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '3rem',
            textTransform: 'uppercase',
        },
        h2: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '2rem',
            textTransform: 'uppercase',
        },
        h3: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '1.6rem',
            textTransform: 'uppercase',
        },
        h4: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '1.4rem',
            textTransform: 'uppercase',
        },
        h5: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
        },
        h6: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
        },
    },
});

export default function ({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}