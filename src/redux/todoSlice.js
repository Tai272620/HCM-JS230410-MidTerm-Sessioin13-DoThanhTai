import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        {
            id: 1,
            task: "study",
            status: false,
            time: "1:14 PM 29-6-2023"
        },
        {
            id: 2,
            task: "clean home",
            status: true,
            time: "1:14 PM 29-6-2023"
        },
    ],
    reducers: {
        AddTask: (state, action) => {
            return [...state, action.payload]
        },
        RemoveTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload)
        },
        UpdateTask: (state, action) => {
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        task: action.payload.task,
                        status: action.payload.status
                    }
                } else {
                    return task
                }
            })
        },
        UpdateStatusTask: (state, action) => {
            console.log(action.payload)
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload
                } else {
                    return task
                }
            })
        }
    }
})

export const { AddTask, RemoveTask, UpdateTask, UpdateStatusTask } = todoSlice.actions
export default todoSlice.reducer