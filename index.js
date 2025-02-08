var numberOfDrum = document.querySelectorAll(".drum").length;
var audioObjects = {}; // To store the audio objects

for (var i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}

document.addEventListener("keypress", handleclick2);

function handleclick() {
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    buttonani(buttonInnerHTML);
}

function handleclick2() {
    sound(event.key);
    buttonani(event.key);
}

function sound(key) {
    var audio;

    // Check if the audio object already exists for the key (to manage play/pause)
    if (audioObjects[key]) {
        audio = audioObjects[key];
    } else {
        // If not, create a new audio object and store it
        audio = new Audio(getAudioFileName(key));
        audioObjects[key] = audio;
    }

    // If the audio is already playing, pause it; otherwise, play it
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
    }
}

function getAudioFileName(key) {
    // This function returns the correct audio file based on the key
    switch (key) {
        case "Focus":
            return "beautiful-relaxing-piano-for-videos-239494.mp3";
        case "Love":
            return "la-valse-de-lune-beautiful-piano-piece-200131.mp3";
        case "Peace":
            return "rain-and-relaxing-beat-tell-me-why-216570.mp3";
        case "Soul":
            return "fur-elise-beethoven-216331.mp3";
        case "Present":
            return "relaxing-instrumental-music-backsound-11-215393.mp3";
        case "Positive":
            return "relaxing-instrumental-music-backsound-11-215393.mp3";
        case "Heal":
            return "whip-afro-dancehall-music-110235.mp3";
        default:
            return ""; // In case the key doesn't match
    }
}

function buttonani(currentkey) {
    var acbutton = document.querySelector("." + currentkey);
    acbutton.classList.add("pressed");
    setTimeout(function () {
        acbutton.classList.remove("pressed");
    }, 100);
}