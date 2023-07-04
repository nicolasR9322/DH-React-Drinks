import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
  )
}
