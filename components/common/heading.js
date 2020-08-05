import Typography from '@material-ui/core/Typography';

export default function Heading({ importance, color, children }) {
    return (
        <Typography
            variant={`h${importance}`}
            style={{ color }}
        >
            {children}
        </Typography>
  )
}
