import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import "../stylesheet/EditClub.css";

const EditClub = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState([]);
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [ra_guide, setRaguide] = useState("");
  const [iframe, setIframe] = useState("");
  const nav = useNavigate();

  const updatedClub = {
    name,
    image,
    description,
    address: { street, zip: zipcode, city },
    genre: genre.map(g => g.trim()).filter(g => g != ''),
    capacity,
    src: { ra_guide, iframe },
  };

  const { clubId } = useParams();

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
        setName(data.name);
        setImage(data.image);
        setDescription(data.description);
        setGenre(data.genre);
        setStreet(data.address.street);
        setZipcode(data.address.zip);
        setCity(data.address.city);
        setCapacity(data.capacity);
        setRaguide(data.src.ra_guide);
        setIframe(data.src.iframe);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [clubId]);

  const handleEditClub = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `${API_URL}/clubs/${clubId}`,
        updatedClub
      );
      console.log("axios response patch", response);
    } catch (error) {
      console.log(error);
    }
    nav(`/club-detail/${clubId}`);
  };

  return (
    <div>
      <form id="edit-form" onSubmit={handleEditClub}>
        <label>
          Name:
          <input
            value={name}
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </label>

        <label>
          Image:
          <input
            value={image}
            type="text"
            onChange={(event) => {
              setImage(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Description:
          <input
            value={description}
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Genre:
          <input
            value={genre}
            type="text"
            onChange={(event) => setGenre(event.target.value.split(','))}
          ></input>
        </label>
        <label>
          Address:
          <input
            value={street}
            type="text"
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          ></input>
          <input
            value={zipcode}
            type="text"
            onChange={(event) => {
              setZipcode(event.target.value);
            }}
          ></input>
          <input
            value={city}
            type="text"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          ></input>
        </label>

        <label>
          Capacity:
          <input
            value={capacity}
            type="number"
            onChange={(event) => {
              setCapacity(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Ra-Guide:
          <input
            value={ra_guide}
            type="text"
            onChange={(event) => {
              setRaguide(event.target.value);
            }}
          ></input>
        </label>
        <label>
          I-frame:
          <input
            value={iframe}
            type="text"
            onChange={(event) => {
              setIframe(event.target.value);
            }}
          ></input>
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
export default EditClub;
