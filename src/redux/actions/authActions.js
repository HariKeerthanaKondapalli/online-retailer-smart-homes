const login = (userId) => ({
  type: "LOGIN",
  payload: userId,
});

const logout = () => ({
  type: "LOGOUT",
  payload: {},
});

export { login, logout };
