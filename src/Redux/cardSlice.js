import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name : "card",
    initialState : [],
    reducers : {
        AddItem : (state, action)=>{
            state.push(action.payload)
        },
        RemoveItem:(state, action)=>{
            return state.filter((item)=>(
                item.id !== action.payload
            ))
        }
    }
})

export const { AddItem, RemoveItem } = cardSlice.actions
export default cardSlice.reducer