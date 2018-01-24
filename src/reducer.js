const defaultState = {
  listTitles: [],
  cards: {}
};

const reducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_LIST_TITLE":
      return {
        ...state,
        listTitles: [...state.listTitles, action.title],
        cards: { ...state.cards, [action.title]: [] }
      };
    case "ADDING_NEW_CARD":
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.title]: [...state.cards[action.title], action.newCard]
        }
      };
    default:
      return state;
  }
};

export default reducer;
