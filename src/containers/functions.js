import React from "react";

export const cardListrender = (array, Tag, title) => {
  const uuid = require("uuid/v1");
  if (array) {
    return array.map((cardItem, i) => {
      return (
        <Tag id={i + ":::" + title} key={uuid()}>
          {cardItem}
        </Tag>
      );
    });
  }
};
