var list = [];

var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");

//login function

//hideBody();

//function login(){
  //var valLog =document.body.querySelector(".valLogin");
 // var username =document.body.querySelector(".username").value;
  
//  if (username === "coolStudent123") {
//    hidelogScreen();
 //   showBody();
 //  }else{
//    valLog.innerHTML="Username or password is incorrect."
//   }
//}

//document.body.querySelector(".validate").addEventListener("click", function (){
 // login();
//})

function hidelogScreen() {
  var logScreen = document.getElementById("logScreen");
  logScreen.style.display = 'none';
}

function showlogScreen() {
  var logScreen = document.getElementById("logScreen");
  logScreen.style.display = 'block';
}

var pages = [
  {
    name: "Home",
    header: "Home",
  },
  {
    name: "About",
    header: "About",
  },
  {
    name: "View",
    header: "View Notes",
  }
];

for (var i = 0; i < pages.length; i++) {
  createPage(pages[i]);
}

hideScreen();

function createPage(page) {
  var button = document.createElement("button");
  button.addEventListener("click", function () {
    headerWrite(page.header, page.name);
  });
  button.innerHTML = page.name;
  nav.appendChild(button);
}

function headerWrite(word, page) {
  if(page!=="View"){
  var head = document.createElement("h3");
  display.innerHTML = word;
  display.appendChild(head);
  }else{
    viewPage();
  }
}




function viewPage(word){
  showScreen();
  var head = document.createElement("h3");
  display.innerHTML = "View Notes";
  display.appendChild(head);
}

function addGrade(){}

//submit grades function

function length() {  
      return value.length;  
  }  

function submit() {
  var valEle = document.body.querySelector(".valMess");

  var student = document.body.querySelector(".student").value;
  
  if (student.length > 1) {
    output();
  } else {
    valEle.innerHTML = "Note is not long enough";
  }
}

document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})


function renderList() {
  var listEle = document.querySelector(".list");
  listEle.innerHTML = " ";

  for (var i = 0; i < list.length; i++) {
    var element = document.createElement("div");
    element.innerHTML = list[i];
    listEle.appendChild(element);
  }
}

function output(){
  var student = document.body.querySelector(".student").value;
  var grade = document.body.querySelector(".grade").value;
  var space = "---";
  
  list.push("Note: " + student, "Importance: " + grade, space);
  
  //hideScreen();
  renderList();
}

//screen toggles

function hideScreen(){
  screen = document.getElementById('screen');
  screen.style.display = 'none';
}

function showScreen(){
  screen = document.getElementById('screen');
  screen.style.display = 'block';
}

function hideNav(){
  nav = document.getElementById('nav');
  nav.style.display = 'none';
}

function showNav(){
  nav = document.getElementById('nav');
  nav.style.display = 'block';
}

function hideList(){
  gradeList = document.getElementById('outputlist');
  gradeList.style.display = 'none';
}

function showList(){
  gradeList = document.getElementById('outputlist');
  gradeList.style.display = 'block';
}

function hideBody(){
  hideScreen();
  hideNav();
}

function showBody(){
  showScreen();
  showNav();
}