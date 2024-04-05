import React from "react";
import style from "./beverageCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(1);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <h4 className={style.countBtn}>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </h4>
    </>
  );
}

const BeverageCard = ({ beverageData }) => {
  return (
    <>
      <div className={style.beverage_container}>
        {beverageData.map((item, index) => (
          <div key={index} className={style.beverageCard}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>

            <ul className={style.card_item}>
              {item.items.map((drink, i) => (
                <li key={i}>
                  <img src={drink.itemImg} alt={drink.itemName} />
                  <div className={style.item_layout}>
                    <div>
                      <h3>{drink.itemName}</h3>
                      {drink.itemDescription ? (
                        <p>{drink.itemDescription}</p>
                      ) : (
                        <p>Rs.{drink.itemPrice}</p>
                      )}
                    </div>
                    <div>
                      <button>+</button>
                      {drink.itemDescription ? <p>Rs.{drink.itemPrice}</p> : ""}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <ul className={style.mobileView}>
              {item.items.map((beverageItem, order) => (
                <li key={order}>
                  <div className={style.orderItemL}>
                    <h3>{beverageItem.itemName}</h3>
                    {beverageItem.itemDescription && (
                      <p className={style.orderpara}>
                        {beverageItem.itemDescription}
                      </p>
                    )}
                    <p className={style.orderPrice}>
                      Rs.{beverageItem.itemPrice}
                    </p>
                  </div>
                  <div className={style.orderItemR}>
                    <img
                      src={beverageItem.itemImg}
                      alt={beverageItem.itemName}
                    />
                    <div>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={style.heartIcon}
                      />
                      <MyButton />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default BeverageCard;
