import React, { useRef, useState } from "react";

import WidgetList from "./WidgetList";

import WidgetForm from "./WidgetForm";

export default function Widget() {
  const [form, setForm] = useState({
    date: "",
    passed: "",
  });

  const currentError = useRef();

  const [list, setList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setList((prevList) => [...prevList, form]);

    setForm({
      date: "",
      passed: "",
    });
  }

  function inputChange(event) {
    const name = event.target.name;

    setForm((prevForm) => ({ ...prevForm, [name]: event.target.value }));
  }

  function removeListItem(date) {
    setList((prevList) => [...prevList.filter((obj) => obj.date !== date)]);
  }

  function handleEditItem(date, passed) {
    setForm({ date, passed });
  }

  return (
    <div className="workout">
      <WidgetForm />
      <WidgetList
        list={list}
        onEditItem={handleEditItem}
        onRemoveItem={removeListItem}
      />
    </div>
  );
}
