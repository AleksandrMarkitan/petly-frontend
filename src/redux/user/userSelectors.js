export const selectUser = (state) => state.user.items;
export const selectPets = (state) => state.user.items.pets;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;
