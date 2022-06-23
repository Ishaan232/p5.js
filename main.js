function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    x="";
}
function draw(){
    image(video,0,0,640,480);
    tint(x);
}
function take_snapshot(){
    save('mypicture.jpg');
}
function type1(){
    x=document.getElementById("idnltgi").value;
}