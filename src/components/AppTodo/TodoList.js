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
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);

  const dispath = useDispatchCore();
  const todos = useSelector(store => store[dispath.TYPE.Todo])
  const { itemIds, total, count } = useSelector(store => store[dispath.TYPE.HasTodo]);

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

  function getList(page) {
    const data = {};
    const params = { limit: 10, page }
    const headers = {};
    dispath.dispatchCore(dispath.TYPE.Todo, dispath.METHOD.GET_LIST, data, params, headers, onGetSuccess, onGetFail); // GET_LIST
  }

  function nextPage() {
    setPage((prePage) => prePage + 1);
    getList(page + 1);
  }

  React.useEffect(() => {
    getList(1)
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
      <div className="center-btn">
        <button class="button-1" role="button" onClick={nextPage}>Xem thêm {`${count}/${total}`}</button>
      </div>
    </div >
  );
}

export default TodoList;