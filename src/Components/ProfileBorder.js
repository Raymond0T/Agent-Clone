import React from 'react';
import './ProfileBorder.css';


function ProfileBorder({avatar}){
    return(
        <div className="ProfileBorder">
            <div className="ProfileBorder_Frame">
                <img 
                    src={avatar}
                    className="ProfileBorder_Avatar"
                    alt="Responsive image">
                </img>
            </div>
        </div>
    );
}


export default ProfileBorder;