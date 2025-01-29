import React from "react";
import style from "./meals-grid.module.css";
import MealItem from "./meal-item";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={style.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />{" "}
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
