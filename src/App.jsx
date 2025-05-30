import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Header from "./components/header";
import VideoDetail from "./pages/VideoDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
