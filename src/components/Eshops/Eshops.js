import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Eshop from "./Eshop/Eshop";
import axios from "axios";

export default function Eshops() {
  const [eshops, setEshops] = useState([]);

  useEffect(() => {
    axios
      .get("/shop")
      .then((Response) => {
        setEshops(Response.data);
      })
      .catch((error) => console.log(error));
  }, [eshops]);
  //   console.log(mshops);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Eshop
        EshopsObj={eshops.filter((eshop) => eshop.shopType === "electric")}
      />
    </>
  );
}
