import React from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

const Todo = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <TodoList />
    </React.Fragment>
  );
}

export default Todo;
