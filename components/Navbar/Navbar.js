import React from "react";
import Link from "next/link";

import Image from "next/image";
import pic from "../../public/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary d-flex">
      {/* container fluid pour occuper tout l'espace width */}
      <div className="container-fluid justify-content-center">
        <div>
          <Link legacyBehavior href="https://newsapi.org">
            <a className="navbar-brand mx-4 my-2">
              <Image
                src={pic}
                style={{ width: "130px", height: "40px" }}
                alt="pic"
              />
            </a>
          </Link>
        </div>
        <div className="d-flex align-item-center justify-content-center">
          <Link legacyBehavior href="/">
            <a className="navbar-brand mx-4 my-2">A la une</a>
          </Link>

          <Link legacyBehavior href="/business">
            <a className="navbar-brand ative mx-4 my-2">Business</a>
          </Link>

          <Link legacyBehavior href="/sport">
            <a className="navbar-brand mx-4 my-2">Sport</a>
          </Link>

          {/* test dropdown----------------------------------- */}
          {/* ajouter sciences, tech, santé... */}
          <div className="navbar-brand dropdown mx-4 my-2">
            <a
              className="nav-link dropdown-toggle text-light"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              plus
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="/science">
                  Sciences
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/divertissement">
                  Divertissement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/sante">
                  Santé
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/tech">
                  Tech
                </a>
              </li>
            </ul>
          </div>
          {/* fin test dropdown----------------------------------- */}
        </div>
      </div>
    </nav>
  );
}
