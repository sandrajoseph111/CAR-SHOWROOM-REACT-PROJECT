import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Viewp from './components/Viewp'
import { Addcar } from './components/Addcar'
import Searchcar from './components/Searchcar'
import Deletecar from './components/Deletecar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Addcar/>
    <Searchcar />
      <Viewp />
      <Deletecar />
    </>
  )
}

export default App
