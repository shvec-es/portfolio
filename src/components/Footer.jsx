
import st from './App.module.css';
import Container from './Container';
import SocialLinks from './SocialLinks';

const Footer = props => {
  return (
    <footer className={st.footer_section}>
      <Container>
        <div className={st.footer}>
      <a className="text-lg" href="/">
            My logo
          </a>
          <SocialLinks/></div>
      </Container>
    </footer>
  );
};

export default Footer;
