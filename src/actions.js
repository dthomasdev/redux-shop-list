export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_ITEM";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
}

let nextId = 0;



export function addItem(text) {
  return {
    type: ADD_ITEM,
    id: nextId++,
    text
  }
}

export function toggleComplete(id) {
  return {
    type: TOGGLE_ITEM,
    id
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
