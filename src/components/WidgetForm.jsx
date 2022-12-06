import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import changeForm from "../actions/changeForm";

import addItem from "../actions/addItem";

export default function WidgetForm() {
  const {
    form: { service, price },
  } = useSelector((state) => state.widget);

  const dispatch = useDispatch();

  const errorRef = useRef();

  function inputChange(event) {
    dispatch(changeForm(event.target.name, event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!Number(price)) {
      errorRef.current.textContent = "Цена должна быть числом";
      return;
    } else {
      errorRef.current.textContent = "";
    }

    dispatch(addItem(service, price));
  }

  return (
    <form className="widget-form" onSubmit={handleSubmit}>
      <div className="input-box">
        <label className="widget-form-label" htmlFor="service">
          Услуга
        </label>
        <input
          className="widget-form-input"
          id="service"
          type="text"
          name="service"
          value={service}
          onChange={inputChange}
          placeholder="Введите услугу..."
        />
      </div>
      <div className="input-box">
        <label className="widget-form-label" htmlFor="price">
          Цена
        </label>
        <input
          className="widget-form-input"
          id="price"
          type="text"
          name="price"
          value={price}
          onChange={inputChange}
          placeholder="Введите цену..."
        />
        <div ref={errorRef} className="error"></div>
      </div>
      <button className="widget-button">OK</button>
    </form>
  );
}
