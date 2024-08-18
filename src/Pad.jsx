import React, { useContext, useEffect } from "react";
import { globalBtns } from "./buttonSettings";
import { tuneOptions } from "./pianoTunes";
import { toggleSinglePad, toggleTuneInputCont } from "./globalSettingsBtn";
import padSettings from "./padSettings";
import { readSound, recording } from "./soundRecording";


function Pad(props)
{
    const { btns, setBtns } = useContext(globalBtns);
    let currentTune = tuneOptions.find(t => (t.value.src == Object.keys(btns).map(b => (btns[b].tune))[props.number].src)).name
    useEffect(() => 
    {
        let inputOptions = document.querySelectorAll(`div#tune_${props.id} > input.tune_input_opt`)
        const kDown = (a) => 
        {
            if(document.getElementsByClassName("pad_settings")[0].classList.contains("settings_toggle"))
            {
                if(a.key == props.character)
                {
                    document.getElementById(props.id).classList.add("pad_basic_clicked")
                    if(props.sound.paused)
                    {
                        props.sound.volume = document.getElementById("volume_" + props.id).value
                        props.sound.play()
                        if(recording)
                        {
                            readSound(currentTune)
                        }
                    }else
                    {
                        props.sound.volume = document.getElementById("volume_" + props.id).value
                        props.sound.currentTime = 0
                        if(recording)
                        {
                            readSound(currentTune)
                        }
                    }
                }
            }
        }
        
        const kUp = (a) =>
        {
            if(a.key == props.character)
            {
                document.getElementById(props.id).classList.remove("pad_basic_clicked")
            }
        }

        const closeInput = (event) =>
        {
            if(!event.target.closest(".tune_input") && !event.target.closest(".tune_input_cont") && !event.target.closest(".tune_input_opt"))
            {
                document.querySelectorAll('.tune_input_cont').forEach(element => {element.style.display = "none"});
                changeTune()
            }
        }

        const selectTune = (event) =>
        {
            if(event.target.className == "tune_input_opt")
            {
                document.querySelector(`div#${event.target.parentElement.id} > input.selected_tune`).classList.remove("selected_tune")
                event.target.classList.add("selected_tune")
                event.stopPropagation();
            }
        }
        
        inputOptions.forEach(option => 
        {
            if(option.name == currentTune)
            {
                option.classList.add("selected_tune")
            }
        })

        document.addEventListener('keypress', kDown)
        document.addEventListener('keyup', kUp)
        document.addEventListener('click', closeInput)
        document.addEventListener('click', selectTune)


        padSettings()
        return () => 
        {
            document.removeEventListener('keypress', kDown)
            document.removeEventListener('keyup', kUp)
            document.removeEventListener('click', closeInput)
            document.removeEventListener('click', selectTune)
        }
    }, [props.character, props.id, props.sound])

    function btnPressed()
    {
        if(document.getElementsByClassName("pad_settings")[0].classList.contains("settings_toggle"))
        {
            event.target.classList.add("pad_basic_clicked")
            if(props.sound.paused)
            {
                props.sound.volume = document.getElementById("volume_" + props.id).value
                props.sound.play()
                if(recording)
                {
                    readSound(currentTune)
                }
            }else
            {
                props.sound.volume = document.getElementById("volume_" + props.id).value
                props.sound.currentTime = 0
                if(recording)
                {
                    readSound(currentTune)
                }
            }
        }

        const removeLstnr = () => 
        {
            event.target.classList.remove("pad_basic_clicked")
        }
      
        event.target.addEventListener("mouseup", removeLstnr)
        event.target.addEventListener("mouseout", removeLstnr)
      
        return () => {
            event.target.removeEventListener("mouseup", removeLstnr)
            event.target.removeEventListener("mouseout", removeLstnr)
        }
    }

    const changeChar = () =>
    {
        setBtns(prevBtns => ({...prevBtns, [props.id]: {...prevBtns[props.id], 
                char: document.getElementById("char_" + props.id).value}}))
    }

    const changeTune = () =>
    {
        let inputOptions = document.querySelectorAll(`div#tune_${props.id} > input.tune_input_opt`)
        let currentElement
        inputOptions.forEach(option => 
        {
            if(option.classList.contains("selected_tune"))
            {
                currentElement = option
            }
        })
        setBtns(prevBtns => (
            {...prevBtns, [props.id]: {...prevBtns[props.id], 
                tune: tuneOptions.find(option => option.name == currentElement.value)?.value}}))
    }

    const changeVolume = () =>
    {
        document.getElementById("volume_" + props.id).value
    }

    
    return(
        <>
            <div className="pad_basic" id={props.id} onMouseDown={btnPressed}>
                <p className="p_char">{props.character}</p>
                <p className="p_tune">{currentTune}</p>
                <div className="pad_settings settings_toggle" onClick={toggleSinglePad}></div>
                <div className="tune_input settings_toggle" onClick={() => toggleTuneInputCont(props)}>{currentTune}</div>
                <input maxLength={1} type="text" onChange={changeChar} className="char_input settings_toggle" id={"char_" + props.id} defaultValue={props.character}></input>
                <input type="range" min="0" max="1" step="0.1" onChange={changeVolume} className="tune_volume settings_toggle" id={"volume_" + props.id}/>
            </div>
            <div className="tune_input_cont" id={"tune_" + props.id} style={{display: "none"}}></div>
        </>
    )
}


export default Pad