import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";
import "../stylesheet/AddClub.css";


const AddClub = () => {
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
  const newClub = {
    name,
    image,
    description,
    address: { street, zip: zipcode, city },
    genre: genre.map(g => g.trim()).filter(g => g != ''),
    capacity,
    src: { ra_guide, iframe },
  };

  const handleAddClub = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/clubs/`, newClub);
      console.log("axios response patch", response);
    } catch (error) {
      console.log(error);
    }
    nav("/clubs");
  };

  return (
    <div>
      <form id="add-form" onSubmit={handleAddClub}>
        <label>
          Name:
          <input
            value={name}
            placeholder="Name"
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
            placeholder="Image URL"
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
            placeholder="Description of the Club"
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
            placeholder="Genres, divided by a 'comma'"
            type="text"
            onChange={(event) => setGenre(event.target.value.split(','))}
          ></input>
        </label>
        <label>
          Address:
          <input
            value={street}
            placeholder="Street"
            type="text"
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          ></input>
          <input
            value={zipcode}
            placeholder="Zipcode"
            type="text"
            onChange={(event) => {
              setZipcode(event.target.value);
            }}
          ></input>
          <input
            value={city}
            placeholder="City"
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
            placeholder="Capacity"
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
            placeholder="Link to Resident Advisor"
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
            placeholder="Iframe URL"
            type="text"
            onChange={(event) => {
              setIframe(event.target.value);
            }}
          ></input>
        </label>
        <button>Add Club</button>
      </form>
    </div>
  );
};
export default AddClub;
