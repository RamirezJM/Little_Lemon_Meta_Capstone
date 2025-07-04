import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import About from './Views/About'
import Menu from './Views/Menu'
import Reserve from './Views/Reserve'


import Header from './components/Header'
import './App.css'

function App() {
 

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
    </>
  )
}

export default App
