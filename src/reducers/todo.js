import { ADD_TASK } from '../actions';

const initialState = { todoList: [] }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // TODO:
      console.log("create action ADD_TASK")
      return state;
    default:
      return state;
  }
}
