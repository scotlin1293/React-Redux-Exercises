import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
  const store = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const createTodo = (task) => {
    dispatch({ type: 'ADD_TODO', task });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  //   not best practice since key & id are different
  const allTodos = store.map((t) => <Todo deleteTodo={deleteTodo} key={uuid()} task={t.task} />);

  return (
    <div className='TodoList'>
      <h1>React-Redux Todos</h1>
      <NewTodoForm createTodo={createTodo} />
      <ul>{allTodos}</ul>
    </div>
  );
};

export default TodoList;
