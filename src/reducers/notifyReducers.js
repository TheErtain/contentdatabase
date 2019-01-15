import { NOTIFY_USER, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  message: "",
  messageType: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        message: "",
        messageType: ""
      };
    default:
      return state;
  }
}
