import './index.css'

function App() {

  return (
   <div className='bg-gray-200 h-screen flex justify-center  '>
    <div className='border  w-115 justify-self-center self-center grid content-end bg-white rounded-b-3xl'>
      <span className='flex justify-center text-5xl font-semibold pt-2'>Timer</span>
      <span className='flex justify-center border-y-1 text-5xl my-5 py-2 pb-3 '>TimeData</span>
      <div className=' bottom-0 flex justify-evenly py-3 '>
        <button className='border border-black bg-green-500 text-white px-5 text-lg py-1 rounded-3xl cursor-pointer'>Start</button>
        <button className='border border-black bg-orange-500 text-white px-5 py-1 rounded-3xl cursor-pointer'>Stop</button>
        <button className='border border-black bg-red-500 text-white px-5 py-1 rounded-3xl cursor-pointer'>Restart</button>
      </div>
    </div>
   </div>
  )
}

export default App
