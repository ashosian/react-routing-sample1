import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import RootLayout from './components/RootLayout'
import { Routes, Route } from 'react-router'
import Detail from './pages/Detail'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='Detail/:idMeal' element={<Detail />} />
      </Route>


    </Routes>
  )
}

export default App
