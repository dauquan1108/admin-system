import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../cores/actions-sagas/todos";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    onClick={() => handleToggle(todo.id)}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
