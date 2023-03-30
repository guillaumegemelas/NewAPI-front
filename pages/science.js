import React from "react";
import Link from "next/link";

//import pour key unique
import { v4 as uuidv4 } from "uuid";

export default function science(props) {
  console.log(props, "log de props----sciences---");
  return (
    <div className="container px-3 pt-5 ">
      <h2 className="text-center fw-bolder my-2">Actualités Sciences</h2>
      <div className="row mt-5">
        {props.data.articles.map((item) => (
          <div className="col-12 col-lg-4" key={uuidv4()}>
            <div className="card shadow mb-4 ">
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{ height: 220 }}
              >
                <div>
                  <h5 className="card-title my-2">{item.title}</h5>
                  <h6 className="card-subtitle my-3 text-black-50 ">
                    {item.author} - {item.publishedAt.slice(0, 10)}
                  </h6>
                </div>
                <div>
                  <Link
                    legacyBehavior
                    className="ml-auto card-link"
                    href={item.url}
                  >
                    {/* text-decoration none pour enlever le souligné du lien */}
                    <a className="ml-auto text-decoration-none">voir plus</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch("http://localhost:3000/getnewsscience");

  const data = await result.json();

  //data renvoie bien un objet avec un tableau d'articles
  console.log(data);

  return { props: { data } };
}
