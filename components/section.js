import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';

export default function Section({ className = '', color = 'primary', dark = false, children, style }) {
    const theme = useTheme();
    const classNames = ['column'].concat(className.split(' ')).join(' ');
    const backgroundColor = dark ? theme.palette[color].dark : theme.palette[color].main;
    const textColor = theme.palette[color].contrastText;
    const customStyle = { backgroundColor, color: textColor, ...style };
    return (
        <Grid item xs={12} md={6} className={classNames} style={customStyle}>
            {children}
        </Grid>
    );
}