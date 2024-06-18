import { useContext, useState } from "react";
import { AppContext } from "../context";
import Button from "./Button";

const Form = () => {
  const contextValues = useContext(AppContext);
  const { getMealData, setMealName, mealName } = contextValues;

  return (
    <form onSubmit={getMealData}>
      <input
        onChange={(e) => setMealName(e.target.value)}
        type="text"
        name="mealName"
        placeholder="料理名を英語で入力"
        value={mealName}
      />
      <Button type="search" />
    </form>
  );
};

export default Form;
