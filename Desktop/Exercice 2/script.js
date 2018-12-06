var btn1 = document.getElementById('btn1');
var cube = document.getElementById('cube');
var growUp = 50;
var maxHeight = 300;
var initHeight = 100;



btn1.addEventListener("click", up);
function up(){
  var heightCube = cube.offsetHeight;
  if(heightCube <= maxHeight)
    cube.style.height = (heightCube + growUp) + 'px';
  else
    cube.style.height = initHeight + 'px';
}

var btn2 = document.getElementById('btn2');

btn2.addEventListener("click" , colorgreen);
function colorgreen(){
  cube.style.backgroundColor = '#008000';

}

var btn3 = document.getElementById('btn3');

btn3.addEventListener("click" , colorback);
function colorback(){
cube.style.backgroundColor = "#0000FF";
}

var btn4 = document.getElementById('btn4');

btn4.addEventListener("click" , disappear);
function disappear(){
cube.style.visibility = "hidden" ;
}

var btn5 = document.getElementById('btn5');

btn5.addEventListener("click" , show);
function show(){
cube.style.visibility = "visible";
}




function action (event) {
event = event || cube.event;
var cube = document.getElementById('cube')

}
