import "../stylesheet/AllClubsPage.css";
import { Link } from "react-router-dom";



const ClubCard = ({oneClub}) => {

  
  return (
    <div id="clubmap-container">
       <div key={oneClub.id} id="clubmap-card">
            <Link to={`/club-detail/${oneClub.id}`}>
              <div id="linkeable-detail">
                <img
                  id="clubmap-image"
                  src={oneClub.image}
                  alt={oneClub.name}
                />
                <h2>{oneClub.name}</h2>
              </div>
            </Link>
            <div id="clubcard-container">
              <div id="clubcard-details">
                <h2>Details:</h2>

                <p>Main-genre: {oneClub.genre[0]}</p>
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
  )
}
export default ClubCard