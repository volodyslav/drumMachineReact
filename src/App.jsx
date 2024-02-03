import { useEffect, useState } from "react"

const App = () => {
  const [display, setDisplay] = useState("")

  const buttons = [
    {
      id: 0,
      title: "Q",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      title_id: "Heater-1"
    },
    {
      id: 1,
      title: "W",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      title_id: "Heater-2"
    },
    {
      id: 2,
      title: "E",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      title_id: "Heater-3"
    },
    {
      id: 3,
      title: "A",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      title_id: "Heater-4"
    },
    {
      id: 4,
      title: "S",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      title_id: "Heater-6"
    },
    {
      id: 5,
      title: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      title_id: "DSC_OH"
    },
    {
      id: 6,
      title: "Z",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      title_id: "Kick-n-hat"
    },
    {
      id: 7,
      title: "X",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      title_id: "RP4-Kick"
    },
    {
      id: 8,
      title: "C",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      title_id: "cev-h2"
    }
  ]

  const playSound = (title) => {
    const sound = document.getElementById(title)
    if(sound){
      sound.play()
      buttons.map((button) => {
        if(button.title === title){
          setDisplay(button.title_id)
        }
      })
    }
   
    
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const element = e.key.toUpperCase()
      const allElements = ["W", "Q", "E", "A", "S", "D", "Z", "X", "C"]
      if(allElements.includes(element)){
        playSound(element)
      }
    })
  }, [])

  return (
    <div id="drum-machine" className='border-4 shadow-lg flex shadow-black space-x-4 bg-slate-900 text-white border-green-900 p-10 rounded-lg'>
      <div className=' grid grid-cols-3'>
      {buttons.map(button => (
        <div key={button.id} id={button.title_id} onClick={() => playSound(button.title)} className='drum-pad'><audio className="clip" src={button.audio} id={button.title}></audio>{button.title}</div>
      ))}
      </div>
      <div id="display" className=' border border-gray-600 pt-2 m-2 bg-white rounded-lg min-w-40 text-center  h-10 text-black '>{display}</div>
    </div>
  )
}

export default App