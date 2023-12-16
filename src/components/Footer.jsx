import React from "react";
import vk from "../images/vk 1.svg";
import group from "../images/Group 10546.svg";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="nav">
        <div className="category">
          <h2>Категории</h2>
          <ul>
            <li>Мужское</li>
            <li>
              <span>Женское</span>
            </li>
            <li>Унисекс</li>
          </ul>
        </div>
        <div className="category">
          <h2>О нас</h2>
          <ul>
            <li>О компании</li>
            <li>Контакты</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="category">
          <h2>Мой аккаунт</h2>
          <ul>
            <li>Заказы</li>
            <li>Список желаний</li>
            <li>Войти</li>
          </ul>
        </div>
        <div className="category">
          <h2>Сервис</h2>
          <ul>
            <li>Безопасная сделка</li>
            <li>Правила оказания услуг</li>
            <li>Блог</li>
          </ul>
        </div>

        <div className="contacts">
          <p className="phone-number">+7 (910) 588-44-55</p>
          <p className="email">duffs@mail.ru</p>
          <div className="icons">
            <img src={vk} />
            <img src={group} />
          </div>
        </div>
      </div>

      <div className="footer-line" />

      <div className="footer-end">
        <p className="footer-p1">
          Пользовательское соглашение <span>и</span> политика конфиденциальности
        </p>
        <p className="footer-p2">©CLOZA 2021. Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;
