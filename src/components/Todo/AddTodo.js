import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../cores/actions-sagas/todos";

const AddTodo = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) {
            return;
        }
        dispatch(addTodo(inputValue));
        setInputValue("");
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;
