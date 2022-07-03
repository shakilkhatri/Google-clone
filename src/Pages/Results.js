import React from "react";
import Header2 from "../Components/Header2";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import "./Results.css";

const Results = ({ Term, setTerm, data, setData }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden">
        <Header2 Term={Term} setTerm={setTerm} data={data} setData={setData} />
      </div>

      <section className="ResultsPageBody">
        <div>
          About {data?.searchInformation.formattedTotalResults} results (
          {data?.searchInformation.formattedSearchTime + " "}
          seconds)
        </div>
        <section>
          {data?.items.map((item) => (
            <div className="resultGroup">
              <a href={item.link} className="displayTitle" key={Math.random()}>
                <h2 className="title">{item.title}</h2>
              </a>
              <a href={item.link} className="displayLink" key={Math.random()}>
                {item.displayLink}
              </a>
              <p className="description">{item.snippet}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Results;
