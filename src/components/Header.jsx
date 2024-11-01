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
                <a href="/">About me</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contacts</a>
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
