import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Login } from '../pages/login'
import { Profile } from '../pages/profile'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AppRouter = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<ProtectedRoutes />}>
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
  )
}
