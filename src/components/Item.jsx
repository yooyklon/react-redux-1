import React from "react";

import { useDispatch } from "react-redux";

import editItem from "../actions/editItem";

import removeItem from "../actions/removeItem";

export default function Item({ service, price, id }) {
  const dispatch = useDispatch();

  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }

  function handleEditItem(id) {
    dispatch(editItem(id));
  }

  return (
    <li className="workout-list-item">
      <div className="workout-list-item-date">{service}</div>
      <div className="workout-list-item-passed">{price}</div>
      <div className="workout-list-item-actions">
        <span
          className="material-symbols-outlined workout-list-item-edit"
          onClick={() => handleEditItem(id)}
        >
          edit
        </span>
        <span
          className="workout-list-item-delete"
          onClick={() => handleRemoveItem(id)}
        >
          &#10006;
        </span>
      </div>
    </li>
  );
}
