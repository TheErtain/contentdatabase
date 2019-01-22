import { ATTACH_VIDEO } from "../actions/types";

const initialState = {
  bluray: [],
  dvd: [],
  movies: [],
  tvShows: [],
  anime: []
};
// { name: "", url: "", id: "" }
export default function(state = initialState, action) {
  switch (action.type) {
    case ATTACH_VIDEO:
      return {
        ...state,
        [action.payload.name]: [action.payload.value]
      };

    default:
      return state;
  }
}
