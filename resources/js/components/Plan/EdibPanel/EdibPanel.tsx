import React, { useState } from 'react';

import { ToDoInterface, TasksInterface } from '../../../Interfaces'
import { useAppDispatch } from '../../../redux/hooks'
import { fetchEditToDO } from '../../../redux/slice/DoToSlice'


const CountTask: React.FC<{ task: Array<TasksInterface> }> = ({ task }) => {
    let text: string;
    if (task.length == 0) {
        text = 'Нет задач'
    } else if (task.length == 1) {
        text = task.length + ' задача'
    } else if (task.length >= 2 && task.length < 5) {
        text = task.length + ' задачи'
    }
    else {
        text = task.length + ' задач'
    }
    return <p>{text}</p>

}





const EdibPanel: React.FC<{ edibPanelHidden: boolean, setEdibPanelHidden: Function, item: ToDoInterface }> = ({ setEdibPanelHidden, edibPanelHidden, item }) => {
    const dispatch = useAppDispatch()

    const [name, SetName] = useState(item.name);
    const fetchEdit = () => {
        dispatch(fetchEditToDO({ id: item.id, name: name }))
        setEdibPanelHidden(false)
    }
    if (edibPanelHidden) {
        return <div className="CategoryEditIput" onClick={(e) => e.stopPropagation()}>
            <input type="text" value={name} onChange={e => SetName(e.target.value)} />
            <button className="bc-grean c-white" onClick={() => fetchEdit()} >Сохранить</button>
        </div>
    }
    return <>
        <h5>{name}</h5>
        <CountTask task={item.tasks} />
    </>
}

export default EdibPanel;
