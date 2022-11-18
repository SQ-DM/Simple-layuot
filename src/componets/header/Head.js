import React from "react";

import "./style.css";
import logo from "../../img/logo.svg";
import t from "../../img/telegram.svg";
import v from "../../img/viber.svg";
import w from "../../img/whatsup.svg";

function Head(props) {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img className="header__logo-pic" src={logo} alt="welbex" />
        <p>
          крупный интегратор CRM
          <br /> в Росcии и ещё 8 странах
        </p>
      </div>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">
              Услуги
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Виджеты
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Интеграции
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Кейсы
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Сертификаты
            </a>
          </li>
        </ul>
      </nav>
      <p className="header__sp">+7 555 555-55-55</p>
      <nav className="header__icons">
        <nav className="header__icons">
          <a href="https://web-telegram.ru/">
            <img className="header__icons-pic" src={t} />
          </a>
          <a href="https://www.viber.com/ru/">
            <img className="header__icons-pic" src={v} />
          </a>
          <a href="https://www.whatsapp.com/?lang=ru">
            <img className="header__icons-pic" src={w} />
          </a>
        </nav>
      </nav>
    </div>
  );
}

export default Head;
