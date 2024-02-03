import { useState } from "react"

const App = () => {
  const [display, setDisplay] = useState("")

  const buttons = [
    {
      id: 0,
      title: "Q",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      id: 1,
      title: "W",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      id: 2,
      title: "E",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      id: 3,
      title: "A",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      id: 4,
      title: "S",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      id: 5,
      title: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      id: 6,
      title: "Z",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      id: 7,
      title: "X",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      id: 8,
      title: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ]

  return (
    <div id="drum-machine" className='border-4 shadow-lg flex shadow-black space-x-4 bg-slate-900 text-white border-green-900 p-10 rounded-lg'>
      <div className=' grid grid-cols-3'>
      {buttons.map(button => (
        <button key={button.id} className='drum-pad' ><audio src={button.audio} id={button.title}></audio>{button.title}</button>
      ))}
      </div>
      <div id="display" className=' border border-gray-600 p-4 mt-2 bg-white rounded-lg min-w-40 h-10 text-black '>{display}</div>
    </div>
  )
}

export default App