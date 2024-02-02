import React from 'react'

const App = () => {
  return (
    <div id="drum-machine" className='border-4 bg-slate-900 text-white border-green-900 p-10 rounded-lg'>
      <div id="display"></div>
      <div>
        <button className='drum-pad'>Q <audio src='./sounds/Heater-6.mp3' id='Q'></audio></button>
        <button className='drum-pad'>W <audio src='./sounds/Heater-1.mp3' id='W'></audio></button>
        <button className='drum-pad'>E <audio src='./sounds/Heater-2.mp3' id='E'></audio></button>
        <button className='drum-pad'>A <audio src='./sounds/Heater-3.mp3' id='A'></audio></button>
        <button className='drum-pad'>S <audio src='./sounds/Heater-4_1.mp3' id='S'></audio></button>
        <button className='drum-pad'>D <audio src='./sounds/Cev_H2.mp3' id='D'></audio></button>
        <button className='drum-pad'>Z <audio src='./sounds/Dsc_Oh.mp3' id='Z'></audio></button>
        <button className='drum-pad'>X <audio src='./sounds/Kick_n_Hat.mp3' id='X'></audio></button>
        <button className='drum-pad'>C <audio src='./sounds/RP4_KICK_1.mp3' id='C'></audio></button>
      </div>
    </div>
  )
}

export default App