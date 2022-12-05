import React from "react";

import { useDispatch, useSelector } from "react-redux";

import changeForm from "../actions/changeForm";

import addItem from "../actions/addItem";

export default function WidgetForm() {
  const {
    form: { service, price },
  } = useSelector((state) => state.widget);

  const dispatch = useDispatch();

  function inputChange(event) {
    dispatch(changeForm(event.target.name, event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(addItem(service, price));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-box">
        <label className="form-label" htmlFor="service">
          Услуга
        </label>
        <input
          className="form-input"
          id="service"
          type="text"
          name="service"
          value={service}
          onChange={inputChange}
        />
      </div>
      <div className="input-box">
        <label className="form-label" htmlFor="price">
          Цена
        </label>
        <input
          className="form-input"
          id="price"
          type="text"
          name="price"
          value={price}
          onChange={inputChange}
        />
      </div>
      <button className="button">OK</button>
    </form>
  );
}
