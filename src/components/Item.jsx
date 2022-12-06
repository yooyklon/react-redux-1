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
    <li className="widget-list-item">
      <div className="widget-list-item-service">{service}</div>
      <div className="widget-list-item-price">{price}</div>
      <div className="widget-list-item-actions">
        <span
          className="material-symbols-outlined widget-list-item-edit"
          onClick={() => handleEditItem(id)}
        >
          edit
        </span>
        <span
          className="widget-list-item-delete"
          onClick={() => handleRemoveItem(id)}
        >
          &#10006;
        </span>
      </div>
    </li>
  );
}
