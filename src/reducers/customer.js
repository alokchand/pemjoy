const reducers = (customerDetails = [], action) => {
  switch (action.type) {
    case "DELETE":
      return customerDetails.filter(
        (customer) => customer._id !== action.payload
      );
    case "UPDATE":
      return customerDetails.map((customer) =>
        customer._id === action.payload._id ? action.payload : customer
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...customerDetails, action.payload];
    default:
      return customerDetails;
  }
};
export default reducers;
