import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Views/Home'
import About from './Views/About'
import Menu from './Views/Menu'
import Reserve from './Views/Reserve'


import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
 const location = useLocation()
 useEffect(() =>{
  window.scrollTo(0, 0)
 }, [location.pathname])


  return (
    <>
       <Header/>
       <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Reserve' element={<Reserve/>}/>
        </Routes>
       </main>
       <Footer/>
    </>
  )
}

export default App
