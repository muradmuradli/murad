import React from "react";
import einsteinphoto from "../images/Albert-Einstein.jpg";
import "../css/recommended.css";
import { Link } from "react-router-dom";

const Recommended = () => {
  return (
    <div className="recom-container">
      <div className="recom-components">
        <div className="recom-up">
          <div className="recom-up-science">
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "46px",
                  fontFamily: "Roboto Serif, serif",
                  color: "black",
                }}
              >
                Science
              </span>{" "}
              Today
            </p>
          </div>
          <div className="sign-1">
            <Link to="/signup">
              <button className="button-g">Sign up</button>
            </Link>
            <Link to="/signin">
              <button className="button-i">Sign in</button>
            </Link>
          </div>
        </div>
        <div className="recom-main">
          <div className="recom-left">
            <img src={einsteinphoto}></img>
            <p style={{ color: "black" }} className="albert">
              Albert Einstein
            </p>
            <p>Theoretical Physicist</p>
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
                  “Everybody is a genius. But if you judge a fish by its ability
                  to climb a tree, it will live its whole life believing that it
                  is stupid.”
                </p>
              </div>
            </div>
          </div>
          <div className="recom-right">
            <div className="title">
              <h1 style={{color:"black"}}>More</h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
