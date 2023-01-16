import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState{
    data: string[]
}

const initialState: IState = {data: []}

const tweetSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {
        addTweet: (state, action: PayloadAction<string>)=>{
            state.data.push(action.payload)
        }
    }
})

export const { addTweet } = tweetSlice.actions

export default tweetSlice.reducer