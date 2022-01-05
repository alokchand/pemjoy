import React from "react";
import { Link } from "react-router-dom";

export default function Services({ customerDetails }) {
  // console.log("from services ", customerDetails);
  return (
    <>
      <div className="container mt-5">
        <div className="row g-2">
          <div className="col-md-4">
            <div className="card serviceCard p-3">
              <div className="mt-3">
                {" "}
                <img
                  src="https://p.kindpng.com/picc/s/261-2612352_blue-lightning-bolt-hd-png-download.png"
                  width={30}
                  alt="Electrical Shops"
                />
                <h3 className="mt-3 text-truncate">Electrical Shops</h3>{" "}
                <span className="text justify-content mt-3">
                  Find the nearest electrical shops Near your place
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/Eshops" target="_blank">
                    <button className=" btn btn-danger btn-sm btn-block">
                      Shops
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card serviceCard p-3">
              <div className="mt-3">
                {" "}
                <img
                  src="https://thumbs.dreamstime.com/b/service-tools-red-icon-white-background-gear-wheel-hammer-flat-style-vector-illustration-171175251.jpg"
                  width={30}
                  alt="Mechanic shops"
                />
                <h3 className="mt-3 text-truncate">Mechanic shops</h3>{" "}
                <span className="text justify-content mt-3">
                  Find the nearest Mechanic shops Near your place
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/Mshops" target="_blank">
                    <button className=" btn btn-primary btn-sm btn-block">
                      Shops
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card serviceCard p-3">
              <div className="mt-3">
                {" "}
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/48/35/blue-plumbing-service-icon-vector-8324835.jpg"
                  width={30}
                  alt="Plumbing shops"
                />
                <h3 className="mt-3 text-truncate">Plumbing shops</h3>{" "}
                <span className="text justify-content mt-3">
                  Find the nearest Mechanic shops Near your place
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/Pshops" target="_blank">
                    <button className=" btn btn-secondary btn-sm btn-block">
                      Shops
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card serviceCard p-3">
              <div className="mt-3">
                {" "}
                <img
                  src="https://cdn.imgbin.com/14/22/19/imgbin-construction-worker-laborer-architectural-engineering-construction-foreman-others-YpGXeZ1LNHsLDKc3AUjNGuaTB.jpg"
                  width={30}
                  alt="Find Workers"
                />
                <h3 className="mt-3 text-truncate">Find Workers</h3>{" "}
                <span className="text justify-content mt-3">
                  Find the worker you need to make your work done
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/CustomerSignin" target="_blank">
                    <button className=" btn btn-success btn-sm btn-block">
                      Workers
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card serviceCard p-3">
              <div className="mt-3">
                {" "}
                <img
                  src="https://images.all-free-download.com/images/graphiclarge/blue_shopping_cart_icon_vector_280786.jpg"
                  width={30}
                  alt="Shop Join"
                />
                <h3 className="mt-3 text-truncate">Shop Join</h3>{" "}
                <span className="text justify-content mt-3">
                  Join your shop with us and sell your items online
                </span>
                <br />
                <div className="d-block mt-3">
                  <Link to="/ShopJoin" target="_blank">
                    <button
                      className=" btn btn-warning btn-sm btn-block inlineStyle"
                      data-inline="true"
                    >
                      Add Shop
                    </button>
                  </Link>{" "}
                  {/* </div> */}
                  {/* <div className="d-block mt-3"> */}{" "}
                  <Link to="/ShopSignin" target="_blank">
                    <button
                      className=" btn btn-warning btn-sm btn-block inlineStyle"
                      data-inline="true"
                    >
                      Update Shop
                    </button>
                  </Link>{" "}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card serviceCard p-3">
              <div className="mt-3">
                {" "}
                <img
                  src="https://www.iconbunny.com/icons/media/catalog/product/3/7/370.12-construction-worker-icon-iconbunny.jpg"
                  width={30}
                  alt="Workers Join"
                />
                <h3 className="mt-3 text-truncate">Workers Join</h3>{" "}
                <span className="text justify-content mt-3">
                  workers can Join our website and get work.
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/workerJoin" target="_blank">
                    <button className="btn btn-warning btn-sm btn-block inlineStyle">
                      Join
                    </button>
                  </Link>{" "}
                  {/* <div className="d-block mt-3"> */}
                  {"                           "}
                  <Link to="/WorkerSignin" target="_blank">
                    <button
                      className=" btn btn-warning btn-sm btn-block"
                      data-inline="true"
                    >
                      Update Details
                    </button>
                  </Link>{" "}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
