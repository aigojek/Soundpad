import { tuneOptions } from "./pianoTunes"

let rendered_cont = false
let rendered_cont_2 = false
function padSettings()
{
    const selectTune = Array.from(document.getElementsByClassName("tune_input_cont"));
    
    if(!rendered_cont)
    {
        for(let i = 0; i <= 15; i++)
        {
            tuneOptions.forEach(option => selectTune.slice(0, 16)[i].innerHTML += `<input type="button" name="${option.name}" class="tune_input_opt" value="${option.name}"></input>`);
        }
        rendered_cont = true
    }

    if(!rendered_cont_2 && document.querySelector("div#all > div#cont_2") != null)
        {
            for(let i = 0; i <= 15; i++)
            {
                tuneOptions.forEach(option => selectTune.slice(16, 32)[i].innerHTML += `<input type="button" name="${option.name}" class="tune_input_opt" value="${option.name}"></input>`);
            }
            rendered_cont_2 = true
        }
}

export default padSettings