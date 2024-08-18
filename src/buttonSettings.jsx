import { createContext, useState } from "react"
import pianoTunes from "./pianoTunes"

pianoTunes()
function buttonSettings(){}
export const globalBtns = createContext()
export const ExportBtns = ({ children }) =>
{
    const [btns, setBtns] = useState(
    {
        btn1: {char: "c", tune: a4},
        btn2: {char: "b", tune: c5},
        btn3: {char: "n", tune: d5}, 
        btn4: {char: "m", tune: e5},
        btn5: {char: ",", tune: f5}, 
        btn6: {char: ".", tune: g5},
        btn7: {char: "/", tune: a5}, 
        btn8: {char: "'", tune: as5},
        btn9: {char: "s", tune: fs4}, 
        btn10: {char: "d", tune: gs4},
        btn11: {char: "f", tune: as4}, 
        btn12: {char: "7", tune: as3},
        btn13: {char: "r", tune: f3}, 
        btn14: {char: "5", tune: fs3},
        btn15: {char: "6", tune: gs3}, 
        btn16: {char: "x", tune: g4},
        btn17: {char: "-", tune: a4},
        btn18: {char: "-", tune: c5},
        btn19: {char: "-", tune: d5}, 
        btn20: {char: "-", tune: e5},
        btn21: {char: "-", tune: f5}, 
        btn22: {char: "-", tune: g5},
        btn23: {char: "-", tune: a5}, 
        btn24: {char: "-", tune: as5},
        btn25: {char: "-", tune: fs4}, 
        btn26: {char: "-", tune: gs4},
        btn27: {char: "-", tune: as4}, 
        btn28: {char: "-", tune: as3},
        btn29: {char: "-", tune: f3}, 
        btn30: {char: "-", tune: fs3},
        btn31: {char: "-", tune: gs3}, 
        btn32: {char: "-", tune: g4}
    })
    return(
        <globalBtns.Provider value={{ btns, setBtns }}>{ children }</globalBtns.Provider>
    )
}

export default buttonSettings