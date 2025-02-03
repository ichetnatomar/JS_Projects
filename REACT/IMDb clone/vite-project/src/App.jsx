import Banner from "./components/Banner"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Watchlist from "./components/Watchlist";
import Movierecommendations from "./components/Movierecommendations";
import MoviesComponent from "./components/MoviesComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar />
        <div>
          <Routes>

            <Route path="/" element={<> <Banner /> <MoviesComponent /> </>} />

            <Route path='/watchlist' element={<> <Watchlist /> </>} />

            <Route path='/recommend' element={<> <Movierecommendations /> </>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
