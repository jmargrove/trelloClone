import React from "react";

export const cardListrender = (array, Tag) => {
  const uuid = require("uuid/v1");
  if (array[0] !== null) {
    return array.map(cardItem => {
      return <Tag key={uuid()}>{cardItem}</Tag>;
    });
  }
};
