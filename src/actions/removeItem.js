export default function removeItem(id) {
  return {
    type: "REMOVE_WIDGET_LIST_ITEM",
    payload: { id },
  }
}