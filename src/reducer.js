const defaultState = {
  listTitles: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_LIST_TITLE":
      console.log("action working in reducer ");
      return { ...state, listTitles: [...state.listTitles, action.title] };
      break;
    default:
      return state;
  }
};

export default reducer;
