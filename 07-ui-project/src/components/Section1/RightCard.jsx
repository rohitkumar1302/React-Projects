import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl '>
        <img className='h-full w-full object-cover' src={props.img} alt="professional image" />
        <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard