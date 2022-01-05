import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div>
        <footer className="text-white text-center text-lg-start bg-primary">
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row mt-4">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>
                <p>
                  Pem-joy is a wonderful service for the people who are in need
                  of plumbers, electricens and mechanice. It also provides good
                  oppurtinaty for workers to earn money.
                </p>
                <p>
                  here shops also register and sell there items so it helps in
                  finding local shop which contain your need.
                </p>
                <div className="mt-4">
                  {/* Facebook */}
                  <a
                    type="button"
                    className="btn btn-floating btn-primary btn-lg"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  {/* Dribbble */}
                  <a
                    type="button"
                    className="btn btn-floating btn-primary btn-lg"
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  {/* Twitter */}
                  <a
                    type="button"
                    className="btn btn-floating btn-primary btn-lg"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  {/* Google + */}
                  <a
                    type="button"
                    className="btn btn-floating btn-primary btn-lg"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  {/* Linkedin */}
                </div>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <br />
                <br />
                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home" />
                    </span>
                    <span className="ms-2">
                      Andhra Pradesh, Vizag 530003, India
                    </span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope" />
                    </span>
                    <span className="ms-2">help@pemjoy.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone" />
                    </span>
                    <span className="ms-2">+ 73 370 074 35</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-print" />
                    </span>
                    <span className="ms-2">+ 93 901 59 088</span>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>
                <table className="table text-center text-white">
                  <tbody className="font-weight-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 12pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright:
            <Link className="text-white" to="/">
              pemjoy.com
            </Link>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
}
