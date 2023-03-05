import { createAction } from "@reduxjs/toolkit";

// Action to add a new todo
export const addTodo = createAction("todos/add", (text) => {
    return {
        payload: {
            id: new Date().toISOString(),
            text,
            completed: false
        }
    };
});

// Action to toggle the completed state of a todo
export const toggleTodo = createAction("todos/toggle", (id) => {
    return {
        payload: id
    };
});

// Action to remove a todo
export const removeTodo = createAction("todos/remove", (id) => {
    return {
        payload: id
    };
});
