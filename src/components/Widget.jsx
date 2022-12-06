import React from "react";

import List from "./List";

import WidgetForm from "./WidgetForm";

export default function Widget() {
  return (
    <div className="widget">
      <WidgetForm />
      <List />
    </div>
  );
}
