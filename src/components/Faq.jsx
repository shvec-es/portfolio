import Container from './Container';
import s from './Header.module.css';
import { quetions } from '../data/faq';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = props => {
  return (
    <section id="faq">
      <Container>
        <h2 className={s.titleAbout}>
          Frequently asked <span>question</span>
        </h2>
        <Accordion>
          {quetions.map((item, i) => {
            return (
              <AccordionItem key={item.q}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.q}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{item.a}</AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
};

export default Faq;
