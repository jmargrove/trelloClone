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

export const moveItem = ID => {
  console.log(ID);
  return {
    type: "MOVE_ITEM",
    id: ID
  };
};

export const selectCol = i => {
  console.log("i-th", i);
  return {
    type: "SWITCH_COL",
    i: i
  };
};
