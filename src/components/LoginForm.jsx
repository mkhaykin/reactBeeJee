import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "./api";

export default function LoginForm() {
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    fetchAPI(
      "/token",
      "POST",
      {
        user_name: user_name,
        password: password,
      },
      (responseData) => {
        const token = responseData["access-token"];
        localStorage.setItem("access-token", token);
        localStorage.setItem("user-name", user_name);
        localStorage.setItem("is-autorized", true);
        navigate("/");
      },
      (e) => {
        if (e.status === 401) {
          alert("Не верные учетные данные ...");
        } else {
          alert("Что-то пошло не так ... попробуйте позже.");
        }
      }
    )
  }

  return (
    <div className="content-section">
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <legend className="border-bottom mb-4">Log In</legend>
          <div className="form-group">
            <label className="form-control-label" htmlFor="user_name">
              User name
            </label>

            <input
              className="form-control form-control-lg"
              id="user_name"
              name="user_name"
              required
              type="text"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-control-label" htmlFor="password">
              Password
            </label>

            <input
              className="form-control form-control-lg"
              id="password"
              name="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </fieldset>
        <div className="form-group">
          <button className="btn btn-outline-info" type="Submit">
            Login
          </button>
          <input
            type="button"
            className="btn btn-outline-info"
            onClick={() => navigate(-1)}
            value="Go Back"
          />
        </div>
      </form>
    </div>
  );
}
