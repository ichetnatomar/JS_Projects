
import { Link } from 'react-router-dom';
import logo from '../assets/movie-logo.png';


const Navbar = () => {
  return (
    <div className='flex space-x-8 pl-3 py-4 items-center'>
      <img className='w-[70px], h-[70px]' src={logo} alt="logo" />
      <Link to="/" className='text-3xl text-blue-500 font-bold'>Movies</Link>
      <Link to="/watchlist" className='text-3xl text-blue-500 font-bold'>Watchlist</Link>
      <Link to="/recommend" className='text-3xl text-blue-500 font-bold'>Movie Recommendations AI</Link>
    </div>
  )
}

export default Navbar;