import React from 'react';
import './LeaderBoard.css'
import ProfileBorder from './ProfileBorder';

import {rankData} from '../Data/UserData.js';

function LeaderBoard(){

    return(
        <div className="LeaderBoard">
            <h6 className="my-3"><strong><small>April Ranking</small></strong></h6>
            {rankData[0].person.map((peeps,index) => {
                return(
                    <div className="accordion" id="accordionExample" key={index}>
                        <div className="card">
                            <div 
                                type="button" 
                                id="headingOne" 
                                className="card-header LeaderBoard_First" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#collapse${index}`} 
                                aria-expanded="true" 
                                aria-controls="collapseOne"
                            >
                                <div className="row d-flex align-items-center">
                                    <div className="col col-8 d-flex align-items-center">
                                        <div className="col col-3 px-2">
                                            <ProfileBorder avatar={peeps.icon} />
                                        </div>
                                        <span className="px-3 custom_sm_font"><strong><small>{peeps.name}</small></strong></span>
                                    </div>
                                    <div className="col col-4 d-flex justify-content-end">
                                        <span className="custom_xs_font text-secondary">{peeps.totalPoint} pts</span>
                                    </div>
                                    <div className="LeaderBoard_RankNumber">
                                        <span>{index+1}</span>
                                    </div>
                                </div>
                                    
                            </div>
                            <div 
                                id={`collapse${index}`} 
                                className="collapse" 
                                aria-labelledby="headingOne" 
                                data-parent="#accordionExample"
                            >
                                <div className="card-body">
                                    <div>
                                         {/*Section for the current medal for each category */}
                                        <div className="LeaderBoard_Medal_Container">
                                            <div className={`LeaderBoard_Medal LeaderBoard_${peeps.medal.leads}`}></div>
                                            <div className={`LeaderBoard_Medal_Ribbon LeaderBoard_${peeps.medal.leads}_Ribbon`}></div>
                                        </div>
                                        <h6 className="custom_xs_font mx-3">Leads &amp; Follow ups</h6>
                                    </div>
                                    <div>
                                        <div className="LeaderBoard_Medal_Container">
                                            <div className={`LeaderBoard_Medal LeaderBoard_${peeps.medal.appoint}`}></div>
                                            <div className={`LeaderBoard_Medal_Ribbon LeaderBoard_${peeps.medal.appoint}_Ribbon`}></div>
                                        </div>
                                        <h6 className="custom_xs_font mx-3">Appointments &amp; showings</h6>
                                    </div>
                                    <div>
                                        <div className="LeaderBoard_Medal_Container">
                                            <div className={`LeaderBoard_Medal LeaderBoard_${peeps.medal.move}`}></div>
                                            <div className={`LeaderBoard_Medal_Ribbon LeaderBoard_${peeps.medal.move}_Ribbon`}></div>
                                        </div>
                                        <h6 className="custom_xs_font mx-3">Move-ins &amp; Renewals </h6>
                                    </div>

                                    {/* To display the stats for every person on the leaderboard */}
                                    <div className="LeaderBoard_Stats">
                                        <div className="d-flex justify-content-between">
                                            <span><strong><small>Point Summary</small></strong></span>
                                            <span><strong><small>Points</small></strong></span>
                                        </div>

                                        <div className="row d-flex align-items-center">
                                            <div className="col col-8 d-flex align-items-center pt-2">
                                                <div className="col col-3 custom_sm_font LeaderBoard_CustomNum text-center">
                                                    {peeps.pointSum.lead.cur}
                                                </div>
                                                <span className="px-2 custom_sm_font"><small>New Leads / Prospects</small></span>
                                            </div>
                                            <div className="col col-4 d-flex justify-content-end">
                                                <span className="custom_xs_font">{peeps.pointSum.lead.point}</span>
                                            </div>
                                        </div>

                                        <div className="row d-flex align-items-center">
                                            <div className="col col-8 d-flex align-items-center pt-2">
                                                <div className="col col-3 custom_sm_font LeaderBoard_CustomNum text-center">
                                                    {peeps.pointSum.convert.cur}
                                                </div>
                                                <span className="px-2 custom_sm_font"><small>Convert Leads to Lease</small></span>
                                            </div>
                                            <div className="col col-4 d-flex justify-content-end">
                                                <span className="custom_xs_font">{peeps.pointSum.convert.point}</span>
                                            </div>
                                        </div>

                                        <div className="row d-flex align-items-center">
                                            <div className="col col-8 d-flex align-items-center pt-2">
                                                <div className="col col-3 custom_sm_font LeaderBoard_CustomNum text-center">
                                                    {peeps.pointSum.follow.cur}
                                                </div>
                                                <span className="px-2 custom_sm_font"><small>Follow-ups</small></span>
                                            </div>
                                            <div className="col col-4 d-flex justify-content-end">
                                                <span className="custom_xs_font">{peeps.pointSum.follow.point}</span>
                                            </div>
                                        </div>

                                        <div className="row d-flex align-items-center">
                                            <div className="col col-8 d-flex align-items-center pt-2">
                                                <div className="col col-3 custom_sm_font LeaderBoard_CustomNum text-center">
                                                    {peeps.pointSum.unit.cur}
                                                </div>
                                                <span className="px-2 custom_sm_font"><small>Unit Shows</small></span>
                                            </div>
                                            <div className="col col-4 d-flex justify-content-end">
                                                <span className="custom_xs_font">{peeps.pointSum.unit.point}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default LeaderBoard;