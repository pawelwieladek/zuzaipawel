import deburr from 'lodash.deburr';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';

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
    <Accordion expanded={expanded === id} onChange={handleChange(id)} style={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        aria-controls={id}
        id={id}
      >
        <h4 className="text--no-margin">{title}</h4>
      </AccordionSummary>
      <AccordionDetails>
        <p style={{ maxWidth: "100%" }}>
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
      <Question title="Który kościół?" expanded={expanded} onChange={setExpanded}>
        W naszej parafii znajdują się dwa kościoły, które stoją obok siebie i dzieli je tylko ogrodzenie. Nasz ślub odbędzie się w kościele drewnianym. Jeżeli nawigacja poprowadzi Was w stronę murowanego kościoła, zaufajcie mu. Kawałek dalej znajduje się parking przed drewnianym kościołem, do którego zmierzacie.      </Question>
      <Question title="Transport" expanded={expanded} onChange={setExpanded}>
        Jeśli jesteś zainteresowany transportem z kościoła na salę weselną i/lub transportem powrotnym po weselu - poinformuj nas o tym! :)
        Dokładne informacje na ten temat pojawią się 2 tygodnie przed ślubem.
      </Question>
      <Question title="Noclegi" expanded={expanded} onChange={setExpanded}>
        Jeśli przyjeżdżasz z daleka i będziesz potrzebował noclegu - daj nam znać!
        Informacje dla zainteresowanych noclegami będziemy przekazywać indywidualnie.
      </Question>
      <Question title="Prezenty" expanded={expanded} onChange={setExpanded}>
        Najlepszym prezentem dla Pary Młodej będzie Wasza obecność. Jeżeli chcecie podarować nam dodatkowy prezent, to najbardziej ucieszą nas pieniądze. Podobno szczęścia nie dają, ale można za nie kupić bilety w daleką podróż lub  wymarzony dom. :)
      </Question>
      <Question title="Co z tym COVID-em?" expanded={expanded} onChange={setExpanded}>
      Póki co, nikt nie jest w stanie odpowiedzieć na to pytanie. 
Jesteśmy dobrej myśli i mamy nadzieję, że nasze wesele odbędzie się zgodnie z planem i będziecie z nami w tym wspaniałym dniu.
      </Question>
      <Question title="Potwierdzenie przybycia" expanded={expanded} onChange={setExpanded}>
      Prosimy o potwierdzenie przybycia do 25 kwietnia 2021 r. Jest to dla nas szczególnie istotne, abyśmy mogli przejść do następnego etapu przygotowań.
      </Question>
      <Question title="Kontakt" expanded={expanded} onChange={setExpanded}>
      Jeżeli masz do nas jakieś pytania - zadzwoń!
      <br />
      Zuzia: <Link href="tel:+48501714368">501 714 368</Link>
      <br />
      Paweł: <Link href="tel:+48793775960">793 775 960</Link>
      </Question>
    </>
  )
}
