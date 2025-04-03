import React, { useState } from 'react';
import OrderButton from './OrderButton';
import ThemeSwitcher from './ThemeSwitcher';
import MobileMenu from './MobileMenu';
import s from './Header.module.css';
import Container from './Container';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(prevState => !prevState);
  };
  return (
    <header>
      <Container>
        <div className={s.header}>
          <a className={s.logo} href="/">
            MyLogo
          </a>
          <nav>
            <ul className={s.nav}>
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
          </nav>
          <div className={s.headerBtns}>
            <ThemeSwitcher />
            <OrderButton />
          </div>
          <button type="button" className={s.burgerBtn} onClick={toggleMenu}>
            <RxHamburgerMenu size={24} />
          </button>
        </div>
      </Container>
      <AnimatePresence>
        {isOpenMenu && <MobileMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
