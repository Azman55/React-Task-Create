import React, {useState} from 'react'

function TaskInput() {
    const [task, setTask] = useState('');
    const [data, setData] = useState([]);

  return (
    <div className='border-2 border-stone-400 p-2 m-2 rounded-2xl w-[40%] bg-indigo-200'>
       <h1 className='p-1 m-2 text-xl font-bold'>Create a Task :</h1>
       <input className='border rounded-md p-2 m-2' type='text' placeholder='Enter a Task' value={task} 
       onChange={function(e){
        setTask(e.target.value);
       }} />
       <br />
       <button className='bg-slate-500 rounded-xl p-2 m-2 hover:bg-sky-600 text-white'
       onClick={function(){
        console.log({task});
        setData([...data, task]);
       }}>Submit</button>
       
       <div className='border-2 border-slate-500 p-4 m-2 rounded-md text-orange-950 w-[80%]'>
        {
         data.map(function(item, index){
          return <p key={index}>{item}</p>
         })
        }
       </div>
    </div> 
  )
}

export default TaskInput;