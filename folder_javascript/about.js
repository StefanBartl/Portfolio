//#region Table of Content
/*
!                               About-Javascript-File
?                                      powered by
!                                      Stefan Bartl
!                        (WKDSteVIE / WKDMinerva)
?                                            2021             
?                  ________________________________                                                                                                                                                                                                  
!                                     Table of content              

?                    1) general settings & page set-up      
.                                     - default
?                      4) bonus jobs & ideas for future

?                  Javascript - what a wonderful language!

*/
//#endregion

//#region Open Jobs
/*
?                  to-do
todo    

?                  finish
todo    
?          
*/
//#endregion

//#region page setting up
// get setted language from local storage or browser language 
const language = localStorage.language || navigator.language;
general_translation(language);
about_translation(language);
//#endregion

//#region Audio

// get music file, load &  loop it
const audio = new Audio("folder_audio/inkompetech_com/Late Night Radio.mp3");
audio.load();
audio.loop = true;

// ! Event-Listener for toggling Audio-Button 
audio_div.addEventListener("click",  () => {
localStorage.Sound !== "on" 
    ? localStorage.Sound = "on" 
    : localStorage.Sound = "off"; 
    audio_settings();
})

// ! Audio settings for toggling, between playing & pausing audio and store in localStorage
function audio_settings (){
// load correct sound toggle image 
localStorage.Sound !== "on" 
    ? musicnote.src = "folder_graphics/folder_images/music_notes_dance/music_notes_dance_orange_bg.png"
    : musicnote.src = "folder_graphics/folder_images/music_notes_dance/music_notes_dance_grey_bg.png";

 // toggle music text
if  (language === "de"){    // Deutsch
localStorage.Sound !== "on" 
    ? audio_text.innerText = "aus" 
    : audio_text.innerText = "an";
} else {                              //English
    localStorage.Sound !== "on" 
    ? audio_text.innerText = "off" 
    : audio_text.innerText = "on";
}

// Play or Pause Sound
    localStorage.Sound === "on" ?  audio.play() : audio.pause();
    
//console.log(`Audio toggle completed, Sound setted to ${localStorage.Sound || 'off'}.`);
};

// ? Invoke Audio
audio_settings();

//#endregion