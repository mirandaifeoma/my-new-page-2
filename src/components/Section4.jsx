import React from 'react';
import {Card} from './Card'


export const Section4 = () => {
  return (
    <div className='pricing'>
      <Pricing1 />
      <Pricing2 />
    </div>
  )
}

const Pricing1 = () => {
  return (
    <div className='text-white mb-4 '>
      <h4 style={{ fontSize: '4vmin' }}>APP PRICING</h4>
    </div>
  )
}

const Pricing2 = () => {
  return (
    <div className='d-flex gap-3 dollarCard'>
      <Card
        height={'60vh'}
        display={'none'}
        fontSize={'5vmin'}
        color={'seagreen'}
        textFont={'2.7vmin'}
        margin={'1.5rem 0 0 0'}
        title='$50'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quidem repellendus quod nostrum aliquid odit vero nobis voluptas repellat debitis necessitatibus, obcaecati perferendis possimus est laudantium modi tempora. Deleniti id nisi neque non facilis accusamus officiis sapiente, aspernatur alias, ad ab magnam hic eius facere qui cupiditate error minima, vol  consectetur, dolorem dolore eligendi nihil?'
      />
      <Card
        height={'60vh'}
        display={'none'}
        fontSize={'5vmin'}
        color={'seagreen'}
        textFont={'2.7vmin'}
        margin={'1.5rem 0 0 0'}
        title='$120'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quidem repellendus quod nostrum aliquid odit vero nobis voluptas repellat debitis necessitatibus, obcaecati perferendis possimus est laudantium modi tempora. Deleniti id nisi neque non facilis accusamus officiis sapiente, aspernatur alias, ad ab magnam hic eius facere qui cupiditate error minima, vol  consectetur, dolorem dolore eligendi nihil?'
      />
      <Card
        height={'60vh'}
        display={'none'}
        fontSize={'5vmin'}
        color={'seagreen'}
        textFont={'2.7vmin'}
        margin={'1.5rem 0 0 0'}
        title='$200'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quidem repellendus quod nostrum aliquid odit vero nobis voluptas repellat debitis necessitatibus, obcaecati perferendis possimus est laudantium modi tempora. Deleniti id nisi neque non facilis accusamus officiis sapiente, aspernatur alias, ad ab magnam hic eius facere qui cupiditate error minima, vol  consectetur, dolorem dolore eligendi nihil? '
      />
    </div>
  )
}