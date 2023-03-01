import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeSiswa from "./page/homeSiswa";
import Login from "./page/loginAdmin";
import Login2 from "./page/loginSiswa";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login-admin" element={<Login />} />
        <Route path="/login-siswa" element={<Login2 />} />
        <Route path="/Home-admin" element={<HomeSiswa/>}/>
        <Route path="*" element={<Navigate to={"/login-siswa"} replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
