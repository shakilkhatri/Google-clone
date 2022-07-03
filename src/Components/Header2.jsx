import React, { useState, useEffect } from "react";
import "./Header2.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import response from "../response";
import API_KEY from "../keys";

const CONTEXT_KEY = "6bf49df60729432e3";

const Header2 = ({ Term, setTerm, data, setData }) => {
  const navigate = useNavigate();
  let res;
  let done = false;

  useEffect(() => {
    // console.log(data, setData);
  }, [data]);

  const SearchButtonPress = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${Term}`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          res = result;
          setData(res);
          console.log(res.items);
        })
        .catch((error) => console.error(error));
    };

    // fetchData();

    //LOCAL RESPONSE DATA:
    setData(response);
    console.log(data);

    // console.log("search");
    // navigate("Results");
  };

  return (
    <form className="main2">
      <div>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="img2"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="inputBox">
        <SearchIcon className="icn" />
        <input
          type="text"
          name="input"
          className="input"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <MicIcon className="icn" />
      </div>

      <div className="buttonBox2">
        <Button type="submit" variant="outlined" onClick={SearchButtonPress}>
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default Header2;
