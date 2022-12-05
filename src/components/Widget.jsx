import React from "react";

import WidgetList from "./WidgetList";

import WidgetForm from "./WidgetForm";

export default function Widget() {
  return (
    <div className="workout">
      <WidgetForm />
      <WidgetList />
    </div>
  );
}
