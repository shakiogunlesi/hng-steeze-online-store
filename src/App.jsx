import { Routes, Route } from "react-router-dom";
import StorePage from "./components/Store/Store";
import CartPage from "./components/Cart/CartPage";
import './App.css'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App
