import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import GoogleMaps from "./components/Map";
import SearchBar from "./components/SearchBar";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <SearchBar inputText={inputText} setInputText={setInputText} />
      <GoogleMaps inputText={inputText} />
    </div>
  );
}

export default App;
