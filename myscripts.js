//  MAKE REMOVING EASIER

function removeElement(id) {
  var elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);
}


// THIS FUNCTION IS FOR TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// THIS FUNCTIONS CHANGES THE SIZE OF CV'S DIVS 


function showMore(more) {
  var box = more.parentElement.parentElement;
  var x = more.nextElementSibling;
  var close = more.nextElementSibling.nextElementSibling;
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    box.parentElement.style.width = "100%";
    if(box.id == "edu-box") {
      box.style.height = "400px"
    } else {
      box.style.height = "800px";
    }
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
  
  var irakli = "As you have already seen some information about me, I should also mention that I'm self-motivated in learning and doing things. My enthusiasm and passion towards completing my goals are the best things that helps me motivate myself. Also having creative mind makes me be fascinated with technology and futurism."
  var text = document.createElement("p");
  var txt = document.createTextNode(irakli)
  text.appendChild(txt);
  text.id = "myAnswer";
  document.getElementById("myAnswer").innerHTML = "";
  document.getElementById("answer").appendChild(text);
  removeElement("myAnswer");

  var int = "Tell me more about yourself.";
  var text2 = document.createElement("p");
  var txt2 = document.createTextNode(int);
  text2.appendChild(txt2);
  text2.id = "intp";
  document.getElementById("intp").innerHTML = "";
  document.getElementById("int-txt").appendChild(text2);
  removeElement("intp");
}

function answer1(){

  var irakli = "Currently my goal is to get in the industry of advertising. For now I've successfully finished course of Copywriting in Digital Acadedmy. I have decided to reach the peak of myself in the field of advertising with the hard work."
  var text = document.createElement("p");
  var txt = document.createTextNode(irakli)
  text.appendChild(txt);
  text.id = "myAnswer";
  document.getElementById("myAnswer").innerHTML = "";
  document.getElementById("answer").appendChild(text);
  removeElement("myAnswer");

  var int = "What is your goal?";
  var text2 = document.createElement("p");
  var txt2 = document.createTextNode(int);
  text2.appendChild(txt2);
  text2.id = "intp";
  document.getElementById("intp").innerHTML = "";
  document.getElementById("int-txt").appendChild(text2);
  removeElement("intp");
}

function answer2(){

  var irakli = "In several years I see myself still learning new things and working more and more on myself, in order to achieve the most of myself."
  var text = document.createElement("p");
  var txt = document.createTextNode(irakli)
  text.appendChild(txt);
  text.id = "myAnswer";
  document.getElementById("myAnswer").innerHTML = "";
  document.getElementById("answer").appendChild(text);
  removeElement("myAnswer");

  var int = "Where do you see yourself in several years?";
  var text2 = document.createElement("p");
  var txt2 = document.createTextNode(int);
  text2.appendChild(txt2);
  text2.id = "intp";
  document.getElementById("intp").innerHTML = "";
  document.getElementById("int-txt").appendChild(text2);
  removeElement("intp");
}


function overlay() {
  var over = document.getElementById("overlay");
  over.style.display = "none";
}

function test() {
  showMore(document.getElementById("edu-more"));
}

window.onload=function(){
  this.overlay();
  this.showMore(document.getElementById("edu-more"));
  this.minimize(document.getElementById("edu-minimize"));
  }
