import React from "react";
import "./style.css";
export default function Features() {
  return (
    <>
      {/* ------------------------------------------------SLIDER------------------------------------------------------------- */}

      <div
        id="carouselExampleCaptions"
        interval="100"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height="700"
              width="100"
              src="https://media.istockphoto.com/photos/electrician-working-at-electric-panel-picture-id1165561132?k=20&m=1165561132&s=612x612&w=0&h=b0cFzLEoJWuqxIPrws2eMOS4GwxZFKka5efVf8KbXfk="
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <b>Find the worker you need</b>{" "}
              </h1>
              <p>
                <b>
                  Pem-joy is a wonderful service for the people who are in need
                  of plumbers, electricens and mechanice. It also provides good
                  oppurtinaty for workers to earn money here shops also register
                  and sell there items so it helps in finding local shop which
                  contain your need.
                </b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height="700"
              width="100"
              src="https://auto.edu/wp-content/uploads/ATI-76.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <b>Save Time and Money</b>
              </h1>
              <p>
                <b>
                  We provide many plumbers, Electricians, mechanics so you can
                  find the correct worker and the nearest worker who will finish
                  the repair work this is extreamly healphful when you are stuck
                  on road due to some repair in car then you can use our app and
                  find the nearest mechanic. Like whise you can contact the
                  reqired worker for repairs which saves lots of time and money.
                </b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height="700"
              width="100"
              src="https://st2.depositphotos.com/1001414/5651/i/950/depositphotos_56512865-stock-photo-plumbing-and-tools.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <b>Buy products Online</b>
              </h1>
              <p className="textColor">
                <b>
                  In Pem-joy we also provide shops for you to pruchase the
                  things required for the repair. we mainly provide plumbing,
                  electrical, and mechinical things so that you dont need to
                  find for shops and buy through our website
                </b>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ------------------------------------------------HEADING------------------------------------------------------------ */}
      {/* <h1
        style={{
          "font-family": "Copperplate",
          "background-color": "#b3b3ff",
          "text-align": "center;",
        }}
      >
        PEM JOY
      </h1> */}
      {/* ----------------------------------------------------LAYER 1----------------------------------------------------------------- */}

      {/* <div className="container">
        <p className="intro">
          Pem-joy is a wonderful service for the people who are in need of
          plumbers, electricens and mechanice. It also provides good oppurtinaty
          for workers to earn money here shops also register and sell there
          items so it helps in finding local shop which contain your need.
        </p>
      </div>
      <div className="row">
        <div className="column">
          <img
            src="https://media.istockphoto.com/photos/electrician-working-at-electric-panel-picture-id1165561132?k=20&m=1165561132&s=612x612&w=0&h=b0cFzLEoJWuqxIPrws2eMOS4GwxZFKka5efVf8KbXfk="
            className="img-fluid make-circle"
            alt="..."
          />
        </div>
        <div className="column">
          <p className="brief">
            <br />
            <br />
            <br />
            We provide many plumbers, Electricians, mechanics so you can find
            the correct worker and the nearest worker who will finish the repair
            work this is extreamly healphful when you are stuck on road due to
            some repair in car then you can use our app and find the nearest
            mechanic. Like whise you can contact the reqired worker for repairs
            which saves lots of time and money.
          </p>
        </div>
        <div className="column">
          <img
            src="https://auto.edu/wp-content/uploads/ATI-76.png"
            className="img-fluid make-circle"
            alt="..."
          />
        </div>
      </div> */}

      {/* ------------------------------------------------------LAYER 2---------------------------------------------------------------------- */}
      {/* <div className="container">
        <p className="intro">
          In Pem-joy we also provide shops for you to pruchase the things
          required for the repair. we mainly provide plumbing, electrical, and
          mechinical things so that you dont need to find for shops and buy
          through our website
        </p>
      </div>

      <div className="row">
        <div className="column">
          <img
            src="https://us.123rf.com/450wm/maxriesgo/maxriesgo1501/maxriesgo150100013/35173504-brunette-woman-looking-faucets-at-plumbing-store.jpg?ver=6"
            className="img-fluid make-circle"
            alt="..."
          />
        </div>
        <div className="column">
          <p className="brief">
            <br />
            <br />
            <br />
            we provide many shops with contain all the necessary items in
            plumbing, mechanical and electrical appliances, this saves lots of
            time for you. as all the shops are local you can select the nearest
            shop and but the item or you can check weather the item your item is
            in that shop or not and but it this helps in avoiding going to all
            the shops to find the correct.
          </p>
        </div>
        <div className="column">
          <img
            src="https://image.shutterstock.com/image-photo/electrician-equipment-on-gray-background-260nw-1560597293.jpg "
            className="img-fluid make-circle"
            alt="..."
          />
        </div>
      </div> */}
    </>
  );
}
