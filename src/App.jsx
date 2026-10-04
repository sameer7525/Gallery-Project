import React, { useState } from 'react'
import axios from 'axios'

export default function App() {

  const[userdata,setUserdata] = useState([]);

  const getData = async()=>{
   const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=12')

   setUserdata(response.data)

  //  console.log(response.data)

  }

  let printUserdata = 'No User Available'

  if(userdata.length>0){
    printUserdata = userdata.map(function(elem,idx){
      return <div className='h-40 w-44 bg-white '>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />

      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white'>
      <button onClick={getData}
      className='bg-green-400 rounded-xl font-bold m-4 p-3 active:scale-95'>Get Data</button>

      <div className='flex flex-wrap gap-4 p-4'>
        {printUserdata}
      </div>

    </div>
  )
}
