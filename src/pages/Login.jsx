import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const Login = ({ setCurrentUser }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(`${API_URL}/users`);


      const foundUser = data.find((oneUser) => {
        if (oneUser.username.toLowerCase() === username.toLowerCase()) {
          return true;
        }
      });
      if (!foundUser) {
        setError("Password or username do not match. If you haven't signed up, please sign up below");
      } else {
        const doesPasswordMatch = foundUser.password === password;

        if (doesPasswordMatch) {
          setCurrentUser(foundUser);
          nav("/clubs");
        } else {
          setError("Password or username do not match.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button>Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div>
        <h2>No user yet? Sign up here:</h2>

        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </div>
    </>
  );
};
export default Login;
