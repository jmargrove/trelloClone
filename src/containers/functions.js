import React from "react";

export const cardListrender = (array: array, Tag, title: string) => {
  if (array) {
    return array.map((cardItem: string, i: number) => {
      return (
        <Tag i={i} key={i} id={{ i: i, title: title }}>
          {cardItem}
        </Tag>
      );
    });
  }
};
