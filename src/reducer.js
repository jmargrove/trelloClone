//// function to switch cards around, returns a new object for the cards
function switchCards(card1, card2, cards) {
  const list1 = cards[card1.title]; // list title from
  const list2 = cards[card2.title]; // list title to
  const cardToMove = list1.splice(card1.i, 1); // remove the item out of the list
  list2.splice(card2.i, 0, ...cardToMove); // add the item to the list
  cards[card1.title] = [...list1]; // use the spread operator to do this
  cards[card2.title] = [...list2];
  return cards;
}

function switchCol(col1, col2, colTitles) {
  const colNameToMove = colTitles.splice(col1, 1); // remove the col list
  colTitles.splice(col2, 0, colNameToMove);
  return [...colTitles];
}

const defaultState = {
  listTitles: ["backlog", "to do"],
  cards: {
    backlog: ["writting", "the thesis"],
    "to do": ["working on app"]
  },
  itemsToSwitch: null,
  colToSwitch: null
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
        const newCardState = switchCards(
          state.itemsToSwitch,
          action.id,
          state.cards
        );
        return { ...state, cards: { ...newCardState }, itemsToSwitch: null };
      }
    case "SWITCH_COL":
      if (!state.colToSwitch) {
        return { ...state, colToSwitch: action.i };
      } else {
        return {
          ...state,
          listTitles: switchCol(state.colToSwitch, action.i, state.listTitles),
          colToSwitch: null
        };
      }
    default:
      return state;
  }
};

export default reducer;
