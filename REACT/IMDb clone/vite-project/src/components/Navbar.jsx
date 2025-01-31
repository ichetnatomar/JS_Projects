
import logo from '../assets/movie-logo.png';

const Navbar = () => {
  return (
    <div className='flex space-x-8 pl-3 py-4 items-center'>
      <img className='w-[70px], h-[70px]' src={logo} alt="logo" />
      <a href="/" className='text-3xl text-blue-500 font-bold'>Movies</a>
      <a href="/watchlist" className='text-3xl text-blue-500 font-bold'>Watchlist</a>
      <a href="/recommend" className='text-3xl text-blue-500 font-bold'>Movie Recommendations AI</a>
    </div>
  )
}

export default Navbar;