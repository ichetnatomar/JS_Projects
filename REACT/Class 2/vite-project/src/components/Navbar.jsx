import './Navbar.css'

function Navbar() {
  return <>
    <div className="navbar">

      <div className="navbar-logo">Amazon</div>

      <div className="navbar-search">
        <input id = 'searchbar' type="text" placeholder="Search for products" />
        <button type="submit" className="search-btn">Submit</button>
      </div>

      <div className="navbar-links">
        <a href="#deals" className="navbar-link">Today's deals</a>
        <a href="#cart" className="navbar-link">Cart</a>
      </div>
    </div>
  </>

}
export default Navbar;