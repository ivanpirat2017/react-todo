import React, { useEffect, useState } from 'react';
import './Сategories.scss'
import Push from '../../../static/img/plus.png';
import Plan from '../../components/Plan/Plan';

import { state, useAppDispatch } from '../../redux/hooks'
import { onPopUpDelete, fetchDeleteToDO } from '../../redux/slice/DoToSlice'

import PopUp from '../../components/PopUp/PopUp';
import AddPlan from '../../components/AddPlan/AddPlane';

function Сategories() {
    const dispatch = useAppDispatch()
    const toDoItems = state().ToDoItems.todo
    const popUpDelete = state().ToDoItems.PopUpDelete
    const [addPlanHidden, setAddPlanHidden] = useState(false);

    return <>
        <PopUp title='Удалить'
            text='Вы действительно хотите удалить категорию?'
            hidden={popUpDelete}
            textBtn={'удалить'}
            fn={() => dispatch(fetchDeleteToDO())}
            close={() => dispatch(onPopUpDelete(!popUpDelete))}
        />
        <div className="Сategories">
            <AddPlan hidden={addPlanHidden} setAP={setAddPlanHidden} />
            <h2>Категория задач</h2>
            {!addPlanHidden && (<img src={Push} onClick={() => setAddPlanHidden(true)} alt="" className="Сategories_AddPlan"></img>)}
            <div className="СategoriesItems">
                {toDoItems.map(item => (
                    <Plan item={item} key={item.id} />
                ))}
            </div>
        </div>
    </>
};
export default Сategories;
