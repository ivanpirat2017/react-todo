import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Panel from './components/User/Panel'
import Сategories from './router/Сategories/Сategories'
import Tasks from './router/Tasks/Tasks'
import { useAppDispatch } from './redux/hooks'
import { fetchToDO, } from './redux/slice/DoToSlice'
import { fetchImgs } from './redux/slice/ImgsSlice'
import './app.scss'
function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchToDO());
        dispatch(fetchImgs());
    }, []);

    return <>
        <div className="cnt">
            <Panel />
            <Routes>
                <Route path="/" element={<Сategories />} />
                <Route path="/tasks/:id" element={<Tasks />} />

            </Routes>
        </div>

    </>
};




function ToDo() {
    return <>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </>

}


const root = document.getElementById('root');
if (root) {
    ReactDOM.render(<ToDo />, root);
}

