import s from "./Header.module.css";
import Container from "./Container";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const AboutMe = (props) => {
  return (
    <section id="about">
      <Container>
        <h2 className={s.titleAbout}>
          About <span>me</span>
        </h2>
        <Accordion>
          <AccordionItem>
          <AccordionItemHeading>
          <AccordionItemButton>
          
        <h3>Bio</h3></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>       
        <p>
        I am a Front-End Developer looking for a full-time remote position in IT-company.
I have sound knowledge base of HTML, CSS, JavaScript and React. Also I have
experience in a teamwork. I like to study, to develop, to solve interesting tasks.
        </p>
        </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
          <AccordionItemButton><h3>Education</h3></AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel> 
        <ul>
          <li>
            2021 - 2022 / Full stack developer, IT SCHOOL GOIT(KYIV, UKRAINE)
            </li>
          <li>
            2011 - 2013 / Post-graduate Course in Metal Pressure Processing, PRIAZOV STATE TECHNICAL UNIVERSITY (MARIUPOL, UKRAINE)
          </li>
          <li>2006 - 2011 / Master's degree in mechanical engineering, PRIAZOV STATE TECHNICAL UNIVERSITY (MARIUPOL, UKRAINE)</li>
        </ul>
        </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
          <AccordionItemButton><h3>Role</h3></AccordionItemButton></AccordionItemHeading>
          <AccordionItemPanel> 
        <ul>
          <li>Frontend development</li>
          <li>HeadlessCMS, Wordpress</li>
          <li>Blender (enjoy)</li>
        </ul>
        </AccordionItemPanel>
        </AccordionItem>
        </Accordion>
      </Container>
    </section>
  );
};

export default AboutMe;
