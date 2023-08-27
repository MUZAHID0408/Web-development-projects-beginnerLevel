function ShapeAppear() {
  document.getElementById("shape").style.display = "block";
  let width = (300* Math.random())+ 50;
  let left = 700 * Math.random();
  let top = 500 * Math.random();
 
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.backgroundColor = "#"+randomColor;
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.height = width +"px";
  if(Math.random() > 0.5){
    document.getElementById("shape").style.borderRadius = "50%";
  } else{
    document.getElementById("shape").style.borderRadius = "10px";
  }
  
  start = new Date().getTime();
}
function Appear() {
  setTimeout(ShapeAppear, 1500 * Math.random());
}
let start = new Date().getTime();
Appear();
document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  let end = new Date().getTime();
  let time = (end - start) / 1000;
  document.getElementById("TimeCount").innerHTML = time + " s";
  Appear();
}
