export default function changeForm(name, value) {
  return {
    type: "CHANGE_WIDGET_FORM_FIELD",
    payload: { name, value },
  }
}