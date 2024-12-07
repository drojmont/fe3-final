const funReducer = (state, action) => {
  switch (action.type) {
    case "DATAUPDATE":
      return { ...state, data: action.payload };

    case "FAVS":
      localStorage.setItem(
        action.payload[0],
        JSON.stringify(action.payload[1])
      );
      return {
        ...state,
        favs: state.favs.set(action.payload[0], action.payload[1]),
      };

    case "DETAILS":
      return { ...state, detailsid: action.payload };

    default:
      state;
  }
};

export default funReducer;
