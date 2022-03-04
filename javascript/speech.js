let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.lang = 'en-IN';

recognition.onstart = function () {
    console.log('Listnig Started! Speak...');
}
recognition.onerror = function (event) {
    console.log('Sorry, Try Again');
}
recognition.onspeechend = function () {
    console.log('Listing Stoped!');
}
recognition.onresult = (event) => {
    let transcript = event.results[0][0].transcript;
    transcript = transcript.replace(".", "").toLowerCase();
    console.log(transcript);

    switch (transcript) {
        case "home":
            document.location.href = '../../'
            play_audio('Opening HomePage!')
            break;
        case "headphones":
            document.location.href = '../../html/headphones.html'
            play_audio('Opening Headphones!')
            break;
        case "speakers":
            document.location.href = '../../html/speakers.html'
            play_audio('Opening Speakers!')
            break;
        case "earphones":
            document.location.href = '../../html/earthphones.html'
            play_audio('Opening Earthphones!')
            break;
        case "** 99 mark 2":
            document.location.href = '../../html/products/headphones/XX99_MARK_II_HEADPHONES.html'
            play_audio('Opening XX99 MARK II HEADPHONES!')
            break;
        case "zx 9 speaker":
            document.location.href = '../../html/products/speakers/zx9_speaker.html'
            play_audio('opening zx9 speaker!')
            break;
        case "zx 7 speaker":
            document.location.href = '../../html/products/speakers/zx7_speaker.html'
            play_audio('opening zx7 speaker!')
            break;
        case "cart":
            add_html()
            header_cart_loader()
            break;
        case "blind mode setting":
            if (!is_sidemenu_open) {
                sidemenu.style.left = "-10px";
                sidemenu.style.transition = "0.1s";
                is_sidemenu_open = true;
            }
            else {
                sidemenu.style.left = "-179px";
                sidemenu.style.transition = "0.1s";
                is_sidemenu_open = false;
            }
            break;
        case "enable blind mode":
            blindmode.checked = true;
            blindmode_data = [{ blind_mode: "true" }];
            blindmode_data = JSON.stringify(blindmode_data)
            localStorage.setItem("allblindmode_data", blindmode_data);
            break;
        case "disable blind mode":
            blindmode.checked = false;
            blindmode_data = [{ blind_mode: "false" }];
            blindmode_data = JSON.stringify(blindmode_data)
            localStorage.setItem("allblindmode_data", blindmode_data);
            break;

        default:
            play_audio('Sorry Page Not Found!')
            break;
    }
}


document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    recognition.start();
});