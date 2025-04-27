// src/App.js
import React, { useEffect } from "react";
import Inventory from "./components/Inventory";
import { fetchItems } from "./redux/api/inventory";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { NavbarLeft } from "./components/NavbarLeft";
import { InventoryPost } from "./components/InventoryPost";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="">
      <Navbar />
      <div className="main-wrapper">
        <NavbarLeft/>
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/add" element={<InventoryPost />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
