import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Mshop from "./Mshop/Mshop";
import axios from "axios";

export default function Mshops() {
  const [mshops, setMshops] = useState([]);

  useEffect(() => {
    axios
      .get("/shop")
      .then((Response) => {
        setMshops(Response.data);
      })
      .catch((error) => console.log(error));
  }, [mshops]);
  //   console.log(mshops);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Mshop
        MshopsObj={mshops.filter((mshop) => mshop.shopType === "mechanic")}
      />
    </>
  );
}
