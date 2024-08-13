import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Info from "./Info";

const Landing = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Extract token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");

    // If token exists in the URL, store it in localStorage
    if (urlToken) {
      localStorage.setItem("token", urlToken);
      console.log("Token found and stored:", urlToken);
      setToken(urlToken);
    } else {
      // If no token found, check localStorage
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        console.log("Token found in localStorage:", storedToken);
        setToken(storedToken);
      } else {
        console.log("No token found");
        setToken(null);
      }
    }
  }, []);

  return <div>{token
     ? 
      <div>
        Landing !!!!  Now let's go to Info Page 
        <Link to="/info">Info Page</Link>
      </div> 
     : 
      <div>Not Authorized</div>}</div>;
};

export default Landing;
