import React from 'react';
import './ProfileBorder.css';


function ProfileBorder({avatar}){
    return(
        <div className="ProfileBorder">
            {avatar.length !== 2?
                <div className="ProfileBorder_Frame">
                    <img 
                        src={avatar}
                        className="ProfileBorder_Avatar"
                        alt="Profile Avatar">
                    </img>
                </div>
                :
                <div className="ProfileBorder_FrameNA">
                    <div className="ProfileBorder_NoPicture d-flex align-items-center justify-content-center">{avatar}</div>
                </div>
            }
        </div>
    );
}


export default ProfileBorder;