import React from "react";
import "./style.css";

function Main(props) {
  return (
    <div className="wrapper__main">
      <div className="main__left">
        <h1 className="main__head">
          Зарабатывайте
          <br /> больше
        </h1>
        <h1 className="main__left-text">с WELBEX</h1>
        <p className="main__p">
          Развиваем и контролируем
          <br /> продажи за вас
        </p>
      </div>
      <div className="main__right">
        <p className="main__right_p">
          Вместе с
          <span className="main__right-text">
            {" "}
            БЕСПЛАТНОЙ
            <br /> КОНСУЛЬТАЦИЕЙ{" "}
          </span>
          мы дарим:
        </p>

        <div className="main__right-cards">
          <div className="main__right-left">
            <h5 className="main__right_p">Виджеты</h5>
            <p className="cards__text">
              30 готовых
              <br /> решений
            </p>
            <h5 className="main__right_p">SKYPE аудит</h5>
            <p className="cards__text">
              отдела продаж
              <br /> и CRM системы
            </p>
          </div>
          <div className="main__right-right">
            <h5 className="main__right_p">DASHBOARD</h5>
            <p className="cards__text">
              с показателями
              <br /> нашего бизнеса
            </p>
            <h5 className="main__right_p">35 ДНЕЙ</h5>
            <p className="cards__text">
              использования
              <br />
              CRM
            </p>
          </div>
        </div>
        <button className="main__right-btn" onClick={() => alert("Hello")}>
          Получить консультацию
        </button>
      </div>
    </div>
  );
}

export default Main;
