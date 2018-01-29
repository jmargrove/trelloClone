const defaultState = {
  listTitles: [],
  cards: {},
  itemsToSwitch: null
};

const reducer = (state = defaultState, action) => {
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
        state.cards[action.id.title].splice(
          action.id.i,
          0,
          state.cards[state.itemsToSwitch.title][state.itemsToSwitch.i]
        );
        // state.cards[action.id.title].splice(1, 0, "new items");
        console.log("spliing ", state.cards);
        return {
          ...state,
          //// put the card in the items to switch above the action.id.title card
          /// remove card in the state from the list
          cards: {
            ...state.cards,
            [action.id.title]: [...state.cards[action.id.title]]
          },
          itemsToSwitch: null
        };
      }

    default:
      return state;
  }
};

export default reducer;
