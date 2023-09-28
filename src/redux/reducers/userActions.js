export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

export const updateUserProfile = (userData) => {
  return {
    type: UPDATE_USER_PROFILE,
    payload: userData,
  };
};
