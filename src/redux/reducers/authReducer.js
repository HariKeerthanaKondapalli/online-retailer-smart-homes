const initialState = {
  loggedInUserId: "c1",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loggedInUser: action.payload };
    case "LOGOUT":
      return { ...state, loggedInUser: null };
    default:
      return state;
  }
};

export default authReducer;
