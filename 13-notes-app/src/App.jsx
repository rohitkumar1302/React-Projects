import React from 'react'
import { useState } from 'react'

const App = () => {

    const [title, setTitle] = useState("")

    const [detail, setDetail] = useState("")

    const [task, setTask] = useState([]) //array to store all the notes

  const submitHandler = (e) =>{
    e.preventDefault();

    const copyTask = [...task] //copying the task array

    copyTask.push({title, detail}) //pushing new note to the copied array
    setTask(copyTask) //updating the task array with the copied array
    console.log(task);
    

    // console.log(title, detail);
 
    setTitle("");
    setDetail("");

  }
   const deleteHandler = (idx) =>{
    const copyTask= [...task]; //copying the task array
    copyTask.splice(idx,1); //deleting the note at index idx
    setTask(copyTask); //updating the task array with the copied array

   }



  return (
    <div className='h-screen lg:flex bg-black text-white overflow-auto'>
      <form onSubmit={(e) =>{
        submitHandler(e)

      }} className='p-10 flex flex-col gap-5 lg:w-1/2 items-start'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
          <input type="text" 
          placeholder='Enter Notes Heading'
          className='p-3 border outline-none w-full'  
          value={title}
          onChange={(e) =>{
            setTitle(e.target.value)
          }}
          />
          <textarea type="text"
          placeholder='Write Details'
          className='p-3 border outline-none w-full'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
           />
          <button className='p-3 border outline-none rounded w-full hover:bg-white hover:text-black transition-all cursor-pointer active:scale-95'
          >Add Note</button>
      </form>
            <div className='lg:w-1/2 lg:border-l-2 p-10'>
              <h1 className='text-3xl font-bold'>Recent Notes</h1>
                <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto items-start justify-start'>
                  {task.map(function(elem,idx){

                    return <div key={idx} className='h-52 w-40 flex flex-col justify-between rounded-xl bg-center bg-contain bg-no-repeat p-5 text-black bg-[url("data:image/png;base64,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")]' >
                     <div>
                        <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                        <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.detail}</p>
                     </div>
                     <button onClick={() =>{
                          deleteHandler(idx)
                     }} className='w-full cursor-pointer font-bold bg-amber-400 text-white py-1 rounded active:scale-95'>Delete</button>
                    </div>
                  })}
                </div>
            </div>
          </div>
  )
}

export default App