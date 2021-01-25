import deburr from 'lodash.deburr';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
  root: {
    backgroundColor: '#e5ccaf',
    boxShadow: 'none',
    color: '#000000',
    '&$expanded + &$expanded': {
      marginTop: 0,
    },
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({})(MuiAccordionSummary);
const AccordionDetails = withStyles({})(MuiAccordionDetails);

const Question = ({ expanded, onChange, title, children }) => {
  const id = deburr(title);
  const handleChange = (panel) => (event, isExpanded) => {
    onChange(isExpanded ? panel : false);
  };
  return (
    <Accordion expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        aria-controls={id}
        id={id}
      >
        <h4 className="text--no-margin">{title}</h4>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          {children}
        </p>
      </AccordionDetails>
    </Accordion>
  )
}

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <Question title="Transport na salę weselną" expanded={expanded} onChange={setExpanded}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Question>
      <Question title="Transport powrotny" expanded={expanded} onChange={setExpanded}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Question>
      <Question title="Animacje dla dzieci" expanded={expanded} onChange={setExpanded}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Question>
      <Question title="Prezenty" expanded={expanded} onChange={setExpanded}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Question>
      <Question title="Kontakt" expanded={expanded} onChange={setExpanded}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Question>
    </>
  )
}
