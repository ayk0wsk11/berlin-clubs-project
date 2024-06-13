import { Link } from "react-router-dom";
import "../stylesheet/ClubCard.css";

const ClubCard = ({ club }) => {
  return (
    <Link to={`/club-detail/${club.id}`}>
      <div key={club.id} id="club-card">
        <img src={club.image} alt={club.name} />
        <div id="club-info">
          <h3 id="header">{club.name}</h3>

          <div id="genres">
            {club.genre.map((genre, index) => {
              if (index < 3)
                return (
                  <div id="label" key={index}>
                    {genre}
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClubCard;
