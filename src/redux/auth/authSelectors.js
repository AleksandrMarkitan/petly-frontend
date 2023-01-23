export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserAvatar = (state) => state.auth.user.avatarURL;
export const selectUserCity = (state) => state.auth.user.city;
export const selectUserBirthday = (state) => state.auth.user.birthday;
export const selectUserPhone = (state) => state.auth.user.phone;
export const selectUserPets = (state) => state.auth.user.pets;

export const selectToken = (state) => state.auth.token;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;
export const selectIsFetchingCurrentUser = (state) =>
  state.auth.isFetchingCurrentUser;
export const selectFavoriteNotices = (state) => state.auth.user.favoriteNotices;
export const selectUser = (state) => state.auth.user;
