import { createActions, createReducer } from "reduxsauce"

// Action types e creators
export const { Types, Creators } = createActions({
  addCourse: ["text"],
  toggleCourse: ["id"],
  removeCourse: ["id"]
})

// Handlers
const INITIAL_STATE = []

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false }
];

const toggle = (state = INITIAL_STATE, action) =>
  state.map(
    todo =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter(todo => todo.id !== action.id);

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.ADD_COURSE]: add,
  [Types.TOGGLE_COURSE]: toggle,
  [Types.REMOVE_COURSE]: remove
});
