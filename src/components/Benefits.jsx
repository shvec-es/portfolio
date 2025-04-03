import s from './Header.module.css';
import st from './App.module.css';
import { FaRegUser } from 'react-icons/fa';
import { LuMessageCircleHeart, LuHourglass } from 'react-icons/lu';
import { BsBrush } from 'react-icons/bs';
import Container from './Container';
import OrderButton from './OrderButton';

const Benefits = () => {
  return (
    <section id="benefits">
      <Container>
        <h2 className={s.titleAbout}>
          <span>Benefits</span> of working with me
        </h2>
        <ul className={st.benefits}>
          <li className={st.benefit}>
            <FaRegUser size="30" />
            <h3 className={st.benefit_title}>Expertise</h3>
            <p className={st.benefit_text}>
              With extensive experience in development, I have a deep
              understanding of programming and website development.
            </p>
          </li>
          <li className={st.benefit}>
            <LuMessageCircleHeart size="30" />
            <h3 className={st.benefit_title}>Communication</h3>
            <p className={st.benefit_text}>
              Understanding your needs and wants is my priority and I am always
              available for discussions and open to corrections.
            </p>
          </li>
          <li className={st.benefit}>
            <BsBrush size="30" />
            <h3 className={st.benefit_title}>Art</h3>
            <p className={st.benefit_text}>
              Thanks to my creative nature, I am ready to accept challenges and
              help you bring your ideas to life.
            </p>
          </li>
          <li className={st.benefit}>
            <LuHourglass size="30" />
            <h3 className={st.benefit_title}>Urgent execution</h3>
            <p className={st.benefit_text}>
              I understand how important time is to you. Ready to work quickly
              and efficiently, without reducing the quality of work.
            </p>
          </li>
        </ul>
        <OrderButton />
      </Container>
    </section>
  );
};

export default Benefits;
