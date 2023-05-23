import React from "react";
import { HomePage } from "./pages/homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/sharedLayout/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
