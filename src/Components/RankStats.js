import React from 'react';
import './RankStats.css';

//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Popover from 'react-bootstrap/Popover'
//import Button from 'react-bootstrap/Button';
//import * as bootstrap from 'bootstrap';

function RankStats(){
    /*
    const popoverFocus = (
        <Popover id="popover-trigger-focus" title="Popover bottom">
          Holy guacamole! Check this info.
        </Popover>
      );
      <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
      <Button>Focus</Button>
  </OverlayTrigger>
*/

    return(
        <div className="RankStats">
            <div className="row d-flex justify-content-around align-items-center RankStats_Border">
                <div className="col col-4 text-center mt-2">
                    <h5><strong>#3</strong></h5>
                    <p className="custom_xs_font text-secondary">April Rank</p>
                </div>
                <div className="col col-4 text-center"> 
                    <button type="button" className="btn btn-none" data-container="body" data-toggle="popover" data-placement="bottom" data-content="testing testing">
                        <strong className="custom_color_blue">400
                        <i className="bi bi-chevron-down">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </i>
                        </strong> 
                    </button>

                    <br/>
                    <p className="custom_xs_font text-secondary">Points in April</p>
                </div>
                <div className="col col-4 text-center">
                    <button type="button" className="btn btn-none" data-container="body" data-toggle="popover" data-placement="bottom" data-content="testing testing">
                        <strong className="custom_color_blue">
                            33.1K
                            <i className="bi bi-chevron-down">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </i>
                        </strong>
                    </button>

                    <br/>
                    <p className="custom_xs_font text-secondary">Total Points</p>
                </div>
            </div>
        </div>
    );
}

export default RankStats;