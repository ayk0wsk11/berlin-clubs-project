import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import About from "./pages/About";

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
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div id="spa">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="/edit-club/:clubId" element={<EditClub />} />
        <Route path="/add-club" element={<AddClub />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/club-detail/:clubId"
          element={<ClubDetailPage currentUser={currentUser} />}
        />
        <Route path="/clubs" element={<AllClubsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
