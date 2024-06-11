import "./App.css";
import { Route, Routes } from "react-router-dom";
import { API_URL } from "./config";
import React, { useState } from 'react';
import SearchPage from './pages/Search';
import About from './pages/About';




/********************** Pages ***********************/
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ClubDetailPage from "./pages/ClubDetailPage";
import AllClubsPage from "./pages/AllClubsPage";
import AddClub from "./pages/AddClub";
import EditClub from "./pages/EditClub";

/******************** Components ********************/
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/edit-club/:clubId" element={<EditClub />} />
        <Route path="/add-club" element={<AddClub />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/club-detail/:clubId" element={<ClubDetailPage />} />
        <Route path="/clubs" element={<AllClubsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" component={SearchPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
