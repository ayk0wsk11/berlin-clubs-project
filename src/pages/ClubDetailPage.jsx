import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../config";

const ClubDetailPage = ({ currentUser }) => {
  const [oneClub, setOneClub] = useState(null);
  const [newComment, setNewComment] = useState("");
  const { clubId } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios
          .get(`${API_URL}/clubs/${clubId}`)
          .catch((error) => {
            if (error.response.status === 404) {
              nav("/not-found");
              throw `Club with ID ${clubId} does not exist`;
            }
          });
        setOneClub(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [clubId]);

  if (!oneClub) {
    return <p>Loading...</p>;
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`${API_URL}/clubs/${clubId}`);
      console.log("Deleted", response);
    } catch (error) {
      console.log(error);
    }
    nav("/clubs");
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const newCommentObject = {
      text: newComment,
      user: currentUser.username,
    };
    const updatedComments = Array.isArray(oneClub.comments)
      ? [...oneClub.comments, newCommentObject]
      : [newCommentObject];
    try {
      const response = await axios.patch(`${API_URL}/clubs/${clubId}`, {
        comments: updatedComments,
      });
      setOneClub({ ...oneClub, comments: updatedComments });
      setNewComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="clubmap-container">
      <div id="btn-container">
        <div>
          <Link to={`/edit-club/${clubId}`}>
            <button className="button">Edit</button>
          </Link>
        </div>
        <div>
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
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

          <div>
            <h3>Comments:</h3>
            {currentUser ? (
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment"
                  required
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <span id="no-login">
                Please <Link to="/login">login</Link> or sign up to leave a comment
              </span>
            )}
            <div>
              {Array.isArray(oneClub.comments)
                ? oneClub.comments.map((comment, index) => (
                    <div key={index}>
                      <p>
                        <strong>{comment.user}:</strong> {comment.text}
                      </p>
                    </div>
                  ))
                : oneClub.comments && (
                    <div>
                      <p>
                        <strong>{oneClub.comments.user}:</strong>{" "}
                        {oneClub.comments.text}
                      </p>
                    </div>
                  )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetailPage;
