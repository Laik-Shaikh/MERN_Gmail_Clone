import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Emails from "../components/Emails";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import ViewEmail from "../components/ViewEmail";

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <>
      <BrowserRouter>
        <Header toggleDrawer={toggleDrawer} />
        <SideBar openDrawer={openDrawer} />
        {/* <Emails openDrawer={openDrawer} /> */}

        <Routes>
          <Route path="/:type" element={<Emails openDrawer={openDrawer} />} />
          <Route path="/:type/:id" element={<ViewEmail openDrawer={openDrawer} />} />

          <Route path="/" element={<Navigate to="/inbox" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
