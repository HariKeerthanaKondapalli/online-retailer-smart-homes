const initialState = {
  users: [
    {
      id: "c1",
      name: "Abhi",
      type: "store-manager",
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
