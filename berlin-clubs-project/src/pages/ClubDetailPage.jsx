import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";
import ClubCard from "../components/ClubCard";

const ClubDetailPage = () => {
  const [oneClub, setOneClub] = useState(null);
  const nav = useNavigate();
  

  const { clubId } = useParams();
  console.log("my club id", clubId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/clubs/${clubId}`);
        console.log("my data", data);

        setOneClub(data);
        console.log("my one Club", oneClub);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [clubId]);

  if (!oneClub) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ClubCard oneClub={oneClub} />
    </div>
  );
};
export default ClubDetailPage;
