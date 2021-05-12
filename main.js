function setup(){
    canvas=createCanvas(300,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cerjiFqFW/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("ModelLoaded! world domination : 1%");
}
function draw(){
    image(video,0,0,300,200);
    classifier.classify(video,gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_man_name").innerHTML=results[0].label;
        document.getElementById('result_man_accuracy').innerHTML=results[0].confidence.toFixed(3);  
    }
}

