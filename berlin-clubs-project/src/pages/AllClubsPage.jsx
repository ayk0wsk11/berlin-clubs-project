import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import "../stylesheet/AllClubsPage.css";
import ClubCard from "../components/ClubCard";

const AllClubsPage = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/clubs`);
        setClubs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClubs();
  }, []);

  return (
    <div id="clubmap-container">
      {clubs.map((oneClub) => {
        return <ClubCard oneClub={oneClub} key={oneClub.id} />;
      })}
    </div>
  );
};
export default AllClubsPage;
