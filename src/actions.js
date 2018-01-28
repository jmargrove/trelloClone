export const passListTitle = newTitle => {
  return {
    type: "ADD_LIST_TITLE",
    title: newTitle
  };
};

export const addNewCard = (card, title) => {
  console.log(card, title);
  return {
    type: "ADDING_NEW_CARD",
    newCard: card,
    title: title
  };
};

export const moveItem = ID => {
  console.log("the ID!!!! action", ID);
  return {
    type: "MOVE_ITEM",
    id: ID
  };
};
