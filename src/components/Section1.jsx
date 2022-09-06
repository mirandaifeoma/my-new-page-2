import React from 'react';
import { Card } from '../components/Card'


export const Section1 = () => {
  return (
    <div className='text-white pt-4 p-4'>
      <Header />
      <div className='d-flex welcome' style={{ marginTop: '2rem' }}>
        <Welcome1 />
        <Welcome2 />
      </div>
    </div>
  )
}


const Header = () => {
  return (
    <div className='text-white pt-4 mb-4' >
      <h1 style={{ fontSize: '6vmin' }}>WELCOME TO NEW APP</h1>
    </div>
  )
}




const Welcome1 = () => {
  return (
    <div
      className=' col text-start welcome1 me-4 text-white'
      style={{ paddingTop: '5rem', fontSize: '3vmin' }}
    >
      <h4 style={{ fontSize: '5vmin' }}>
        This is my first React task to build
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        pariatur ullam omnis atque maiores labore nulla necessitatibus
        blanditiis nam ex.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga ad
        exercitationem voluptatum est tempora nisi corrupti placeat saepe ipsum
        rem repellat esse, delectus similique.
      </p>
    </div>
  )
}

 const Welcome2 = () => {
   return (
     <div className='' style={{}}>
       <div className='row gap-3 welcome2'>
         <Card
           width={'19vw'}
           height={'70vh'}
           fontSize={'3vmin'}
           buttonDisplay={'none'}
           media500px = {'@media(max-width:"500px"){outline:8px solid yellow}}'}
           img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBf0oIP3jKFyRDmb_P5rRtp__Y1XiQ8lTpjw&usqp=CAU'
           title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga ad
        exercitationem voluptatum'
           content='really a good girl'
         />
         <Card
           width={'19vw'}
           height={'70vh'}
           fontSize={'3vmin'}
           buttonDisplay={'none'}
           img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjtRXgalQ1xxe__KTN8gwoBa49RG2cEXS0g&usqp=CAU'
           title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga ad
        exercitationem voluptatum'
           content='meet at gym'
         />
       </div>
     </div>
   )
 }
