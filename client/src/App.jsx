import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import BlogPage from './pages/BlogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/create' Component={Create} />
        <Route path='update/:id' Component={Update} />
        <Route path='/fullblog/:id' Component={BlogPage}  />
        
      </Routes>
    </>
  )
}

export default App
