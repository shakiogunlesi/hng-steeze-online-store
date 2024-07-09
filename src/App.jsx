import { Routes, Route } from "react-router-dom";
import StorePage from "./components/Store/Store";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StorePage />} />
      </Routes>
    </>
  );
}

export default App
