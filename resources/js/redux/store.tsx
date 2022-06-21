import { configureStore } from '@reduxjs/toolkit'
import panelDataSlice from './slice/PanelUserDataSlice'
import toToSlice from './slice/DoToSlice'
import ImgsSlice from './slice/ImgsSlice'

export const store = configureStore({
    reducer: {
        panelData: panelDataSlice,
        ToDoItems: toToSlice,
        ImgsSlice: ImgsSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type RootStore = {
    state: RootState,
    dispatch: AppDispatch
}




