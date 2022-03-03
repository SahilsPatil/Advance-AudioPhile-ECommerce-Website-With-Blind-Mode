let utter = new SpeechSynthesisUtterance();

let blindmode_data = [/*{ blind_mode: "false" }*/];
let allblindmode_data = localStorage.getItem("allblindmode_data");
if (allblindmode_data == null) {
    utter.text = "Welcome to audiophila! Press Enter to Enable Blind Mode";
    utter.lang = `en-IN`;
    window.speechSynthesis.speak(utter);
    let want_blind_mode = confirm("Enable Blind Mode");
    console.log(want_blind_mode);
    if (want_blind_mode) {
        blindmode_data = [{ blind_mode: "true" }];
    } else {
        blindmode_data = [{ blind_mode: "false" }];
    }
    blindmode_data = JSON.stringify(blindmode_data)
    localStorage.setItem("allblindmode_data", blindmode_data);
}


function blind_mode_cheaker() {
    allblindmode_data = localStorage.getItem("allblindmode_data");
    if (allblindmode_data == null) { /*confirm("Blind Mode")*/ }
    else {
        blindmode_data = JSON.parse(allblindmode_data);
        if (blindmode_data[0].blind_mode == "true") {
            utter.lang = `en-${blindmode_lang.value}`;
            utter.volume = blindmode_volume.value;
            utter.rate = blindmode_speed.value;
            return 1;
        }
        else {
            return 0;
        }

    }
}





// window.onload =  () => {
//     setTimeout(() => {
//         utter.text = "Welcome to AudioPhilla, Press enter to continue Blind Mode, else wait for 5 seconds"
//         window.speechSynthesis.speak(utter);
//         confirm("Welcome to AudioPhilla\n Press Ok to continue Blind Mode,\n else wait for 5 seconds")
//     }, 500);
// }






function play_audio(text) {
    blind_mode_cheaker()
    if (blind_mode_cheaker() == 1) {
        utter.text = text;
        window.speechSynthesis.speak(utter);
    }
}
function stop_audio() {
    if (blind_mode_cheaker() == 1) {
        window.speechSynthesis.cancel();
    }
}

function speaker(text) {
    if (blind_mode_cheaker() == 1) {
        utter.text = text.innerText
        window.speechSynthesis.speak(utter);
    }
}
function stop_speaker() {
    if (blind_mode_cheaker() == 1) {
        window.speechSynthesis.cancel();
    }
}
function read_input(text) {
    if (blind_mode_cheaker() == 1) {
        utter.text = text.value;
        window.speechSynthesis.speak(utter);
    }
}