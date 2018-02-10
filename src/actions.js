export const passListTitle = newTitle => {
  return {
    type: "ADD_LIST_TITLE",
    title: newTitle
  };
};

export const addNewCard = (card, title) => {
  return {
    type: "ADDING_NEW_CARD",
    newCard: card,
    title: title
  };
};

export const moveItem = obj => {
  console.log("movinhg the itmes around");
  return {
    type: "MOVE_ITEM",
    obj: obj
  };
};

export const reorderCols = obj => {
  return {
    type: "REORDER_COLS",
    obj: obj
  };
};
