import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Upload from "./Pages/Upload/Upload";
import VideoDetails from "./components/VideoDetails/VideoDetails";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/videos/:id" element={<VideoDetails />} />
      </Routes>
    </>
  );
}

export default App;
