import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import Upload from "./Pages/Upload/Upload";
import axios from "axios";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
