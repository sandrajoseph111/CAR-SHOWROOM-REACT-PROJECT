import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Viewp from './components/Viewp'
import { Addcar } from './components/Addcar'
import Searchcar from './components/Searchcar'
import Deletecar from './components/Deletecar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element={<Addcar/>}/>
    <Route path='/de' element={<Deletecar/>}/>
    <Route path='/se' element={<Searchcar/>}/>
    <Route path='/vi' element={<Viewp/>}/>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
