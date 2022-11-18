import React from "react";
import t from "../../img/telegram.svg";
import v from "../../img/viber.svg";
import w from "../../img/whatsup.svg";
import "./style.css";

function Footer(props) {
  return (
    <div className="wrapper__footer">
      <div className="footer_cards">
        <h6 className="footer_head">О КОМПАНИИ</h6>
        <nav>
          <ul className="footer_list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Партнерская программы
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer_cards">
        <h6 className="footer_head">Меню</h6>
        <nav>
          <ul className="footer_list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Расчет стоимости
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Услуги
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Виджеты
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Интеграции
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Наши клиенты
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer_cards">
        <h6 className="footer_head">
          <br />
        </h6>
        <nav>
          <ul className="footer_list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Кейсы
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Благодарственные письма
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Сертификаты
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Блог на YouTube
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Вопрос/Ответ
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__end">
        <h6 className="footer_head">КОНТАКТЫ</h6>
        <p className="footer__text">+ 7 555 55-55-55</p>
        <nav className="footer__icons">
          <a href="https://web-telegram.ru/">
            <img className="footer__icons-pic" src={t} />
          </a>
          <a href="https://www.viber.com/ru/">
            <img className="footer__icons-pic" src={v} />
          </a>
          <a href="https://www.whatsapp.com/?lang=ru">
            <img className="footer__icons-pic" src={w} />
          </a>
        </nav>

        <p className="footer__text">Москва, Путевой проезд 3с1, к 902</p>
        <p className="footer__text-end">
          ©WELBEX 2022. Все права защищены. <br />
          Политика конфиденциальности
        </p>
      </div>
    </div>
  );
}

export default Footer;
