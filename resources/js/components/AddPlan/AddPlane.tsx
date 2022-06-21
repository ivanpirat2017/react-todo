import React, { useState } from 'react';
import './AddPlane.scss'
import close from '../../../static/img/close.png';

import AddImg from './AddImg/AddImg'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { RootState } from '../../redux/store'
import { fetchCreateToDO } from '../../redux/slice/DoToSlice'


function errorValidation(text: string) {
    const selectedImg = useAppSelector((state: RootState) => state.ImgsSlice.selectedImg)
    if (selectedImg.id == 0) {
        return { text: 'Выберите картинку', success: false }
    }
    else if (text.length < 5) {
        return { text: 'Введите больше символов', success: false }
    }
    else {
        return { text: 'Вы можете создать!', success: true }
    }
}



const AddPlane: React.FC<{ hidden: boolean, setAP: Function }> = ({ hidden, setAP }) => {
    const dispatch = useAppDispatch()

    const [addImgHidden, SetAddImgHidden] = useState(false);
    const [namePlan, SetNamePlan] = useState('');
    const selectedImg = useAppSelector((state: RootState) => state.ImgsSlice.selectedImg)
    const classPosition = hidden ? 'b0' : 'bf'
    const validation = errorValidation(namePlan)
    const fetchCreate = () => {
        if (validation.success) {
            dispatch(fetchCreateToDO(namePlan))
            setAP(false)
        }
    }
    return <>
        {addImgHidden && <AddImg setAI={SetAddImgHidden} />}
        <div className={classPosition + ' AddPlan'}  >
            <img src={close} className="close" onClick={() => setAP(false)} alt="" />
            <div className="AddPlanSetting">
                <div className="">
                    <p>Счастливого дня</p>
                    <h2>Создать категорию</h2>
                </div>
            </div>
            <div className="AddPlanAdd">
                <div>
                    <img src={selectedImg.path} onClick={() => SetAddImgHidden(true)} alt="" />
                    <h5>{validation.text}</h5>
                </div>
                <div>
                    <input type=" text" value={namePlan} onChange={(e) => SetNamePlan(e.target.value)} className="br-orange " v-model="name" placeholder="Введите название"></input>
                </div>
            </div>
            {validation.success && <button className="bc-grean" onClick={() => fetchCreate()}>Создать</button>}
        </div >
    </>
}


export default AddPlane;
