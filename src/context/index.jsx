import { createContext, useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { addHistory } from "../utils/addHistory";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const [imgUrl, setImgUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mealName, setMealName] = useState("");
  const [mealData, setMealData] = useState({
    id: "",
    name: "",
    instructions: "",
    img: "",
    source: "",
    area: "",
    category: "",
  });
  const [theme, handleThemeSwitch] = useDarkMode();
  const navigate = useNavigate();
  const getMealData = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      const jsonData = await response.json();
      setMealData({
        id: jsonData.meals[0].idMeal,
        name: jsonData.meals[0].strMeal,
        instructions: jsonData.meals[0].strInstructions,
        img: jsonData.meals[0].strMealThumb,
        source: jsonData.meals[0].strSource,
        area: jsonData.meals[0].strArea,
        category: jsonData.meals[0].strCategory,
      });
      setLoading(false);
      setMealName("");
      addHistory(jsonData.meals[0].strMealThumb);
      navigate(`/meal/${jsonData.meals[0].idMeal}`);
    } catch (err) {
      alert("エラーが発生しました。再読み込みしてください");
    }
  };

  useEffect(() => {
    const savedUrl = JSON.parse(localStorage.getItem("history"));
    savedUrl && setImgUrl(savedUrl);
  }, [mealData]);

  const handleDeleteHistory = () => {
    localStorage.removeItem("history");
    setImgUrl([]);
  };

  const contextValues = {
    imgUrl,
    loading,
    mealName,
    mealData,
    theme,
    setMealName,
    getMealData,
    handleThemeSwitch,
    handleDeleteHistory,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
