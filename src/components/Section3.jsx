import React from 'react';
import {Card} from '../components/Card'


export const Section3 = () => {
  return (
    <div
      style={{ width: '90%', margin: 'auto', padding: '2rem 0' }}
    >
      <Screenshoot1 />
      <Screenshoot2 />
    </div>
  )
}

 const Screenshoot1 = () => {
   return (
     <div className='text-white m-4'>
       <h4 style={{ marginBottom: '1rem', fontSize: '4vmin' }}>
         APP ScreenShoots
       </h4>
       <p style={{ marginBottom: '4rem', fontSize: '3vmin' }}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita
         officia, unde tempore ipsum mollitia molestiae facilis? Ratione
         dignissimos saepe sint id dolores voluptatem accusantium? sint id
         dolores voluptatem accusantium?{' '}
       </p>
     </div>
   )
 }

 const Screenshoot2 = () => {
   return (
     <div className='row  gap-3  houseCard'>
       <Card
         width={'21vw'}
         height={'70vh'}
         CardBody={'none'}
         buttonDisplay={'none'}
         img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGPsOcqp1Tqu6-cHUxQwYGIFrXkAyfM7YxA&usqp=CAU'
       />
       <Card
         width={'21vw'}
         height={'70vh'}
         CardBody={'none'}
         buttonDisplay={'none'}
         img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLA5aYpIIdy-or4HXW_Sv666SHUmFQXJ1AvQ&usqp=CAU'
       />
       <Card
         width={'21vw'}
         height={'70vh'}
         CardBody={'none'}
         buttonDisplay={'none'}
         img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDM80hFGa2U5zQ4PqvNi98EJLK_sTSy6-2nA&usqp=CAU'
       />
       <Card
         width={'21vw'}
         height={'70vh'}
         CardBody={'none'}
         buttonDisplay={'none'}
         img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUojk_aZnOj_kL_MYALiB7iSBX2MW-kdk9A&usqp=CAU'
       />
     </div>
   )
 }

