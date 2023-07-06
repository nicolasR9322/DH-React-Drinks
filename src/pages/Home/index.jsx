import React from 'react'
import { SearchForm } from '../../components/SearchForm'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'


export const Home = () => {
  const {user,logOut} = useUser()
  
  return (
    <>
    <SearchForm />
    </>
  )
}
