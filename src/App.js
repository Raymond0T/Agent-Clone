import { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import $ from 'jquery';
import Popper from 'popper.js';
import UserStatus from './Components/UserStatus';
import RankStats from './Components/RankStats';
import Badges from './Components/Badges';
import LeaderBoard from './Components/LeaderBoard';



function App() {

  const [open, setOpen] = useState(false);

  let displayProfile = () =>{
    setOpen(!open);
    //console.log(open);
  }
  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-primary"
        onClick={displayProfile}
        style={open ? {display:"none"} : {display:"block"}}
      >
        Open Page
      </button>
    
      <div id="App_UserProfile" className={!open ? "App_User_Container" : "App_User_Container App_Active"}>
        <UserStatus displayProfile={displayProfile}/>
        <div className="App_Detail_Container">
          <RankStats />
          <Badges />
          <LeaderBoard />
        </div>
      </div>
      
    </div>
  );
}

export default App;
