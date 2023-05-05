import React from 'react'
import styled from 'styled-components'
import back from './images/img2.jpg'
import Maps from './Maps'


const Contact = () => {
  return (
    <Edit>
      <div className='con'> 
       <p>Boho</p>
       <h1>+998 (90) 999-99-99</h1>
      </div>
      <div>
      <Maps/>
      </div>
      
      </Edit> 
  )
}






const Edit = styled.div`
background:url(${back});
min-height: 300px;
padding: 20px 0 0 10px;
.con{
  background: white;
  width: 50%;
  border-radius:10px;
  padding: 10px;
}
p{
  margin: 0;
  font-size: 18px;
}
h1{
  margin: 0;
  font-weight: 400;
  font-size: 20px;
}
`

export default Contact