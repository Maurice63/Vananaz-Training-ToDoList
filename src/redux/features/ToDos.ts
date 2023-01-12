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
        completetodo(state, action) {
            const { todoId } = action.payload
            const existingtodo = state.find(todo => todo.id === todoId)
            if (existingtodo) {
                existingtodo.complete=!existingtodo.complete
            }
        },
        completetodos(state, action:PayloadAction<todos>) {
            const { todos } = action.payload
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
        deletetodo(state, action) {
            const { todoId } = action.payload
            state = state.filter(todo=>{return todo.id!==todoId})
        },
        deletetodos(state, action:PayloadAction<todos>) {
            const { todos } = action.payload
            const todoids = todos.map(todo=>{return todo.id})
            state = state.filter(todo=>{return !todoids.includes(todo.id)})
        },
    }
})

export const selectAlltodos = (state: todos) => state.todos;

export const { todoAdded, completetodo } = todosSlice.actions

export default todosSlice.reducer