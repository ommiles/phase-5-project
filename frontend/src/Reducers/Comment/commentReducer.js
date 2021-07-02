const initialState = {
  x: {},
  y: "",
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "":
      return {
        ...state,
        y: "",
      };
    default:
      return state;
  }
}
