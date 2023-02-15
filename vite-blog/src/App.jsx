import "./App.css";

import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <Navbar />
        <div id="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
