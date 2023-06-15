prediction_1 = "";
 prediction_2 = "";

 Webcam.set({
     width: 350,
     height: 300,
     image_format: "png",
     png_quality: 90
 });

 camera = document.getElementById("camera");

 Webcam.attach("#camera");

 function capture() {
     Webcam.snap(function (data_uri) {
         document.getElementById("result").innerHtml = "<img id='captured_image' src='" + data_uri + "'/>";
     });
 }

 console.log("ml5 version:", ml5.version);

 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vkluW4vHI/model.json", modelLoaded);

 function modelLoaded() {
     console.log("Model Loaded");
 }

 function speak() {
     var synth = window.SpeechSynthesis;
     utter_data_1 = "The first  Hand Gesture Prediction is  " + prediction_1;
     utter_data_2 = "And the second Hand Gesture Prediction is  " + prediction_2;
     var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
     synth.speak(utterThis);
 }