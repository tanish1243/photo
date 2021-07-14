function preload() {
    
}

function setup() {
canvas= createCanvas(600,500);

   canvas.position(500,150)
   video= createCapture(VIDEO);
   video.hide();

   filter_color=" "
}

function draw() {
image(video,0,0,600,500);
  tint(filter_color);
  
  rect(15, 5, 10, 1000);
  rect(580, 5, 10, 1000);
  rect(2, 490, 1000, 10);
  rect(2, 2, 1000, 10);
  fill("green")
  
  rect(6, 5, 10, 1000);
  rect(590, 5, 10, 1000);
  rect(2, 490, 1000, 10);
  rect(2, 2, 1000, 10);
  fill("red");

  circle(40,30,100)
  circle(570,30,100)
}
 function applyfilter(){
     filter_color= document.getElementById("filterColourInput").value;
 }
 function take_snapshot(){
     save("");
 }