import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/footer";
const laout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">回到首頁</Link>
          </li>
          <li>
            <Link to="about">關於這個網站</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default laout;
