import React from 'react'
// import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
