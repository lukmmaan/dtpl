import { SET_USER, CLEAR_USER, UPDATE_USER_PROFILE } from "./userActions";

const initialState = {
  user: {
    fullName: "",
    role: "",
    email: "",
    token: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case CLEAR_USER:
      return {
        ...state,
        user: {
          fullName: "",
          role: "",
          email: "",
          token: "",
        },
      };
    default:
      return state;
  }
};

export default userReducer;
