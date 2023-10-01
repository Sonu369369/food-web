import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";



export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "white",
        width: "100%",
        padding: "8px 0px",
        height: "66px",
        position: "fixed",
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        color: "#D70F64",
        fontFamily: `"museo-sans", sans-serif`,
        fontSize: "16px",
        fontWeight: "lighter",
        boxShadow: "0 2px 16px 0 rgb(0 0 0 / 8%)",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <img
            className="logoimg"

            alt="Food Web"
          />
        </div>

        <div className="side_nav">
          <div style={{ width: "89px" }}>
            <Link
              style={{
                color: "#D70F64",
                fontWeight: "lighter",
                textDecoration: "none",
              }}
            >
              ABOUT
            </Link>
          </div>
          <div style={{ width: "105px" }}>
            <Link style={{ color: "#D70F64" }}>Location</Link>
          </div>
          <div style={{ width: "81px" }}>
            <Link style={{ color: "#D70F64" }}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
