const reducers = (pemDetails = [], action) => {
  switch (action.type) {
    case "DELETE":
      return pemDetails.filter((pem) => pem._id !== action.payload);
    case "UPDATE":
      return pemDetails.map((pem) =>
        pem._id === action.payload._id ? action.payload : pem
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...pemDetails, action.payload];
    default:
      return pemDetails;
  }
};
export default reducers;
