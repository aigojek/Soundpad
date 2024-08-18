
function globalSettingsBtn()
{
    document.getElementById("global_settings_options").classList.toggle("settings_toggle")
}

export const toggleSinglePad = () =>
    {
        event.target.parentElement.querySelector("div.pad_basic > div.tune_input").classList.toggle("settings_toggle")
        event.target.parentElement.querySelector("div.pad_basic > input.char_input").classList.toggle("settings_toggle")
        event.target.parentElement.querySelector("div.pad_basic > input.tune_volume").classList.toggle("settings_toggle")
        event.target.parentElement.querySelector("div.pad_basic > p.p_tune").classList.toggle("settings_toggle")
        event.target.parentElement.querySelector("div.pad_basic > p.p_char").classList.toggle("settings_toggle")
    }

export function togglePadSettings()
{
    let set_btns = document.getElementsByClassName("pad_settings")
    for(let i = 0; i < set_btns.length; i++)
    {
        set_btns[i].classList.toggle("settings_toggle")
    }
}

export function toggleTuneInputCont(props)
{
    const inputConts = document.getElementsByClassName("tune_input_cont")

    if(inputConts[props.number].style.display == "none")
    {
        inputConts[props.number].style.display = "grid"
    }else if(inputConts[props.number].style.display == "grid")
    {
        inputConts[props.number].style.display = "none"
    }
}

export function toggleSoundRecording()
{
    document.getElementById("record_cont").classList.toggle("dis_flex")
    document.getElementById("record_cont").classList.toggle("settings_toggle")
}

export default globalSettingsBtn