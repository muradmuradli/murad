import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/firstpage.css";

const FirstPage = () => {
  return (
    <div className="firstpage-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-page">
        <div className="main-page-components">
          <div className="main-left">
            <p className="text-left">
              <span style={{ color: "black", fontWeight: "bold" }}>
                Welcome
              </span>
              , i see you love the{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                Science{" "}
              </span>
              However, knowing their names is not enough; understanding how they
              became so successful is essential. One person can change the
              world, like <span style={{ color: "blue" }}>Einstein</span>. If
              you see this spark in yourself, sign up and keep reading.
            </p>
            <div className="buttons">
              <Link to="/signup">
                <button className="button-1">Sign Up</button>
              </Link>
              <Link to="/signin">
                <button className="button-2">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
