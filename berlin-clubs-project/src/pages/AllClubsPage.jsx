import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import "../stylesheet/AllClubsPage.css";

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
    <div>
      {clubs.map((club) => {
        return <ClubCard club={club} key={club.id} />;
      })}
    </div>
  );
};
export default AllClubsPage;
