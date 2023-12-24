import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/leftContainer.css";
// import keyboard from '../images/keyboard_arrow_down.png'
import east from "../images/east.svg";
import favoriteBorder from "../images/favorite_border (2).svg";
import drafts from "../images/drafts.svg";

const LeftContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/posts")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="leftCon">
      <div className="leftCon-sort">
        <p>Показано 1 - 15 из 874</p>
        <div className="p-sorted">
          <p>Сортировать:</p>
          <div className="sortP-icon">
            <p>Цена по позрастанию</p>
            {/* <img src={keyboard} /> */}
          </div>
        </div>
      </div>

      <div className="cards">
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="card-p">
              <img src={item.icon} alt={item.name} />

              <p className="card-name">{item.title}</p>
              <p className="price">{item.price} ₽</p>
            </div>
            <div className="card-line" />
            <div className="card-p2">
              <p>Новое</p>
              <p>L</p>
            </div>
            <div className="card-icons">
              <img src={favoriteBorder} />
              <img src={drafts} />
            </div>
          </div>
        ))}
      </div>

      <div className="btn-more">
        <button className="btn-more-in">Показать еще</button>
        <div className="numbers">
          <p>
            <span>1</span>
          </p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>...</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <img src={east} />
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;