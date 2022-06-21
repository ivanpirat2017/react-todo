import React, { useEffect, useState } from 'react';
import './Tasks.scss'
import { setTasks, } from '../../redux/slice/DoToSlice'
import { useParams } from 'react-router-dom';
import { state, useAppDispatch } from '../../redux/hooks'
import Task from '../../components/Task/Task';
import Push from '../../../static/img/plus.png';
import back from '../../../static/img/back.png';
const Tasks: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const task = state().ToDoItems.tasks
    const todos = state().ToDoItems.todo
    let { id } = useParams();

    useEffect(() => {
        dispatch(setTasks({ arr: todos, id: Number(id) }));
    })

    return <>
        <div className="Tasks" >
            <img src={back} className="backImg" alt="" />
            {/* <AddTask :onShowTask="onShowTask" :showAddTask="showAddTask" /> */}
            <img src={Push} alt="" className="Сategories_AddPlan" />
            <div className="TasksPlan">
                <img src={task.img.path} alt="" />
                <h5 className="calendar" v-if="$route.params.id == 'today'" ></h5>
                <div className="">
                    <p> </p>
                    <h2>{task.name} </h2>
                </div>
            </div>
            <div className="select-box" >
                <select name="dfdfd" v-model="select">
                    <option value="0">Все</option>
                    <option v-if="boolselect(1)" value="1">Текущие -   </option>
                    <option v-if="boolselect(2)" value="2">Выполненные -   </option>
                    <option v-if="boolselect(3)" value="3">Удаленные -   </option>
                </select>
            </div>
            <div className="TaskItems" >
                {task.tasks.map(task => (<Task item={task} key={task.id} />))}
                {/* <Task v-for="item in filtersCount(select)" :item="item" :key="item.id" /> */}
            </div>
            <div className="errrtext"  >
                <h4 >Создайте задачу</h4>
                <h4  >У вас нет задач на сегодня</h4>
            </div>
        </div>
    </>
}




export default Tasks
// а процесе
