import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Container(props) {
  return (
    <div>
      <div className="sticky-top">
        {/* fixed top pour fixer la navbar en haut de l'ecran mais pad de margin donc on utilise sticky-top*/}
        <Navbar />
      </div>

      {props.children}

      <div
      //   className="sticky-bottom"
      >
        {/* fixed top pour fixer la navbar en haut de l'ecran mais pad de margin donc on utilise sticky-top*/}
        <Footer />
      </div>
    </div>
  );
}
