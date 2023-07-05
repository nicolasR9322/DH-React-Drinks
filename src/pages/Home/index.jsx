import React from 'react'
import { SearchForm } from '../../components/SearchForm'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'

export const Home = () => {
  const {user,logOut} = useUser()
  
  return (
    
    <>
    {/* <SearchForm /> */}
      <h1>Home</h1>
      <hr />
      {
        user ?
        (<>
        <h2>Hola! {user}</h2>
        <button onClick={() => logOut()}>salir</button>
        </>)
        :
        (
          <Link to={"/login"}>
          ingresá
          </Link>
        )

      }
      <br />
    </>
  )
}
