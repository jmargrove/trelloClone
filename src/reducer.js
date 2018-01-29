const defaultState = {
  listTitles: [],
  cards: {},
  itemsToSwitch: null
};

const reducer = (state = defaultState, action) => {
  console.log("the previous state, 1 setp.......", action);
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
    case "MOVE_ITEM":
      if (!state.itemsToSwitch) {

        return { ...state, itemsToSwitch: action.id };
      } else {
        return {
          ...state,
          cards: {
            ...state.cards,
            [action.title]: [...state.cards[action.title], action.newCard]
          } 
          itemsToSwitch: null };
      }

    default:
      return state;
  }
};

export default reducer;
