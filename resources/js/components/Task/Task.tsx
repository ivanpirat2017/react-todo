import React, { useState, MouseEvent } from 'react';
import { TasksInterface } from '../../Interfaces'
import './Task.scss'
import remove from '../../../static/img/remove.png';
const Task: React.FC<{ item: TasksInterface }> = ({ item }) => {

    return <>

        <div className="Task">
            <input type="checkbox" name="a" />
            <div>
                <h5 className="done">{item.name}</h5>
                <p className="textTime.class">
                </p>
            </div>
            <img className="remove" src={remove} alt="" />
        </div >


    </>
}

export default Task
