import { Routes, Route } from "react-router-dom";
import StorePage from "./components/Store/Store";
import CartPage from "./components/Cart/CartPage";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App
