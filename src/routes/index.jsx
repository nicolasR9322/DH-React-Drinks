import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Login } from '../pages/login'

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
  )
}
