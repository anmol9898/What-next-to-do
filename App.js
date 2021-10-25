console.log("Welcome to Notes App, this  is my app.js ");

var addBtn = document.getElementsByName('submit')[0];
var lowbox = document.getElementsByClassName('low-box')[0];
var length = 1;
var notepara = document.getElementById("notepara");
var size = 0; let i = 0;//i is the number of notes present in live
var j = i + 1;  //delete notes number
var deletebtn = [];    //delete array button id's are here

// document.addEventListener("DOMContentLoaded", ()=>{
// localStorage.setItem("Fname","anmol");
// localStorage.setItem("Lname","arora");
// console.log(localStorage.getItem("Fname"));
// console.log(localStorage.getItem("Lname"));;
// });

var buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
  document.getElementsByClassName("btn")[i].addEventListener("click", function() {
    this.classList.add("test_skill");
  });
}

addBtn.addEventListener("click", function (e) {
  // card_content.style.display="revert";

  let addTxt = document.getElementById('addTxt');
  let notes = localStorage.getItem("notes");
  let notesObj;

  console.log("note value is", addTxt.value);


  lowbox.innerHTML = lowbox.innerHTML + `<div class="card mx-2 my-2" style="width: 18rem;">
        <div class="card-body" id="note${i + 1}">
          <h5 class="card-title">Note - ${i + 1}</h5>
          <p id="notepara" class="card-text">${addTxt.value}</p>
          <button class="delete_it btn btn-primary" id="${i + 1}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
      addTxt.value = "";
  deletebtn[i] = document.getElementById(`del-${i + 1}`);
  // var arr_len=deletebtn.push(document.getElementById(`del-${j}`));  // length of the delete array

  console.log("delete array length is", deletebtn.length);

  console.log("deletebtn looks like", deletebtn[i]);
  
  console.log("VALUE Of i is- ", i);
  document.getElementById(`del-${i + 1}`).addEventListener("click", () => {
    let notedelete = document.getElementById(`note${i+1}`);
    notedelete.style.display = "none";
    console.log("delete fn");
    
  });
  i++;

});

