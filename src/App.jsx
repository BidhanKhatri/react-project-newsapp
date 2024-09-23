import { createContext, useState } from "react";
import DisplayNews from "./components/DisplayNews";
import Navbar from "./components/Navbar";

export const NewsContext = createContext();

function App() {
  const [news, setNews] = useState("apple");

  return (
    <>
      <NewsContext.Provider value={{ news, setNews }}>
        <Navbar />
        <DisplayNews />
      </NewsContext.Provider>
    </>
  );
}

export default App;
