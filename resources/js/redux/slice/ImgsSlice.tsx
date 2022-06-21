import { authFetch } from '../FetchApi'
import { ImgInterface } from '../../Interfaces'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import imgDefault from '../../../static/img/check-list.png'

export interface ImgsState {
    imgs: Array<ImgInterface>,
    selectedImg: ImgInterface,
}

const initialState: ImgsState = {
    imgs: [],
    selectedImg: { id: 0, name: '', path: imgDefault },
}

export const ImgsSlice = createSlice({
    name: 'Imgs',
    initialState,
    reducers: {
        OnselectedImg: (state, data: PayloadAction<number>) => {
            state.selectedImg = state.imgs.find(img => img.id == data.payload) ?? state.selectedImg
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImgs.fulfilled, (state, action) => {
                state.imgs = action.payload
            })
    },
})

export const fetchImgs = createAsyncThunk('Imgs/fetchImgs', async () => {
    const { data } = await authFetch('/api/get-img')
    return data as Array<ImgInterface>
})


export const { OnselectedImg } = ImgsSlice.actions
export default ImgsSlice.reducer
