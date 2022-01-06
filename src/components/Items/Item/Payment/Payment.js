import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
// ------------------------------------STYLING---------------------------------------------
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm({ amount, itemStatus }) {
  const [payed, setPayed] = useState(0);
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [items, setItems] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setItems(itemStatus.filter((item) => item.status === "ADDED"));
    setPayed(amount);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          amount: amount,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <>
          <h3> &nbsp;&nbsp;&nbsp;Enter details here</h3>
          <br />
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            &nbsp;&nbsp;&nbsp;
            <button className="btn btn-success">Pay</button>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        <div>
          <center>
            <h1 style={{ color: "green" }}>
              <b>Payment Successful</b> <i class="far fa-check-circle"></i>
            </h1>
          </center>
          <center>
            <h3>
              <b>
                amount Paid : <i class="fas fa-rupee-sign"></i> {payed} /-
              </b>
            </h3>
          </center>

          <center>
            <h3>
              <b>Items Purchased:</b>
            </h3>
          </center>
          <center>
            <h3>
              {items.map((item) => (
                <>
                  {item.name} {"  ,  "}
                </>
              ))}
            </h3>
          </center>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
    </>
  );
}
