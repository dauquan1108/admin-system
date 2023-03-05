import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
import produce from "immer";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: {
            /**
             * prepare trong Redux Toolkit được sử dụng để xử lý các tham số trước khi chúng được truyền vào hàm reducer.
             * Nó cho phép bạn chuẩn bị các dữ liệu được định dạng khác nhau,
             * thêm thông tin vào payload,
             * và thực hiện các xử lý bổ sung trước khi gọi đến hàm reducer.
            */
            // prepare: (text) => {
            //     return { payload: { id: uuidv4(), text, completed: false } };
            // },
            reducer: (state, action) => {
                state.push(action.payload);
            },
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            return produce(state, draftState => {
                const todo = draftState.find(todo => todo.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                }
            });
        },


        deleteTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                // Sử dụng Immer ở đây
                produce(state, (draftState) => {
                    draftState.splice(index, 1);
                });
            }
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
