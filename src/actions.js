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
