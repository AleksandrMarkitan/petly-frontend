export const selectUserName = state => {
  return state?.auth?.user?.name;
};
export const selectUserEmail = state => {
  return state?.auth?.user?.email;
};
export const selectUserAvatar = state => {
  return state?.auth?.user?.avatarURL;
};
export const selectToken = state => {
  return state.auth.token;
};
export const selectIsLoading = state => {
  return state.auth.isLoading;
};
export const selectError = state => {
  return state.auth.error;
};
export const selectIsFetchingCurrentUser = state => {
  return state.auth.isFetchingCurrentUser;
};
