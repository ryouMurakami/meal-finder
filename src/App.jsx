import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import Layout from "./layout";
import ContextProvider from "./context";

const App = () => {
  return (
    <div>
      <ContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/meal/:id" element={<Meal />} />
            <Route path="*" element={<h1>Not Found ヘッダーロゴをクリックしてください</h1>} />
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  );
};

export default App;
