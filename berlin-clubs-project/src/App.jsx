import "./App.css";
import { Route, Routes } from "react-router-dom";

// ******************** Pages  ********************
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ClubDetailPage from "./pages/ClubDetailPage";
import AllClubsPage from "./pages/AllClubsPage";

// ******************** Components  ********************

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddClub from "./pages/AddClub";
import EditClub from "./pages/EditClub";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/edit-club" element={<EditClub/>}/>
        <Route path="/add-club" element={<AddClub/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/club-detail/:clubId" element={<ClubDetailPage />} />
        <Route path="/clubs" element={<AllClubsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
