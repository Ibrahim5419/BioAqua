import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div class="d-flex flex-column justify-content-center align-items-center mt-4">
      <h1 class="mb-4">Welcome {loggedInUser}</h1>
      <button class="btn btn-primary mb-3" onClick={handleLogout}>
        Logout
      </button>
      <ToastContainer />
    </div>
  );
}

export default Home;
