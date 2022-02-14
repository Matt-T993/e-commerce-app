import React from "react";
import { Catogories } from "../../myData";
import Card from "../../components/card/Card";
import "./home.css";

const Home = () => {
  return (
    <div classname="container">
      <div className="home-wrapper">
        <div className="grid">
          {Catogories.map((catogory, index) => (
            <Card key={index} title={catogory.title} img={catogory.img}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
