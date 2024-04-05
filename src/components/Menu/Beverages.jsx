import React from "react";
import BeverageCard from "./BeverageCard";

const Beverages = () => {
  return (
    <>
      <div>
        <BeverageCard beverageData={beverageData}></BeverageCard>
      </div>
    </>
  );
};

const beverageData = [
  {
    img: "../../../other-images/Cappuccino.jpeg",
    title: "HOT BEVERAGES",
    items: [
      {
        itemImg: "../../../offer-images/Hot_Beverage_1.jpeg",
        itemName: "Espresso",
        itemDescription: "A single shot of concentrated coffee.",
        itemPrice: 120,
      },
      {
        itemImg: "../../../offer-images/Hot_Beverage_2.jpeg",
        itemName: "Cappuccino",
        itemDescription: "Equal parts espresso steamed milk, and foam.",
        itemPrice: 250,
      },
      {
        itemImg: "../../../offer-images/Hot_Beverage_3.jpeg",
        itemName: "Americano",
        itemDescription: "Espresso shots with hot water.",
        itemPrice: 150,
      },
    ],
  },
  {
    img: "../../../other-images/ColdBeverage.jpeg",
    title: "COLD BEVERAGES",
    items: [
      {
        itemImg: "../../../offer-images/Cold_Beverage_1.jpeg",
        itemName: "Iced Coffee",
        itemPrice: 140,
      },
      {
        itemImg: "../../../offer-images/Cold_Beverage_2.jpeg",
        itemName: "Iced Latte",
        itemPrice: 130,
      },
      {
        itemImg: "../../../offer-images/Cold_Beverage_3.jpeg",
        itemName: "Frappuccino",
        itemPrice: 120,
      },
      {
        itemImg: "../../../offer-images/Cold_Beverage_4.jpeg",
        itemName: "Affogato",
        itemPrice: 110,
      },
      {
        itemImg: "../../../offer-images/Cold_Beverage_5.jpeg",
        itemName: "Ice Latte",
        itemPrice: 120,
      },
    ],
  },
  {
    img: "../../../other-images/CaramelTea.jpeg",
    title: "SPECIALTY DRINKS",
    items: [
      {
        itemImg: "../../../offer-images/Special_Drink1.jpeg",
        itemName: "Iced Coffee",
        itemPrice: 140,
      },
      {
        itemImg: "../../../offer-images/Special_Drink2.jpeg",
        itemName: "Iced Latte",
        itemPrice: 130,
      },
      {
        itemImg: "../../../offer-images/Special_Drink3.jpeg",
        itemName: "Frappuccino",
        itemPrice: 120,
      },
      {
        itemImg: "../../../offer-images/Special_Drink4.png",
        itemName: "Affogato",
        itemPrice: 110,
      },
      {
        itemImg: "../../../offer-images/Special_Drink5.jpeg",
        itemName: "Ice Latte",
        itemPrice: 120,
      },
    ],
  },
];

export default Beverages;
