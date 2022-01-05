import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Pshop from "./Pshop/Pshop";
import axios from "axios";

export default function Pshops() {
  const [pshops, setPshops] = useState([]);

  useEffect(() => {
    axios
      .get("/shop")
      .then((Response) => {
        setPshops(Response.data);
      })
      .catch((error) => console.log(error));
  }, [pshops]);
  //   console.log(pshops);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Pshop
        PshopsObj={pshops.filter((pshop) => pshop.shopType === "plumbing")}
      />
    </>
  );
}
