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
        /// add the card to the correct list
        state.cards[action.id.title].splice(
          action.id.i,
          0,
          state.cards[state.itemsToSwitch.title][state.itemsToSwitch.i]
        );
        // remove the card from the old list
        const removeCardList = state.cards[state.itemsToSwitch.title].splice(
          state.itemsToSwitch.i,
          1
        );
        // now return the updated state....
        // console.log("newcardlist", newCardList);
        console.log("removeCardList", removeCardList);
        //
        return {
          ...state,
          cards: {
            ...state.cards,
            // [action.id.title]: [...newCardList],
            [state.itemsToSwitch.title]: [...removeCardList]
          },
          itemsToSwitch: null
        };
      }

    default:
      return state;
  }
};

export default reducer;
