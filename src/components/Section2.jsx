import React from "react"
import {Button} from '../components/Button'

export const Section2 = () => {
  return (
    <div>
      < Goodbye1/>
    </div>
  );
}



const Goodbye1 = () => {
  return (
    <div
      style={{ backgroundColor: 'seagreen' }}
      className='text-white text-center goodbyeText'
    >
      <p style={{ fontSize: '2.5vmin' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid.
        Impedit adipisci quia pariatur fuga suscipit tempora non dolorum, in
        aperiam ipsam porro id velit aspernatur eveniet et nulla nihil. Odit
        necessitatibus magnam ut, inventore omnis sapiente ab recusandae, facere
        quam vero iure incidunt quidem illum ipsa blanditiis, debitis adipisci
        non fugiat maxime. Nam iste molestiae eligendi fugit saepe officiis
        maxime aliquid nobis, possimus voluptate, quo, porro at rem ab? debitis
        adipisci non fugiat maxime. Nam iste molestiae eligendi fugit saepe
        officiis maxime aliquid nobis, possimus voluptate, quo, porro at rem ab?
      </p>
      <div className='btn-group mt-4' role='group' aria-label='Basic example'>
        {/* <button
          type='button'
          className='btn btn-dark rounded-pill px-4'
          style={{ fontSize: '2vmin' }}
        >
          Click now
        </button> */}
        < Button 
        text="Submit"
        backgroundColor={"black"}
        color={"white"}
        padding={".5rem 3rem"}
        border={"none"}
        borderRadius={"1.5rem"}
        />
      </div>
    </div>
  )
}
