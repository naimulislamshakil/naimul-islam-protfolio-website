import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home";
import SingalPortfolio from "./Component/Pages/SingalPortfolio";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio/:id" element={<SingalPortfolio />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
