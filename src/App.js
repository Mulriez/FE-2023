import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/login";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={"/login"} replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
