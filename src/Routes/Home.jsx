import "../styles/Home.css";
import "../components/home";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeTopCarousel from "../components/Homepage/HomeTopCarousal";




export default function Home() {
  const [backImg, setbackImg] = useState(
    // "https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-model-opt-scaled.jpg"
  );

  useEffect(() => {
    setTimeout(() => {
      if (
        backImg ==
        "https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-model1-opt-scaled.jpg"
      ) {
        setbackImg(
          "https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-model-opt-scaled.jpg"
        );
        // console.log(backImg);
      } else {
        setbackImg(
          "https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-model1-opt-scaled.jpg"
        );
        // console.log(backImg);
      }
    }, 4000);
  }, [backImg]);

  return (
    <>
      <Navbar />

      <div style={{ width: "100%", height: "10px" }}></div>
      <div className="main">
        <div
          className="div1"
          style={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: "359px", textAlign: "center" }}>
            <div
              style={{
                width: "100%",
                height: "92px",
                textAlign: "center",
                fontSize: "42px",
                color: "#fff",
              }}
            >
              <h1 style={{ fontSize: "42px" }}>BRINGING GOOD FOOD INTO YOUR </h1>
              <h1 style={{ fontSize: "42px", lineHeight: "0.8" }}>EVERYDAY</h1>
            </div>

          </div>
        </div>

        <div
          className="div2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "40px"
          }}
        >
          <div style={{ width: "100%", height: "50px", marginTop: "200px" }}>
            <h2 style={{ fontSize: "30px", color: "#D70F64", letterSpacing: "1px" }}>ABOUT US</h2>
          </div>

          <div
            style={{
              width: "55%",
              height: "86px",
              fontSize: "18px",
              color: "#333333",
              marginTop: "20px",
              fontWeight: "lighter",
            }}
          >
            <p>
              For us, it's not just about bringing you good food from your
              favourite restaurants. It's about making a connection, which is
              why we sit down with the chefs, dreaming up menus that will arrive
              fresh and full of flavour. Try us!
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <button
              style={{
                width: "291px",
                height: "48px",
                fontSize: "14px",
                backgroundColor: "#D70F64",
                color: "#fff",
                border: "none",
              }}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        <div
          className="parallax div3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", height: "50px", paddingTop: "230px" }}>
            <h2 style={{ fontSize: "30px", color: "#D70F64", textShadow: "0 2px 0 rgb(0 0 0 / 12%)", letterSpacing: "1px" }}>CAREERS</h2>
          </div>

          <div
            style={{
              width: "55%",
              height: "86px",
              fontSize: "18px",
              color: "#333333",
              marginTop: "50px",
              fontWeight: "lighter",
            }}
          >
            <p style={{ color: "#fff" }}>
              Hungry to make a difference? There's always room at our table.
              Pull up a seat.
            </p>
          </div>

          <div>
            <button
              style={{
                width: "291px",
                height: "48px",
                marginTop: "20px",
                fontSize: "14px",
                backgroundColor: "#D70F64",
                color: "#fff",
                border: "none",
              }}
            >
              JOIN US
            </button>
          </div>
        </div>
        <div
          className="parallax_2 div4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", height: "50px", paddingTop: "230px" }}>
            <h2
              style={{
                fontSize: "30px",
                color: "#D70F64",
                marginBottom: "10px", textShadow: "0 2px 0 rgb(0 0 0 / 12%)", letterSpacing: "1px"
              }}
            >
              PRESS
            </h2>
          </div>

          <div
            style={{
              width: "55%",
              height: "86px",
              fontSize: "18px",
              color: "#333333",
              marginTop: "50px",
              fontWeight: "lighter",
            }}
          >
            <p style={{ color: "#fff" }}>
              A food website is an online platform dedicated to all things culinary. It serves as a virtual hub for recipes, cooking tips, and gastronomic inspiration.
              Users can explore a diverse range of dishes from various cuisines, catering to different dietary preferences and skill levels.
              These websites often feature visually appealing imagery, detailed instructions, and sometimes even video tutorials to guide users through the cooking process.
            </p>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                width: "291px",
                height: "48px",
                fontSize: "14px",
                backgroundColor: "#D70F64",
                color: "#fff",
                border: "none",
              }}
            >
              SEE THE LATEST
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#D70F64",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", height: "50px", paddingTop: "230px" }}>
            <h2 style={{ fontSize: "30px", color: "#FFF", letterSpacing: "1px" }}>CONTACT</h2>
          </div>

          <div
            style={{
              width: "57%",
              height: "86px",
              fontSize: "18px",
              color: "#333333",
              marginTop: "60px",
              fontWeight: "lighter",
            }}
          >
            <p style={{ color: "#fff" }}>
              It's food lovers like you who inspire us to do what we do. Your
              comments, ideas and questions push us to go that extra mile, every
              time. So drop us a line!
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <button
              style={{
                width: "291px",
                height: "48px",
                fontSize: "14px",
                backgroundColor: "#FFF",
                color: "#D70F64",
                border: "none",
              }}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

    </>
  );
}
