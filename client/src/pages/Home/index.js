import React from "react";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

const Home = () => {
  return (
    <div>
      <Header login={true} />
      <div className="container">
        <Tabs />
      </div>
    </div>
  );
};

export default Home;
