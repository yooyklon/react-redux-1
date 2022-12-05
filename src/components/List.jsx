import React from "react";

import { useSelector } from "react-redux";

import Item from "./Item";

export default function List() {
  const { list } = useSelector((state) => state.widget);

  return (
    <ul className="workout-list">
      {list.map((el) => (
        <Item {...el} key={el.id} />
      ))}
    </ul>
  );
}
