import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & componenets
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const App = () => {
  // * SCRIPTS

  // * TEMPLATE
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
