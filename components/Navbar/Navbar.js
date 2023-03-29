import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid justify-content-center">
        <Link legacyBehavior href="/">
          <a className="navbar-brand mx-4">A la une</a>
        </Link>
        <p className="navbar-brand mx-4">test1</p>
        <p className="navbar-brand mx-4">test2</p>
      </div>
    </nav>
  );
}
