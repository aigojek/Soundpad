import { tuneOptions } from "./pianoTunes";

let timer, time = 0, playing = false, isStopped = false, loopEnabled = false;
let recordedSound = []

export let recording = false;

export function starRecord()
{
    timer = setInterval(() => {time += 10}, 10);
    if(!recording)
    {
        document.querySelector("div#start_record > div.record_active").classList.toggle("settings_toggle")
    }
    recording = true;
}

export function stopRecord()
{
    clearInterval(timer)
    if(recording)
    {
        document.querySelector("div#start_record > div.record_active").classList.toggle("settings_toggle")
    }
    if(recordedSound.length > 0 && recording)
    {
        document.querySelector("div#clear > div.record_active").classList.toggle("settings_toggle")
        document.querySelector("div#edit > div.record_active").classList.toggle("settings_toggle")
    }
    recording = false;
    }

export function readSound(currentTune)
{
    recordedSound.push(time)
    time = 0
    recordedSound.push(currentTune)
}

export function stopPlaying()
{
    if(playing)
    {
        isStopped = !isStopped;
        loopEnabled = false;
    }
}

export function loopRecord()
{
    loopEnabled = !loopEnabled;
    document.querySelector("div#loop > div.record_active").classList.toggle("settings_toggle")
}

export function clearRecord()
{
    if(recordedSound.length > 0)
    {
        document.querySelector("div#clear > div.record_active").classList.toggle("settings_toggle")
        document.querySelector("div#edit > div.record_active").classList.toggle("settings_toggle")
    }
    recordedSound = [];
}

function wait(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function soundRecording()
{
    if(!playing)
    {
        playing = !playing
        for(let i = 0; i <= recordedSound.length; i++)
        {
            if(isStopped) 
            {
                isStopped = !isStopped
                playing = !playing;
                return;
            }
            if(typeof(recordedSound[i]) === "number")
            {
                await wait(recordedSound[i]);
                continue;
            }
            if(typeof(recordedSound[i]) === "string")
            {
                let plsn = tuneOptions.find(o => o.name == recordedSound[i]).value
                if(plsn.paused)
                {
                    plsn.play()
                }else
                {
                    plsn.currentTime = 0
                }
            }
        }
        playing = !playing
        if(loopEnabled)
        {
            soundRecording()
        }
    }
}
export default soundRecording