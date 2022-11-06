import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import Schedule from "./Components/Shcedule/Schedule";
import About from "./Components/About/About";
import SnackBar from "./Components/SnackBar/SnackBar";
import Contacts from "./Components/Contacts/Contacts";
import AddProducts from "./Components/Admin/AddProducts/AddProducts";
import EditProducts from "./Components/Admin/EditProducts/EditProducts";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/about" element={<About />} />
      <Route path="/snackBar" element={<SnackBar />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/add" element={<AddProducts />} />
      <Route path="/edit/:id" element={<EditProducts />} />
    </Routes>
  );
};

export default MainRoutes;
