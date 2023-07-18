import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Main from './Main'
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Main/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
