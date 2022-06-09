import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
