import React from "react";
import Link from "next/link";

import Image from "next/image";
import pic from "../../public/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary ">
      <div className="container-fluid justify-content-center">
        <Image src={pic} style={{ width: "130px", height: "40px" }} alt="pic" />
        <Link legacyBehavior href="/">
          <a className="navbar-brand mx-4">A la une</a>
        </Link>
        <Link legacyBehavior href="/business">
          <a className="navbar-brand ative mx-4">Business</a>
        </Link>
        <Link legacyBehavior href="/">
          <a className="navbar-brand mx-4">Sciences</a>
        </Link>
      </div>
    </nav>
  );
}
