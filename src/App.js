import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import $ from 'jquery';
import Popper from 'popper.js';
import UserStatus from './Components/UserStatus';
import { useState } from 'react';



function App() {

  const [open, setOpen] = useState(false);

  let displayProfile = () =>{
    setOpen(!open);
    console.log(open);
  }
  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-primary"
        onClick={displayProfile}
      >
        Open Page
      </button>
    
      <div id="App_UserProfile" className={!open ? "App_User_Container" : "App_User_Container App_Active"}>
        <UserStatus displayProfile={displayProfile}/>
      </div>
      
    </div>
  );
}

export default App;
