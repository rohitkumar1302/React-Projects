import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 overflow-auto rounded-4xl flex flex-nowrap gap-10 p-6 '>
    
    {props.users.map(function(elem,idx){
      return <RightCard color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
    })}
    </div>
  )
}

export default RightContent