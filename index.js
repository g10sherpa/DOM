document.getElementsByTagName("li")[2].innerHTML = "hello";

//document.getElementsByClassName("btn")[0].innerHTML="btnn";

document.getElementById("title").innerHTML = "I miss u";




/*................OR.......................*/
//change google to googles, combining......
document.querySelector("li a").innerHTML = "googles";

document.querySelectorAll("#list .item")[2].style.color = "yellow";

document.querySelector("li a").style.color = "red";

document.querySelector("button").style.backgroundColor = "yellow";


document.querySelector("button").classList.add("invisible");

document.querySelector("button").classList.remove("invisible");

//document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");


document.querySelector("h1").innerHTML = "<em>hey baby</em>";

document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.youtube.com");