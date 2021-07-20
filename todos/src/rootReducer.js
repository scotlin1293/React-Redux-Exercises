import { v4 as uuid } from 'uuid';

const INT_STATE = { todos: [] };

const rootReducer = (state = INT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, { task: action.task }] };

    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter((t) => t.id !== action.id) };

    default:
      return state;
  }
};

export default rootReducer;
