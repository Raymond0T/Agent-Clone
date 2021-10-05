import React, { useState } from 'react';
import './Badges.css';
import {badgesData} from '../Data/UserData.js';

function Badges(){

    const [info, setInfo] = useState(false);

    const adjustInfo = () =>{
        setInfo(!info);
    }

    return(
        <div className="Badges">
            <div className="d-flex justify-content-between py-3">
                <span><strong><small>Badges</small></strong></span>
                <button 
                    type="button" 
                    className="btn btn-link p-0" 
                    data-bs-toggle="collapse" 
                    data-bs-target=".multi-collapse" 
                    aria-expanded="false" 
                    aria-controls="leadsAndFollow"
                >
                    <small className="custom_color_blue custom_xs_font" onClick={adjustInfo}>{!info ? 'Show' : "Hide"} Details</small>
                </button>
            </div>
            {badgesData.map((badge,index) =>{
                return(
                    <div className="Badges_Progress_Container" key={index}>
                        <div className="Badges_Progress_NonCollapse">
                            <h5 className="custom_sm_font">
                                <strong>{badge.title}</strong>
                            </h5>
                            <div className="progress testings Badges_MileStone_Container">
                                    
                                    <div className="progress-bar" style={{width:`${badge.percentage}%`}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div className="d-flex justify-content-end Badges_MileStone">
                                            <div className="Badges_Medal_Container">
                                                <div 
                                                    className="Badges_Bronze Badges_Medal" 
                                                    style= {badge.percentage >= 65 ? {backgroundColor: "rgb(170, 101, 23)"} : {backgroundColor:"white"}}>
                                                </div>
                                                <div 
                                                    className="Badges_Medal_Ribbon" 
                                                    style={badge.percentage >= 65 ? {display:"block", borderColor: "rgb(170, 101, 23) rgb(170, 101, 23) transparent rgb(170, 101, 23)"} :{display:"none"}}>
                                                </div>
                                            </div>
                                            <div className="Badges_Medal_Container">
                                                <div 
                                                    className="Badges_Silver Badges_Medal" 
                                                    style={badge.percentage >= 85 ? {backgroundColor: "rgb(192, 192, 192)"} : {backgroundColor:"white"}}>
                                                </div>
                                                <div 
                                                    className="Badges_Medal_Ribbon" 
                                                    style={badge.percentage >= 85 ? {display:"block", borderColor: "rgb(192, 192, 192) rgb(192, 192, 192) transparent rgb(192, 192, 192)"} :{display:"none"}}>
                                                </div>
                                            </div>
                                            <div className="Badges_Medal_Container">
                                                <div 
                                                    className="Badges_Gold Badges_Medal" 
                                                    style={badge.percentage >= 100 ? {backgroundColor: "rgb(241, 167, 6)"} : {backgroundColor:"white"}}>
                                                </div>
                                                <div 
                                                    className="Badges_Medal_Ribbon" 
                                                    style={badge.percentage >= 100 ? {display:"block", borderColor: "rgb(241, 167, 6) rgb(241, 167, 6) transparent rgb(241, 167, 6)"} :{display:"none"}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <h6 className="mt-1 mb-3 custom_xs_font">
                                <strong>{badge.current}</strong> left to {badge.placement}!
                            </h6>
                        </div>
                        
                        <div id="leadsAndFollow" className="collapse multi-collapse">
                            <div className="row">
                                {badge.detailSection.map((row,index)=>{
                                    return(
                                        <div className="col col-4 custom_xs_font">
                                            <p className="m-0"><strong>{row.title}</strong></p>
                                            <span><strong>{row.numer}</strong>/{row.denom}</span>
                                        </div>
                                    )}
                                )}
                            </div>
                        </div>
                    </div>
                )}
            )}
        </div>
    );
}

export default Badges;