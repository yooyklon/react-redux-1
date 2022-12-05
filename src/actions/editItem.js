export default function editItem(id) {
  return {
    type: "EDIT_WIDGET_LIST_ITEM",
    payload: { currentId: id },
  }
}