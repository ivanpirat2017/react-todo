import { authFetch } from '../FetchApi'


import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

export interface PanelUserDataState {
    userName: string,
    authUser: boolean
}

const initialState: PanelUserDataState = {
    userName: '',
    authUser: false,
}

export const panelDataSlice = createSlice({
    name: 'panelUserData',
    initialState,
    reducers: {
        setUser: (state, data: PayloadAction<string>) => {
            state.userName = data.payload
        },
        setAuth: (state, auth: PayloadAction<boolean>) => {
            state.authUser = auth.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetUserApi.fulfilled, (state, action) => {
                state.userName = action.payload
                state.authUser = true
            })
            .addCase(GetUserApi.rejected, (state) => {
                state.authUser = false

            })
    },
})

export const GetUserApi = createAsyncThunk('panelUserData/GetUser', async () => {
    const { data } = await authFetch('/api/authcheck') 
    return data as string
})


export const { setUser, setAuth } = panelDataSlice.actions

export default panelDataSlice.reducer
