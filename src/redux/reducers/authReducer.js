const initialState = {
  loggedInUserId: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loggedInUserId: action.payload };
    case "LOGOUT":
      return { ...state, loggedInUserId: null };
    default:
      return state;
  }
};

export default authReducer;
