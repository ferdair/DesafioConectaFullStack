import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home";
import Consulta from "../src/Views/Consulta";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="consulta" element={<Consulta />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
