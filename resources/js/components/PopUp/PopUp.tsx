
import React from 'react';
import './popup.scss'

const PopUp: React.FC<{
    text: string, title: string, close: Function, hidden: boolean, fn: Function,
    textBtn: string,
}> = ({ title = 'Привет', text = "описание", close, hidden, textBtn, fn }) => {
    if (!hidden) {
        return <></>
    }
    return <>
        <div className="modal-wrapper" id="modal">
            <div className="modal-body  card">
                <div className="modal-header">
                    <h2 className="heading">{title}</h2>
                </div>
                <p>{text}</p>
                <div className="modal-body-buttnos">
                    <button className="bc-red c-white" onClick={() => fn()}  >{textBtn}</button>
                    <button className="bc-grean c-white" onClick={() => close()} >Отменить</button>
                </div>
            </div>
        </div >
    </>
}


export default PopUp;

