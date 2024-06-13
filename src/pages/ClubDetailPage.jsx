import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import "../stylesheet/ClubDetailPage.css";

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
    return <p>loading</p>;
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
    <div id="club-detail-container">
      <div id="c-d-top">
        <div id="c-d-infos">
          <div>
            <h2>{oneClub.name}</h2>
            <div id="genres">
              {oneClub.genre.map((oneGenre, index) => (
                <div id="label" key={index}>
                  {oneGenre}
                </div>
              ))}
            </div>
            <div id="c-d-description">{oneClub.description}</div>
          </div>
          <div id="button-container">
            <div>
              <a href={oneClub.src.ra_guide} target="_blank">
                <button id="ra-button">
                  <b>RA Guide</b>
                </button>
              </a>
            </div>
            <div>
              <button id="edit-button" onClick={handleDelete}>
                <b>Edit</b>
              </button>
              <Link to={`/edit-club/${clubId}`}>
                <button id="delete-button" onClick={handleDelete}>
                  <b>Delete</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div id="c-d-img">
          <img src={oneClub.image} alt={oneClub.name} />
        </div>
      </div>
      <div id="c-d-bottom">
        <div id="c-d-comments">
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
              Please <Link to="/login">login</Link> or sign up to leave a
              comment
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

        <iframe id="c-d-map" src={oneClub.src.iframe} />
      </div>
    </div>
  );
};

export default ClubDetailPage;
