import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        todotext: " my first todo",
        complete: false,
    },
    {
        id: nanoid(),
        todotext: " my second todo",
        complete: false,
    },
    {
        id: nanoid(),
        todotext: " my third todo",
        complete: false,
    },
    {
        id: nanoid(),
        todotext: " my forth todo",
        complete: false,
    }
]

export type todoprops ={
    id: string,
    todotext: string,
    complete: boolean,
}

export type todos = {
    todos: [todoprops]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded: {
            reducer(state, action :PayloadAction<todoprops>) {
                state.push(action.payload)
            },
            prepare({todotext}:todoprops) {
                return {
                    payload: {
                        id: nanoid(),
                        todotext,
                        complete: false,
                    }
                }
            }
        },
        completetodo(state, action:PayloadAction<todoprops>) {
            const { id } = action.payload
            const existingtodo = state.find(todo => todo.id === id)
            if (existingtodo) {
                existingtodo.complete=!existingtodo.complete
            }
        },
        completetodos(state, action:PayloadAction<todoprops[]>) {
            const todos = action.payload
            todos.forEach(currenttodo => {
                const correctTodo = state.find(todo => {
                    return todo.id === currenttodo.id
                    })
                if(correctTodo)
                {
                    correctTodo.complete=!correctTodo.complete
                }
            });
        },
        deletetodo(state, action:PayloadAction<todoprops>) {
            const { id } = action.payload
            state.splice(state.findIndex((todo) => todo.id === id),1)
        },
        deletetodos(state, action:PayloadAction<todoprops[]>) {
            const todos = action.payload
            todos.forEach(currenttodo => {
                state.splice(state.findIndex((todo) => todo.id === currenttodo.id),1)
            });
        },
    }
})

export const selectAlltodos = (state: todos) => state.todos;

export const { todoAdded, completetodo, completetodos, deletetodo, deletetodos } = todosSlice.actions

export default todosSlice.reducer