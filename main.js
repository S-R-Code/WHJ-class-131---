img= "";
Status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas =  createCanvas(640,370);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img, 0,0,640,370);
    fill("#FF0000");
    text("Dog", 195,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,459,350)

    fill("#FF0000");
    text("Cat", 420, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320)
}

function modelLoaded(){
    console.log("Model Loaded!")
    Status = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error,results){
    if (error) {
        console.log(error);
    }
    console.log(results);
}