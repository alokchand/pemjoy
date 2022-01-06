const reducers = (shopDetails = [], action) => {
  switch (action.type) {
    case "DELETE":
      return shopDetails.filter((shop) => shop._id !== action.payload);
    case "UPDATE":
      return shopDetails.map((shop) =>
        shop._id === action.payload._id ? action.payload : shop
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...shopDetails, action.payload];
    default:
      return shopDetails;
  }
};
export default reducers;
