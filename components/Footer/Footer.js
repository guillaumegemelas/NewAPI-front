import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBrandsGithub } from "@fortawesome/free-solid-svg-icons"-;

export default function Footer() {
  return (
    <div className="bg-primary text-center text-white " style={{ height: 60 }}>
      <div className="container">
        <section
          className="mb-4 d-flex justify-content-center align-item-center p-2"
          style={{ height: 60 }}
        >
          <div>
            <a className="btn btn-outline text-white btn-floating m-1 ">
              <i></i> Made with NextJs
            </a>
          </div>

          <div>
            <a
              className="btn btn-outline-light btn-floating m-1 rounded-circle"
              href="https://www.linkedin.com/in/guillaume-gemelas"
              role="button"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          <div>
            <a
              className="btn btn-outline-light btn-floating m-1 rounded-circle"
              href="https://github.com/guillaumegemelas"
              role="button"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
