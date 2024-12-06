const funReducer = (state, action) => {
  switch (action.type) {
    case "DATAUPDATE":
      return { ...state, data: action.payload };
    default:
      state;
  }
};

export default funReducer;
