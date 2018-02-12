export const passListTitle = (newTitle: string) => {
  return {
    type: "ADD_LIST_TITLE",
    title: newTitle
  };
};

export const addNewCard = (card: string, title: string) => {
  return {
    type: "ADDING_NEW_CARD",
    newCard: card,
    title: title
  };
};

export const moveItem = (obj: object) => {
  console.log("movinhg the itmes around");
  return {
    type: "MOVE_ITEM",
    obj: obj
  };
};

export const reorderCols = (obj: object) => {
  return {
    type: "REORDER_COLS",
    obj: obj
  };
};
