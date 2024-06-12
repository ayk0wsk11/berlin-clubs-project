import { Link } from "react-router-dom";
import "../stylesheet/ClubCard.css";

const ClubCard = ({ club }) => {
  return (
    <div key={club.id} id="all-clubs-container">
      <div id="left-side">
        <div id="header">
          <Link to={`/club-detail/${club.id}`}>
            <h1>{club.name}</h1>
          </Link>
        </div>
        <div id="genres">
          {club.genre.map((genre, index) => (
            <label id="label" key={index}>
              {genre}
            </label>
          ))}
        </div>
      </div>
      <div>
        <img id="clubmap-image" src={club.image} alt={club.name} />
      </div>
    </div>
  );
};

export default ClubCard;
