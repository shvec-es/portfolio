import s from './Header.module.css';
import st from './App.module.css';
import Container from './Container';
import { FiPhone, FiMail } from 'react-icons/fi';
import FormSend from './FormSend';

const WorkTogether = props => {
  return (
    <section id="work">
      <Container>
            <h2 className={s.titleAbout}>
              let’s work <span>together</span>
            </h2>
        <div className={st.work}>
          <div className="work_1">
            <p className={st.text}>
              Contact me to transform your ideas into exceptional solutions.
            </p>
            <address>
              <ul className={st.contacts}>
                <li>
                  <a href="tel:+380983137160">
                    <FiPhone />
                    +38 098 313 71 60
                  </a>
                </li>
                <li>
                  <a href="mailto:kotova.es.1510@gmail.com">
                    <FiMail />
                    kotova.es.1510@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <FormSend />
        </div>
      </Container>
    </section>
  );
};

export default WorkTogether;
