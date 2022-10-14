export function login(state, action) {
  state.isLoggedIn = true;
}
export function logout(state, action) {
  state.isLoggedIn = false;
}
