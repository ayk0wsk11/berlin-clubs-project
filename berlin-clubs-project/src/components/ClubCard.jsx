import { Link, useNavigate } from "react-router-dom";
import "../stylesheet/ClubCard.css";

const ClubCard = ({ oneClub }) => {
  const nav = useNavigate();
  return (
    <div id="clubmap-container">
      <div id="btn-container">
        <div>
          <Link to={"/edit-club"}>
          <button className="button">Edit</button>

          </Link>
        </div>
      <div>
        <button className="button" onClick={()=>{}}>Delete</button>
      </div>
      </div>


      <div key={oneClub.id} id="clubmap-card">
        <div id="linkeable-detail">
          <div id="img-header">
            <img id="clubmap-image" src={oneClub.image} alt={oneClub.name} />
            <h2>{oneClub.name}</h2>
          </div>
          <div></div>
        </div>
        <div id="clubcard-container">
          <div id="clubcard-details">
            <h2>Details:</h2>
            {oneClub.genre.map((oneGenre, index) => (
              <label id="label" key={index}>
                {oneGenre}
              </label>
            ))}
            <p>Capacity: {oneClub.capacity}</p>
            <p>
              Description: <br /> {oneClub.description}
            </p>
            <p>
              <a href={oneClub.src.ra_guide} target="_blank">
                Link to resident advisor
              </a>
            </p>
          </div>
          <div id="clubcard-address">
            <div id="clubcard-address-instruction">
              <h3>Address:</h3>
              <br />
              <p>{oneClub.address.street}</p>
              <p>
                {oneClub.address.zip}, {oneClub.address.city}
              </p>
            </div>
            <div id="iframe">
              <iframe src={oneClub.src.iframe} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClubCard;
