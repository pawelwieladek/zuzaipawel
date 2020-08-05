import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

export default function Paragraph({ color, children }) {
    const theme = useTheme();
    return (
        <Typography style={{ color: color || theme.palette.text.primary }}>
            {children}
        </Typography>
  )
}
