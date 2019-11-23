import React from "react";
import ReactDOM from "react-dom";
import SimpleMap from "./map";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <SimpleMap />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
