import React from "react";

export const cardListrender = (array, Tag) => {
  const uuid = require("uuid/v1");
  console.log("this is the mapped props", array);
  if (array) {
    return array.map(cardItem => {
      return <Tag key={uuid()}>{cardItem}</Tag>;
    });
  }
};
