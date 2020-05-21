//  MAKE REMOVING EASIER

function removeElement(id) {
  var elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);
}


// THIS FUNCTIONS CHANGES THE SIZE OF CV'S DIVS 


function showMore(more) {
  var box = more.parentElement.parentElement;
  var x = more.nextElementSibling;
  var close = more.nextElementSibling.nextElementSibling;
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    box.style.height = "500px";
    more.style.display = "none";
    close.style.display = "block";
  }
}

function minimize(close) {
  var box = close.parentElement.parentElement;
  var more = close.previousElementSibling.previousElementSibling;
  var info = close.previousElementSibling;
  box.style.height = "300px";
  close.style.display = "none";
  more.style.display = "block";
  info.style.display = "none";
}



  // MY ANSWER


function answer0() {
  
  var irakli = "magari tipi vaaaaar"
  var text = document.createElement("p");
  var txt = document.createTextNode(irakli)
  text.appendChild(txt);
  text.id = "myAnswer";
  document.getElementById("myAnswer").innerHTML = "";
  document.getElementById("answer").appendChild(text);
  removeElement("myAnswer");
}

function answer1(){

  var irakli = "fuleeeeeeee"
  var text = document.createElement("p");
  var txt = document.createTextNode(irakli)
  text.appendChild(txt);
  text.id = "myAnswer";
  document.getElementById("myAnswer").innerHTML = "";
  document.getElementById("answer").appendChild(text);
  removeElement("myAnswer");
}

function answer2(){

  var irakli = "trakshiiiiii"
  var text = document.createElement("p");
  var txt = document.createTextNode(irakli)
  text.appendChild(txt);
  text.id = "myAnswer";
  document.getElementById("myAnswer").innerHTML = "";
  document.getElementById("answer").appendChild(text);
  removeElement("myAnswer");
}


function overlay() {
  var over = document.getElementById("overlay");
  over.style.display = "none";
}




$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})