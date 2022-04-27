import React from "react";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Activities from "../Activities/Activities";
import "./Home.css";

const Home = () => {
  return (
    <div className="container home-container">
      <PageTitle title="Home"></PageTitle>
      <Activities></Activities>
    </div>
  );
};

export default Home;
