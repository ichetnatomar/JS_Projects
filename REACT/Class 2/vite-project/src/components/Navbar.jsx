import Button from './Button';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {

  const [isLoggedIn, setisLoggedIn] = useState(false); // variable with dafualt  = false, and a setter fn passed to useState

  let user = 'Mark';

  //calls setter fn that toggles state variable, that changes the STATE of the app, hence REACT re-renders the app to reflect changes in UI.
  function toggleisLoggedIn() {
    setisLoggedIn(!isLoggedIn);
  }

  return <>
    <div className="navbar">

      <div className="navbar-logo">Amazon</div>

      <div className="navbar-search">
        <input id='searchbar' type="text" placeholder="Search for products" />
        <button type="submit" className="search-btn">Submit</button>
      </div>

      <div className="navbar-links">
        <a href="#deals" className="navbar-link">Today's deals</a>
        <a href="#cart" className="navbar-link">Cart</a>
      </div>

      {/* if user is logged in, show user, else show SIGN IN  */}
      {(isLoggedIn) ? (<span>Welcome {user}</span>) : (<button className='login-btn' onClick={toggleisLoggedIn}>Sign in</button>)}

    </div>
  </>

}
export default Navbar;