import React from "react";
import logo from "../images/logo.png";
import favorite from "../images/favorite_border.svg";
import person from "../images/person_outline.svg";
import search from "../images/search 1.svg";
import "../css/header.css";

function header  () {
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logo} alt="" />

        <div className="menu">
          <ul className="menu-ul">
            <li>Мужское</li>
            <li>Женское</li>
            <li>Унисекс</li>
            <li>
              <span>Sale</span>
            </li>
            <li>FAQ</li>
            <li>Безопасная сделка</li>
            <li>Правила пользования</li>
          </ul>
        </div>
        <div className="elements">
          <img src={favorite} className="favorite-icon" />
          <p className="p6">6</p>
          <img src={person} alt="" />
          <button className="btn">Продать</button>
        </div>
      </div>

      <div className="black-search">
        <img src={search} className="search-icon" />
        <input
          className="search-input"
          placeholder="Поиск товара, бренда или продавца...Поиск товара, бренда или продавца...Поиск товара, бренда или продавца...Поиск товара, бренда или продавца... "
        />
      </div>

      <div className="pages">
        <h3>Футболки</h3>
        <p>
          Главная / Мужское / <span>Футболки</span>
        </p>
      </div>
    </div>
  );
};

export default header;
