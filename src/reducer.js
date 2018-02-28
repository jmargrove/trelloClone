import { defaultState } from "./defaultState";
import { newBoardObj } from "./newBoardObj";

// function to switch cards around, returns a new object for the cards
function switchCards(card1: array, card2: array, cards) {
  if (card1.title || card2.title) {
    const list1 = cards[card1.title]; // list title from
    const list2 = cards[card2.title]; // list title to
    const cardToMove = list1.splice(card1.i, 1); // remove the item out of the list
    list2.splice(card2.i, 0, ...cardToMove); // add the item to the list
    cards[card1.title] = [...list1]; // use the spread operator to do this
    cards[card2.title] = [...list2];
    return cards;
  }
}

function switchCol(col1, col2, colTitles) {
  const colNameToMove = colTitles.splice(col1, 1); // remove the col list
  colTitles.splice(col2, 0, colNameToMove);
  return [...colTitles];
}

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
      if (action.obj.source && action.obj.destination) {
        const newCardState = switchCards(
          { title: action.obj.source.droppableId, i: action.obj.source.index },
          {
            title: action.obj.destination.droppableId,
            i: action.obj.destination.index
          },
          state.cards
        );

        return { ...state, cards: { ...newCardState }, itemsToSwitch: null };
      }
      break;
    case "REORDER_COLS":
      if (action.obj.source === null || action.obj.destination === null) {
        return state;
      } else {
        return {
          ...state,
          listTitles: switchCol(
            action.obj.source.index,
            action.obj.destination.index,
            state.listTitles
          ),
          colToSwitch: null
        };
      }
    case "UPDATE_BOARD":
      return {
        ...action.newState
      };
    case "CREATE_NEW_BOARD":
      return {
        ...newBoardObj
      };
    default:
      return state;
  }
};

export default reducer;
