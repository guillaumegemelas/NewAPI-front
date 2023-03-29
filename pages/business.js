import React from "react";
import Link from "next/link";

export default function business(props) {
  console.log(props);
  return <div>business</div>;
}

export async function getStaticProps() {
  const result = await fetch("http://localhost:3000/getnewsbusiness");

  const data = await result.json();

  //data renvoie bien un objet avec un tableau d'articles
  console.log(data);

  return { props: { data } };
}
