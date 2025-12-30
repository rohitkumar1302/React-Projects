import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='text-2xl bg-white h-10 w-10 rounded-full flex items-center justify-center'>{props.id+1}</h2>
            <div className=''>
                <p className='text-xg leading-relaxed mb-14 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque et molestias est explicabo voluptas.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' px-4 py-2 rounded-full text-white font-semibold'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' px-4 py-2 rounded-full text-white font-semibold'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div> 
  )
}

export default RightCardContent