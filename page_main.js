    setTimeout(function()
   {
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your selfie in 3 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    Synth.speak(utterThis);
}, 3000);

function take_snapshot()
[
    console.log(img_id);

    Webcam.snap(function(){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie_image" src "' +data_uri+ '">';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie_image" src "' +data_uri+ '">';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie_image" src "' +data_uri+ '">';
        }
    });
]
