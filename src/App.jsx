import React, { useState, useContext } from "react"
import buttonSettings, { globalBtns } from "./buttonSettings.jsx"
import globalSettingsBtn, { togglePadSettings, toggleSoundRecording } from "./globalSettingsBtn.jsx"
import Pad from "./Pad.jsx"
import soundRecording, { clearRecord, loopRecord, starRecord, stopPlaying, stopRecord } from "./soundRecording.jsx"

function App() 
{
  buttonSettings()
  const { btns } = useContext(globalBtns)
  const [addCont2, setCont2] = useState(false)
  const addNewCont = () => {setCont2(true)}

  return(
    <>
    <div id="all">
      <div id="record_cont" className="settings_toggle">
        <div id="play_record" title="Play" className="record_btn" onClick={soundRecording}><div className="record_active settings_toggle"></div></div>
        <div id="stop_playing_record" title="Pause" className="record_btn" onClick={()=> stopPlaying()}></div>
        <div id="loop" title="Loop" className="record_btn"onClick={() => loopRecord()}><div className="record_active settings_toggle"></div></div>
        <div id="start_record" title="Start recording" className="record_btn" onClick={() => starRecord()}><div className="record_active settings_toggle"></div></div>
        <div id="stop_record" title="Stop recording" className="record_btn" onClick={() => stopRecord()}></div>
        <div id="clear" title="Clear" className="record_btn"onClick={() => clearRecord()}><div className="record_active settings_toggle"></div></div>
        <div id="edit" title="Edit" className="record_btn">NOT WORKING YET<div className="record_active settings_toggle"></div></div>
      </div>   
      <div id="global_settings_btn" onClick={globalSettingsBtn}></div>
      <div id="global_settings_options" className="global_settings_toggle settings_toggle">
        <div id="global_option_1" className="global_options" onClick={togglePadSettings}> Toggle Pad settings </div>
        <hr/>
        <div id="global_option_2" className="global_options" onClick={() => addNewCont()}> Add New Cont </div>
        <hr/>
        <div id="global_option_3" className="global_options" onClick={() => toggleSoundRecording()}> Toggle Sound Record </div>
      </div>
      <div id="cont">
        {Object.keys(btns).slice(0, 16).map((b, index) => (<Pad key={index} number={index} character={btns[b].char} sound={btns[b].tune} id={b}/>))}
      </div>
      {addCont2 && (
        <div id="cont_2">
          {Object.keys(btns).slice(16, 32).map((b, index) => (<Pad key={index} number={Number(index) + 16} character={btns[b].char} sound={btns[b].tune} id={b}/>))}
        </div>
      )}
    </div>
    </>
  )
}


export default App