import React from "react";
import ellipse from "../images/Ellipse 50.svg";
import remove from "../images/remove.svg";
import keyboard2 from "../images/keyboard_arrow_up.png";
import close from "../images/close.svg";
import close2 from "../images/close.png";
import ellipse1 from "../images/Ellipse 57.svg";
import ellipse2 from "../images/Ellipse 58.svg";
import ellipse3 from "../images/Ellipse 59.svg";
import ellipse4 from "../images/Ellipse 60.svg";
import ellipse5 from "../images/Ellipse 61.svg";
import ellipse6 from "../images/Ellipse 62.svg";
import "../css/right.css";

function rightCon ()  {
  return (
    <div className="right-Con">
      <div className="price">
        <h2>Цена</h2>
        <div className="priceLines">
          <div className="hr1"></div>
          <img src={ellipse} />
          <div className="hr2"></div>
          <img src={ellipse} />
          <div className="hr3"></div>
        </div>
        <p>27 550₽ - 37 550₽</p>
      </div>

      <div className="rightCon-line"></div>

      <div className="category">
        <div className="h3-icon">
          <h3>Категории</h3>
          <img src={remove} />
        </div>
        <div className="categoty-li">
          <ul>
            <li>Футболки</li>
            <li>Джемперы</li>
            <li>Спортивные костюмы</li>
            <li>Рубашки</li>
            <li>Поло</li>
            <li>Майки</li>
            <li>Худи</li>
            <li>Свитшоты</li>
            <li>Свитера</li>
            <li>Толствоки</li>
          </ul>
        </div>
        <p>Показать еще</p>
      </div>

      <div className="rightCon-line"></div>

      <div className="brand">
        <p>Бренды</p>
        <img src={keyboard2} />
      </div>

      <div className="rightCon-line"></div>

      <div className="brands">
        <button className="selected-btn">
          <div className="burberry">
            <div className="burberry-in">
              <p>Burberry</p>
              <img src={close} />
            </div>
            <img className="close2" src={close} />
          </div>
        </button>

        <div className="brands-textP">
          <p>Бренды</p>
        </div>
        <div className="brands-li">
          <ul>
            <li>Gucci</li>
            <li>Versace</li>
            <li>
              <span>Burberry</span>
            </li>
            <li>Louis Vuitton</li>
            <li>Prada</li>
            <li>Dolce & Gabbana</li>
          </ul>
          <hr />
        </div>
      </div>

      <div className="rightCon-line1" />

      <div className="condition">
        <div className="codition-h3">
          <h3>Состояние</h3>
          <img src={remove} />
        </div>
        <div>
          <input type="checkbox" />
          <p>Новая с биркой</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Новая без бирки</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Небольшие дефекты</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Надевали один раз</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Надевали несколько раз</p>
        </div>
      </div>

      <div className="rightCon-line1" />

      <div className="size">
        <div className="size-icon">
          <h3>Размер одежды</h3>
          <img src={remove} />
        </div>
        <div className="sizes">
          <div>XXL</div>
          <div>XS</div>
          <div>XL</div>
          <div className="sizes-Ml">M</div>
          <div className="sizes-Ml">L</div>
        </div>
        <div className="sizes2">
          <div>US 42</div>
          <div>US 38</div>
          <div>US 33</div>
          <div>US 30</div>
          <div>US 40</div>
          <div>US 36</div>
          <div>US 32</div>
          <div>US 28</div>
          <div>US 39</div>
          <div>US 34</div>
          <div>US 31</div>
        </div>
      </div>

      <div className="rightCon-line1" />

      <div className="shoesSize">
        <div className="shoesSize-h3">
          <h3>Размер обуви</h3>
          <img src={remove} />
        </div>
        <div className="frame-text">
          <div>UE 46</div>
          <div>EU 45</div>
          <div>EU 44.5</div>
          <div>EU 44</div>
          <div>EU 43</div>
          <div>EU 42.5</div>
          <div>EU 42</div>
          <div>EU 41</div>
          <div>EU 40</div>
          <div>EU 39</div>
        </div>
      </div>

      <div className="rightCon-line1" />

      <div className="colors">
        <div className="colors-h3">
          <h3>Цвета</h3>
          <img src={remove} />
        </div>
        <div className="colors-icons">
          <img src={ellipse1} />
          <img src={ellipse2} />
          <img src={ellipse3} />
          <img src={ellipse4} />
          <img src={ellipse5} />
          <img src={ellipse6} />
        </div>
      </div>

      <div className="rightCon-line1" />

      <button className="btn-sort">Сбросить фильтр</button>
    </div>
  );
};

export default rightCon;
