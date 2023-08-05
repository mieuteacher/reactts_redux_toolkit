import  {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface Post {
    id: number;
    title: string;
}

interface InitialState {
    loading: boolean,
    data: Post[]
}

const initialState: InitialState = {
    loading: false,
    data: []
};
const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        setPost: (state: InitialState, action: PayloadAction<Post[]>) => {
            state.data = [...action.payload];
        }
    }
})


export const postAction = {
    ...postSlice.actions
}

export const postReducer = postSlice.reducer;