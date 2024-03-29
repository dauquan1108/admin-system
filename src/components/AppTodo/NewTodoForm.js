import React, { useState, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { LoadingOutlined } from '@ant-design/icons';

import "./newTodoForm.css";


function NewTodoForm({ createTodo, isLoading }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = { id: uuid(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button>
        {
          !isLoading ? 'Add Todo' : <LoadingOutlined />
        }
      </button>
    </form>
  );
}

export default NewTodoForm;
