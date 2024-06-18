import Recipe from "../components/Recipe";
import Loading from "../components/Component";
import { useContext } from "react";
import { AppContext } from "../context";

const Meal = () => {
  const contextValues = useContext(AppContext);
  return <>{contextValues.loading ? <Loading /> : <Recipe />}</>;
};

export default Meal;
