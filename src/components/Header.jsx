import React from "react";
import OrderButton from "./OrderButton";
import ThemeSwitcher from "./ThemeSwitcher";
import s from "./Header.module.css";
import Container from "./Container";

const Header = () => {
  return (
    <header>
      <Container>
        <div className={s.header}>
          <a className="text-lg" href="/">
            My logo
          </a>
          <nav>
            <ul className={s.nav}>
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#work">Contacts</a>
              </li>
            </ul>
          </nav>
          <div className={s.headerBtns}>
            <ThemeSwitcher />
            <OrderButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
