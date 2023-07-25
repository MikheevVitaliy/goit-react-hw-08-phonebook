// Авторизован пользователь или нет
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// Информафия о пользователе
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
