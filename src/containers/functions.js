import React from "react";

export const cardListrender = (array, Tag, title) => {
  const uuid = require("uuid/v1");
  if (array) {
    return array.map((cardItem, i) => {
      return (
        <Tag id={{ i: i, title: title }} key={uuid()}>
          {cardItem}
        </Tag>
      );
    });
  }
};
