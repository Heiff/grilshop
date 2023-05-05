import React from 'react'
import img1 from './cardimage/1.jpg'
import img2 from './cardimage/2.jpg'
import img3 from './cardimage/3.jpg'
import img4 from './cardimage/4.jpg'
import back from './images/img2.jpg'
import styled from 'styled-components'


const Home = () => {
  return (
  
    <Edit>
      <div className='home'>
      <div className='cards'>
        <div className='card'>
        <img src={img1} alt=''/>
        <h1>futbolka for girl</h1>
        <div className='lok'>
        <h2>sena: 20$</h2>
        <p>lokatsiya</p>
        </div>
        <h3>tolka v nalici sadsad sadasd w wadada wadaasd www w</h3>
        </div>
        <div className='card'>
        <img src={img2} alt=''/>
        <h1>futbolka for girl</h1>
        <div className='lok'>
        <h2>sena: 20$</h2>
        <p>lokatsiya</p>
        </div>
        <h3>tolka v nalici sadsad sadasd w wadada wadaasd www w</h3>
        </div>
        <div className='card'>
        <img src={img3} alt=''/>
        <h1>futbolka for girl</h1>
        <div className='lok'>
        <h2>sena: 20$</h2>
        <p>lokatsiya</p>
        </div>
        <h3>tolka v nalici sadsad sadasd w wadada wadaasd www w</h3>
        </div>
        <div className='card'>
        <img src={img4} alt=''/>
        <h1>futbolka for girl</h1>
        <div className='lok'>
        <h2>sena: 20$</h2>
        <p>lokatsiya</p>
        </div>
        <h3>tolka v nalici sadsad sadasd w wadada wadaasd www w</h3>
        </div>
      </div>
      </div>
      </Edit>
  )
}

const Edit = styled.div`
.home{
  background: url(${back});
}
.card h1{
  padding: 3px 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-size: 14px;
}
.lok{
  align-items: center;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.lok p{
margin: 0;
}
.card h2{
  margin: 0;
  font-size: 12px;
}
.card h3{
  padding: 3px 10px 0 10px;
  margin: 0;
  font-size: 12px;
}
.cards{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 0 10px;
}
.card{
  border: 2px solid gray;
  border-radius:10px; 
  background: white;
  width: 100%;
  margin: 10px auto;
  padding: 7px 0;
}
.card img{
  border-radius: 7%;
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 200px;
}
`
export default Home