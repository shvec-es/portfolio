import s from './Header.module.css';
import { LiaTelegramPlane, LiaGithub, LiaInstagram } from 'react-icons/lia';
import { RiYoutubeLine } from 'react-icons/ri';

const SocialLinks = props => {
  return (
    <ul className={s.links}>
      <li>
        <a className={s.socLink} href="/">
          <LiaInstagram size={26} />
        </a>
      </li>
      <li>
        <a className={s.socLink} href="/">
          <LiaTelegramPlane size={26} />
        </a>
      </li>
      <li>
        <a className={s.socLink} href="/">
          <RiYoutubeLine size={26} />
        </a>
      </li>
      <li>
        <a className={s.socLink} href="/">
          <LiaGithub size={26} />
        </a>
      </li>
      <li>
        <a className={s.socLink} href="mailto:kotova.es.1510@gmail.com">
          .gmail
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
