import { NOTIFY_USER, CLEAR_ERRORS } from "./types";

export const notifyUser = (message, messageType) => {
  return {
    type: NOTIFY_USER,
    message,
    messageType
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
