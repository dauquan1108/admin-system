import React, { useState } from "react";
import { useSelector } from 'react-redux';
// import { v4 as uuid } from "uuid";
import { LoadingOutlined } from '@ant-design/icons';

// hooks custom
import useDispatchCore from "cores/hooks/useDispathCore";

// components
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import LoadingLazy from "components/Loading/Loading";

// styles
import "./TodoList.css";

function TodoList() {
  // const [todos, setTodos] = useState([
  //   { id: uuid(), task: "task 1", completed: false },
  //   { id: uuid(), task: "task 2", completed: true }
  // ]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);


  const dispath = useDispatchCore();
  const todos = useSelector(store => store[dispath.TYPE.Todo])
  const itemIds = useSelector(store => store[dispath.TYPE.HasTodo]).itemIds;

  function onGetSuccess() {
    setIsLoading(false);
  }
  function onGetFail() {
    setIsLoading(false);
  }

  function onAddSuccess() {
    setIsLoadingAdd(false);
  }
  function onAddFail() {
    setIsLoadingAdd(false);
  }

  React.useEffect(() => {
    const data = {};
    const params = { limit: 4, page: 1 }
    const headers = {};
    dispath.dispatchCore(dispath.TYPE.Todo, dispath.METHOD.GET_LIST, data, params, headers, onGetSuccess, onGetFail); // GET_LIST
  }, [])

  const create = newTodo => {
    setIsLoadingAdd(true);
    const data = {
      task: newTodo.task, // data
      completed: 'false',
    };
    dispath.dispatchCore(dispath.TYPE.Todo, dispath.METHOD.ADD, data, {}, {}, onAddSuccess, onAddFail); // ADD
  };

  const remove = id => {
    dispath.dispatchCore(dispath.TYPE.Todo, dispath.METHOD.REMOTE, { id }); // REMOTE
  };

  const update = (id, updtedTask) => {
    const data = { ...todos[id], id, task: updtedTask };
    dispath.dispatchCore(dispath.TYPE.Todo, dispath.METHOD.UPDATE, data); // UPDATE
  };

  const toggleComplete = id => {
    const data = { ...todos[id], id, completed: !JSON.parse(todos[id].completed) };
    dispath.dispatchCore(dispath.TYPE.Todo, dispath.METHOD.UPDATE, data); // UPDATE
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
      <NewTodoForm createTodo={create} isLoading={isLoadingAdd} />
      {
        isLoading ? (
          <LoadingLazy className='LoadingXX'>
            <LoadingOutlined />
          </LoadingLazy>
        ) : <ul>{todosList}</ul>
      }

    </div >
  );
}

export default TodoList;
