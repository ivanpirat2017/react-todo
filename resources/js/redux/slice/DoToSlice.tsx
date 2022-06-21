import { authFetch } from '../FetchApi'
import { ToDoInterface, TasksInterface } from '../../Interfaces'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootStore, RootState } from '../store'
import { useAppSelector } from '../hooks'


export interface DoToState {
    todo: Array<ToDoInterface>,
    PopUpDelete: boolean,
    itemDelete: number,
    tasks: ToDoInterface
}

const initialState: DoToState = {
    todo: [],
    PopUpDelete: false,
    itemDelete: 0,
    tasks: {
        name: '', id: 0, tasks: [], del: 0, img: {
            id: 0,
            path: ''
        },
    }
}

export const toToSlice = createSlice({
    name: 'ToDoItems',
    initialState,
    reducers: {
        setToDo: (state, data: PayloadAction<Array<ToDoInterface>>) => {
            state.todo = data.payload
        },
        onPopUpDelete: (state, data: PayloadAction<boolean>) => {
            state.PopUpDelete = data.payload

        },
        onDeleteTodo: (state, data: PayloadAction<{ hidden: boolean, id: number }>) => {
            state.PopUpDelete = data.payload.hidden
            state.itemDelete = data.payload.id
        },
        setTasks: (state, props: PayloadAction<{ id: number, arr: Array<ToDoInterface> }>) => {
            state.tasks = props.payload.arr.find(item => item.id == props.payload.id) ?? state.tasks
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchToDO.fulfilled, (state, action) => {
                state.todo = action.payload
            })
            .addCase(fetchDeleteToDO.fulfilled, (state) => {
                state.PopUpDelete = false
            })
            .addCase(fetchCreateToDO.fulfilled, () => { })
            .addCase(fetchEditToDO.fulfilled, () => { })
    },
})

export const fetchToDO = createAsyncThunk('ToDoItems/fetchToDO', async () => {
    const { data } = await authFetch('/api/get-plan').then(r => {
        return r
    })
    return data as Array<ToDoInterface>
})



export const fetchDeleteToDO = createAsyncThunk<void, void, RootStore>('ToDoItems/fetchDeleteToDO', async (_, { getState, dispatch }) => {
    const form = new FormData()
    form.append('id', String(getState().ToDoItems.itemDelete))
    await authFetch('/api/delete-plan', 'POST', form).finally(() => { dispatch(fetchToDO()) })
})


export const fetchCreateToDO = createAsyncThunk<void, string, RootStore>('ToDoItems/fetchCreateToDO', async (name, { getState, dispatch }) => {
    const form = new FormData()
    form.append('name', name)
    form.append('imgid', String(getState().ImgsSlice.selectedImg.id))
    await authFetch('/api/create-plan', 'POST', form).finally(() => { dispatch(fetchToDO()) })
})
export const fetchEditToDO = createAsyncThunk('ToDoItems/fetchEditToDO', async (props: { id: number, name: string }) => {
    const { id, name } = props
    const form = new FormData()
    form.append('id', String(id))
    form.append('name', name)
    await authFetch('/api/edit-name-plan', 'POST', form)
})


export const { setToDo, onPopUpDelete, onDeleteTodo, setTasks } = toToSlice.actions

export default toToSlice.reducer
