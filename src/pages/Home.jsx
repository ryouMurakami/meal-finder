import Loading from "../components/Component";
import { useContext } from "react";
import { AppContext } from "../context";

const Home = () => {
  const contextValues = useContext(AppContext);

  return (
    <>
      <h3>今夜のレシピを見つけよう</h3>
      {contextValues.loading && <Loading />}
    </>
  );
};
export default Home;
