export default function addItem(service, price) {
  return {
    type: "ADD_WIDGET_LIST_ITEM",
    payload: { service, price },
  }
}