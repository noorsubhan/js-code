var root=document.getElementById("root")
// profile container start
var profileContainer=document.createElement("div")
profileContainer.setAttribute("class","container")
// profilePic start 
var profilePic=document.createElement("div")
profilePic.setAttribute("class","profilPic")
root.append(profileContainer)
profileContainer.append(profilePic)
var profile=document.createElement("img")
profilePic.append(profile)
profile.src="image.jpeg" 
// profilPic End
// folwer container start
var folowerContainer=document.createElement("div")
folowerContainer.setAttribute("class","folwerContainer")
profileContainer.append(folowerContainer)
//postdiv
var postDiv=document.createElement("div")
folowerContainer.append(postDiv)
//folowerdiv
var folowersDiv=document.createElement("div")
folowerContainer.append(folowersDiv)
// following div
var folowingDiv=document.createElement("div")
folowerContainer.append(folowingDiv)
var postNum=document.createElement("p")
var postTitle=document.createElement("p")
postNum.innerHTML=8
postTitle.innerHTML="Post"
postDiv.append(postNum)
postDiv.append(postTitle)
var folwerNum=document.createElement("p")
var folwerTitle=document.createElement("p")
folwerNum.innerHTML=276
folwerTitle.innerHTML="folower"
folowersDiv.append(folwerNum)
folowersDiv.append(folwerTitle)
var folwingNum=document.createElement("p")
var folwingTitle=document.createElement("p")
folwingNum.innerHTML=521
folwingTitle.innerHTML="folowing"
folowingDiv.append(folwingNum)
folowingDiv.append(folwingTitle)
//folwercontainer end
//profilecontainer end