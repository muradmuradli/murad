import React, { useState } from "react";
import "../css/allscientists.css";
import bertrand from "../images/Bertnard-Russel.jpg";
import albert from "../images/Albert.webp";
import { useDispatch, useSelector } from "react-redux";
import { getAllScientists } from "../features/scientistActions";
import { setScientists } from "../features/scientistSlice";

const AllScientists = () => {

  const dispatch = useDispatch();
  const scientists = useSelector((state) => state.scientist.scientists);

  console.log(scientists);

  const getScientists = async () => {
    const scientists = await getAllScientists();
    dispatch(setScientists(scientists));
  }

  return (
    <div className="science-container">
      <div className="science-components">
        <div className="science-up-components">
          <input
            style={{ borderBottom: "2px solid #3498db" }}
            type="text"
            placeholder="Name of scientist"
          />
          <input
            style={{ borderBottom: "2px solid #3498db" }}
            type="text"
            placeholder="Category"
          />
        </div>
        <div className="science-main-container">
          <div className="science-main-components">
            {scientists?.map((scientist, index) => (
              <div className="recom-main" key={index}>
                <div className="recom-left">
                  <img src={scientist.imageUrl} alt="Einstein"></img>
                  <p style={{ color: "black" }} className="albert">
                    {scientist.name}
                  </p>
                  <p>{scientist.field}</p>
                  <p>Press the button to start to read</p>
                  <div className="button">
                    <button className="science-button">About</button>
                  </div>
                  <div className="famous-quote">
                    <div className="famous-quote-text">
                      <p
                        style={{
                          fontFamily: "Dancing Script, cursive",
                          color: "black",
                          fontSize: "23px",
                        }}
                      >
                        {scientist.biography}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="recom-right">
                  <div className="title">
                    <h1 style={{ color: "black" }}>More</h1>
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllScientists;
