import React, { useEffect } from 'react';

import './Panel.scss'
import UserPanel from './PanelUser/PanelUser'
import { RootState } from '../../redux/store'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { GetUserApi } from '../../redux/slice/PanelUserDataSlice'




function Panel() {

    const user = useAppSelector((state: RootState) => state.panelData.userName)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GetUserApi())
    });
    return (<div className="Panel ">
        <div className="PanelCircle bc-orange"> </div >
        <div className="PanelUser"  >
            <UserPanel nameUser={user} />
            <button className="bc-red c-white" >выйти</button>
        </div>
    </div>)
};


export default Panel;

