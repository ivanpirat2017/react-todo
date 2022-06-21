import React from 'react';
import './PanelUser.scss'






const UserPanel: React.FC<{ nameUser: String }> = ({ nameUser }) => {
    if (nameUser == '' || nameUser == undefined) {
        nameUser = 'User';
    }
    return <>
        <div className="AppUserText">
            <h5>Hello  </h5>
            <p className="">{nameUser}</p>
        </div>
    </>
}




export default UserPanel;

