import React from 'react'
import styled from 'styled-components'
import back from './images/back.jpg'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Edit>
    <div className='nav'>
    <img src={logo} alt=''/>
    <div className='texts'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/o'>O nas</Link>
    </div>
    </div>
    </Edit>
  )
}
const Edit = styled.div`
position: sticky;
top: 0;
@import url('https://fonts.googleapis.com/css2?family=Alkatra&family=Open+Sans:wght@300&display=swap');
width: 100%;
height: 50px;
margin:0 auto;
background:url(${back});
border-bottom: 2px solid blueviolet;
img{
    padding: 5px 0;
    width: 40px;
    height:40px;
    border-radius:50%;
}
.texts{
    display: flex;
    gap: 0 10px;
}
.texts a {
    text-decoration: none;
    color: blueviolet;
    font-family: 'Alkatra', cursive;
}
.nav{
    align-items: center;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}
`
export default Navbar