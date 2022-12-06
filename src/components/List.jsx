import React from "react";

import { useSelector } from "react-redux";

import Item from "./Item";

export default function List() {
  const { list } = useSelector((state) => state.widget);

  if (!list.length) return null;

  return (
    <ul className="widget-list">
      {list.map((el) => (
        <Item {...el} key={el.id} />
      ))}
    </ul>
  );
}
