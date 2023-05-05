import React from 'react'
import styled from 'styled-components'
import back from './images/img2.jpg'
const About = () => {
  return (
    <Edit>
         <div className='about'>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis fugiat cupiditate temporibus ex quia numquam enim, dicta earum sed impedit illum asperiores, obcaecati ducimus?</h1>
         </div>
         <div className='a2'>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis fugiat cupiditate temporibus ex quia numquam enim, dicta earum sed impedit illum asperiores, obcaecati ducimus?</h1>
         </div>
         </Edit>
  )
}
const Edit = styled.div`
background:url(${back});
min-height: 300px;
.about{
  padding: 20px 0 0 20px;
  width: 70%;
}
.a2{
  width: 70%;
  margin: 10px 20px 0 95px;
  right: 0;
}
h1{
  font-size: 14px;
  font-weight: 300;
  border-radius: 10px;
  margin: 0 auto;
  background: white;
  padding: 20px;
}
`
export default About