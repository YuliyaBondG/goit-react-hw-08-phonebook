const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectUserEmail = state => state.auth.user.email;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
  selectUserEmail,
};

export default authSelectors;
