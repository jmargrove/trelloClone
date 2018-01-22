const defaultState = {
  listTitles: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_LIST_TITLE":
      return { ...state, listTitles: [...state.listTitles, action.title] };
    default:
      return state;
  }
};

export default reducer;
