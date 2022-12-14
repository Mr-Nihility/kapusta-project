export const getToken = state => state.auth.token;
export const getIsLogged = state => state.auth.isLogged;
export const getUserEmail = state => state.auth.userData.email;
export const getSid = state => state.auth.sid;
export const getSuccessToken = state => state.auth.accessToken;
export const getStartBalance = state => state.auth.userData.balance;
export const getIsFisrtSignIn = state => state.auth.isFisrtSignIn;
export const getIsLoading = state => state.auth.isLoading;
export const getAllTransactions = state => state.auth.userData.transactions;
