import React, { useState, MouseEvent } from 'react';
import './Plan.scss'
import EdibPanel from './EdibPanel/EdibPanel'
import { ToDoInterface } from '../../Interfaces'
import MenuImg from '../../../static/img/three-dots.png';
import { onDeleteTodo } from '../../redux/slice/DoToSlice'
import { useAppDispatch } from '../../redux/hooks'
import { useNavigate } from "react-router-dom";

const MenuPlan: React.FC<{
    id: number,
    setMenuPanelHidden: Function,
    menuPanelHidden: boolean,
    setEdibPanelHidden: Function,
    edibPanelHidden: boolean,
}> = ({ setMenuPanelHidden,
    id,
    menuPanelHidden,
    setEdibPanelHidden,
    edibPanelHidden }) => {
        if (menuPanelHidden) {
            const dispatch = useAppDispatch()
            const onStopPropagation = (e: MouseEvent, fn: Function) => {
                () => fn();
                e.stopPropagation();
            }
            const onDeleteTodoStop = (e: MouseEvent) => {
                dispatch(onDeleteTodo({ hidden: true, id: id }))
                e.stopPropagation();
            }
            return <>
                <div className=" CategoryEditmenu  ">
                    <p onClick={(e) => onStopPropagation(e, setMenuPanelHidden(false))}>Закрыть</p>
                    <p onClick={(e) => onStopPropagation(e, setEdibPanelHidden(!edibPanelHidden))}>Редактировать</p >
                    <p onClick={(e) => onDeleteTodoStop(e)}>Удалить</p >
                </div >
            </>
        }
        return <></>

    }



const Plan: React.FC<{ item: ToDoInterface }> = ({ item }) => {
    const [edibPanelHidden, setEdibPanelHidden] = useState(false);
    const [menuPanelHidden, setMenuPanelHidden] = useState(false);
    const onClickMenu = (e: MouseEvent) => {
        setMenuPanelHidden(!menuPanelHidden);
        e.stopPropagation()
    }
    const navigate = useNavigate();
    return <>
        <div className="Category" onMouseLeave={() => setMenuPanelHidden(false)} onClick={() => navigate('/tasks/' + item.id)}  >
            <img src={item.img.path} alt="" className="CategoryIcon"></img>
            <div>
                <EdibPanel edibPanelHidden={edibPanelHidden} setEdibPanelHidden={setEdibPanelHidden} item={item} />
            </div>
            <img src={MenuImg} alt=""
                onClick={(e) => onClickMenu(e)}
                className="CategoryEdit" ></img>
            <MenuPlan key={item.id}
                id={item.id}
                
                edibPanelHidden={edibPanelHidden}
                setEdibPanelHidden={setEdibPanelHidden}
                menuPanelHidden={menuPanelHidden}
                setMenuPanelHidden={setMenuPanelHidden}
            />
        </div >
    </>
};

export default Plan;
