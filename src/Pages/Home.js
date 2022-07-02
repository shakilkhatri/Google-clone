import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
import "../App.css";

const Home = ({ Term, setTerm, data, setData }) => {
  return (
    <div className="App">
      <Header />
      <Main Term={Term} setTerm={setTerm} data={data} setData={setData} />
      <Footer />
    </div>
  );
};

export default Home;
