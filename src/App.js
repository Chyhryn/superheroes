import React from "react";
import { HomePage } from "./pages/homePage/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/sharedLayout/SharedLayout";
import { HeroPage } from "./pages/heroPage/HeroPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/hero/:id" element={<HeroPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
