import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
// import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import TYPE_HANDLE_ACTION from "cores/utils/constants/TYPE_HANDLE_ACTION";
import useDispatchCore from "cores/hooks/useDispathCore";
import "./TodoList.css";

function TodoList() {
  // const [todos, setTodos] = useState([
  //   { id: uuid(), task: "task 1", completed: false },
  //   { id: uuid(), task: "task 2", completed: true }
  // ]);

  const todos = useSelector(store => store.Todo)
  const itemIds = useSelector(store => store.HasTodo.itemIds);
  console.log('itemIds: ', itemIds);
  const dispath = useDispatchCore();

  React.useEffect(() => {
    dispath.dispatchCore(dispath.TYPE.Todo, dispath.METHOD.GET_LIST, {}, { limit: 4, page: 1 })
  }, [])

  const create = newTodo => {
    // setTodos([...todos, newTodo]);
    dispath.dispatchCore(dispath.TYPE.Todo, dispath.METHOD.ADD, {
      task: newTodo.task,
      completed: 'false',
    })
  };

  const remove = id => {
    // setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    // setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    // setTodos(updatedTodos);
  };

  const todosList = itemIds.map(id => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={id}
      todo={todos[id]}
    />
  ));

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <NewTodoForm createTodo={create} />
      <ul>{todosList}</ul>
    </div>
  );
}

export default TodoList;
