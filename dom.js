var heading=document.getElementsByTagName("h1");
console.log(heading[0].innerHTML)
heading[0].innerHTML="Hey <i>buddy</i> we will go on saturday for trip"
heading[1].innerText="Hey <i>buddy</i> we will go on saturday for trip"
var para=document.getElementById("hey")
para.innerHTML="hello bunny"

function changeColor(){
    para.style.color="blue";
    para.style.background="red";
}