import { useState } from 'react'
import './App.css'

function App() {
  const [Color, setColor] = useState("Olive")

  return (
    <>
      <div className='w-full h-screen duration-200 text-white flex flex-wrap alignitem-center justify-center' style={{backgroundColor:Color}}>Background Colour
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2'>
   <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"red"} } onClick={()=>setColor("red")}>Red</button>
   <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"black"} } onClick={()=>setColor("black")}>black</button>
   <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"pink"} } onClick={()=>setColor("pink")}>pink</button>
   <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"blue"} } onClick={()=>setColor("blue")}>blue</button>
   <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"green"} } onClick={()=>setColor("green")}>green</button>
   <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"yellow"} } onClick={()=>setColor("yellow")}>yellow</button>

        </div>
      </div>
      </div>
    </>
  )
}

export default App
