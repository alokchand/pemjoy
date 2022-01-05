import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import PEM from "./PEM/PEM";
import axios from "axios";
import { getDistance } from "geolib";

export default function PEMs({ customer }) {
  // console.log(customer.latitude);
  const [mainPems, setMainPems] = useState([]);
  const [pems, setpems] = useState([]);
  const a = 1;
  useEffect(() => {
    axios
      .get("/pem")
      .then((Response) => {
        setMainPems(Response.data);
        setpems(Response.data);
        console.log("a");
      })
      .catch((error) => console.log(error));
  }, [a]);

  // -----------------------------------------DISTANCE CALCULATION------------------------------------------------
  // console.log(
  pems.map(
    (pem) =>
      (pem.distance =
        getDistance(
          { latitude: pem.latitude, longitude: pem.longitude },
          { latitude: customer.latitude, longitude: customer.longitude }
        ) / 1000)
  );
  // );
  // ----------------------------------------SORTING-----------------------------------------------------

  function compareDistance(a, b) {
    if (a.distance < b.distance) {
      return -1;
    }
    if (a.distance > b.distance) {
      return 1;
    }
    return 0;
  }

  var sortWorkersBydistance = () => {
    pems.sort(compareDistance);
  };
  // --------------------------------------------FILTERING---------------------------------------------------

  return (
    <>
      <Navbar />
      <br />
      <br />
      <PEM
        workers={pems}
        sortWorkersBydistance={sortWorkersBydistance}
        setpems={setpems}
        mainPems={mainPems}
      />
    </>
  );
}
