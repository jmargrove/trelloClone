export const passListTitle = newTitle => {
  console.log("new title...", newTitle);
  return {
    type: "ADD_LIST_TITLE",
    title: newTitle
  };
};
