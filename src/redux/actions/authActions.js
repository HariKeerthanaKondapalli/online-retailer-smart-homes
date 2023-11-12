const login = (userId) => ({
  type: "LOGIN",
  payload: userId,
});

const register = (userId) => ({
  type: "REGISTER",
  payload: userId,
});

const logout = () => ({
  type: "LOGOUT",
  payload: {},
});



export { login, logout , register};
