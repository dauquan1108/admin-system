import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

/**
 * TodoApp: Viết ra để mọi người hình dung được luồng dữ liệu redux-toolkit và saga
 * @returns 
 */
const TodoApp = () => {
    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default TodoApp;
