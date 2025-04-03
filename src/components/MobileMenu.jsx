import s from './Header.module.css';
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';
import OrderButton from './OrderButton';
import ThemeSwitcher from './ThemeSwitcher';

const MobileMenu = ({ toggleMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className={s.mobileMenu}
    >
      <button className={s.closeBtn} type="button" onClick={toggleMenu}>
        <GrClose />
      </button>
      <ul className={s.navMobile}>
        <li>
          <a className={s.navLink} href="#about">
            About me
          </a>
        </li>
        <li>
          <a className={s.navLink} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className={s.navLink} href="#work">
            Contacts
          </a>
        </li>
      </ul>
      <div className={s.headerBtnsMobile}>
        <ThemeSwitcher />
        <OrderButton />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
