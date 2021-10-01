import React, { useEffect, useState } from 'react';
import'./UserStatus.css';
import ProfileBorder from './ProfileBorder';
import ProfileImage from '../Images/profile_user.jpg';


function UserStatus({displayProfile}){

    const [availStatus, setAvailStatus] = useState(' Available');
    

    const changeStatus = (e) =>{
        setAvailStatus(e.target.name);
    }

    /*
<i className="bi dot-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-dot" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                        </svg>
                                    </i> 
    */
    
    return(
        <div className="container UserStatus">

            <button
                type="button"
                className="close UserStatus_CloseBtn"
                aria-label="Close"
                onClick={displayProfile}
            >
                <span aria-hidden="true">&times;</span>
            </button>
            
            <div className="row UserStatus_Profile">
                <div className="col-4">
                    <ProfileBorder avatar={ProfileImage}/>
                </div>
                <div className="col-8 ">
                    <h6>JOHN SMITH</h6>
                    <div className="dropdown test">
                        <button
                            type="button"
                            id="availability" 
                            className="btn btn-outline-light dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className={availStatus =="Busy" ? "bi bi-circle-fill m-1 text-danger" : "bi bi-circle-fill m-1 text-success"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                </svg>     
                            </i>{availStatus}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="availability">
                            <li>
                                <a 
                                    className="dropdown-item UserStatus_Present" 
                                    href="#App_UserProfile" 
                                    name="Available" 
                                    onClick={(e) => changeStatus(e)}
                                >
                                    <i className="bi bi-circle-fill m-1 text-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8"/>
                                        </svg>     
                                    </i>
                                    Available
                                </a>
                            </li>
                            <li>                               
                                <a 
                                    className="dropdown-item UserStatus_Away" 
                                    href="#App_UserProfile" 
                                    name="Busy" 
                                    onClick={(e) => changeStatus(e)}
                                >
                                   <i className="bi bi-circle-fill m-1 text-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8"/>
                                        </svg>     
                                    </i>
                                    Busy
                                </a>
                            </li>
                        </ul>
                        <i class="bi bi-person-lines-fill m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UserStatus;