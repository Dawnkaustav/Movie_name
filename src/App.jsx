import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Style from './App.module.css'
import Header from './Component/Shared/Header/Header'
import Home from './Pages/Home/Home';
import Movie from './Pages/Movies/Movie';
import History from './Pages/History/History';
import Tickets from './Pages/Tickets/Tickets';
import Login from './Pages/Login/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <Header/>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movie />} />
          <Route path="/History" element={<History />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
