var heading=document.getElementsByTagName("h1");
console.log(heading[0].innerHTML)
heading[0].innerHTML="<i>by bunny<i>";
var sara=document.getElementsByTagName("h2");
alert(sara[0].innerText)

var shh=document.getElementsByTagName("h3");
alert(shh[0].textContent)
 
var shut=document.getElementById("std")
shut.innerHTML="<b>u are bad student<b>";

 
function thing(){
  shut.style.color="yellow";
  shut.style.textAlign="center";
  shut.style.background="purple";

  
}
