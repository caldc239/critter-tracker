"use strict";


/*File for JavaScript to support Critter Tracker
Created by Cassaundra Caldwell and Rey Orozco
Date Created: 4 May 2020
Date Last Modified: 4 May 2020
File name: CTScripts.js */

window.onload = function() {
  //document.getElementById('testing').addEventListener("click", updatePopup);
  document.getElementById("addBtn").addEventListener("click", addToList);
  document.getElementById("critterSelection").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      addToList();
    }
  });
  document.getElementById("critterSelection").focus();

  retrieveBugData();
  updateList();
};

//Array to store each entry (name, quantity, completed)
let listData = [];

function addToList() {
  var critter = document.getElementById('critterSelection').value;
  var critterId = critters_lookup_by_name(critter);
  let entryData = {critterNo: critterId, quantity: 0, completed: 0};

  var isMatch = false;
  for(let w = 0; w < listData.length; ++w) {
  if(listData[w]["critterNo"] == critterId)
  isMatch = true;
  }

  if(isMatch == false){
  listData.push(entryData);
  } else {
    alert("That critter is already on the list!")
  }
  updateList();
  /*clear text box*/
  document.getElementById('critterSelection').value = '';
};


function updateList() {
  var inProgress = "";
  var i;
  inProgress += "<h2><center>Working List</center></h2>";
  inProgress += "<table>";
  inProgress += "<tr><th></th><th>Critter</th><th>Quantity</th><th>Completed</th><th>Delete</th></tr>";
  for (i = 0; i < listData.length; ++i) {
    if(listData[i]["completed"] == 0){
      inProgress += "<tr>";
      inProgress += "<td><img src=\""+ critters_image(listData[i]["critterNo"]) + "\" height=32></td>";
      inProgress += "<td>" + bugs_data[listData[i]["critterNo"] - 1]["name"] + "</td>";
      inProgress += "<td><center><img src=\"images/icons/icon_arrow_down.png\" class=\"imgBtn\" onClick=\"decreaseQuant(" + i + ")\">" + listData[i]["quantity"] + "<img src=\"images/icons/icon_arrow_up.png\" class=\"imgBtn\" onClick=\"increaseQuant(" + i + ")\"></center></td>";
      inProgress += "<td><center><img src=\"images/icons/icon_check.png\" class=\"imgBtn\" onclick=\"moveToCompleted(" + i + ")\"></center></td>";
      inProgress += "<td><center><img src=\"images/icons/icon_delete.png\" onclick=\"deleteData(" + i + ")\" class=\"imgBtn\"></center></td>";
      inProgress += "</tr>";
    }
  }
  inProgress += "</table>";
  document.getElementById('workingList').innerHTML = inProgress;

  var completed = "";
  var k;
  completed +="<h2><center>Completed List</center></h2>";
  completed += "<table>";
  completed += "<tr><th></th><th>Critter</th><th>Delete</th></tr>";
  for (k=0; k < listData.length; ++k) {
    if(listData[k]["completed"] == 1){
      completed += "<tr>";
      completed += "<td><img src=\""+ critters_image(listData[k]["critterNo"]) + "\" height=32></td>";
      completed += "<td>" + bugs_data[listData[k]["critterNo"] - 1]["name"] + "</td>";
      completed += "<td><center><img src=\"images/icons/icon_delete.png\" onclick=\"deleteData(" + k + ")\" class=\"imgBtn\"></center></td>";
      completed += "</tr>";
    }
  }
  completed += "</table>";
  document.getElementById('completedList').innerHTML = completed;

  document.getElementById('critterSelection').focus();

  saveBugData();
};

function deleteData(i) {
  listData.splice(i, 1);
  updateList();
};

function moveToCompleted(i) {
  listData[i]["completed"] = 1;
  updateList();
};

function decreaseQuant(i) {
  listData[i]["quantity"]-=1;
  updateList();
};

function increaseQuant(i) {
  listData[i]["quantity"]+=1;
  updateList();
};

//save listData to local storage
function saveBugData() {
  var str = JSON.stringify(listData);
  localStorage.setItem("listData", str);
}

//get listData from local storage
function retrieveBugData() {
  var str = localStorage.getItem("listData");
  listData = JSON.parse(str);
  if(!listData) {
    listData = [];
  }
}

function clearBugData() {
  listData = [];
  updateList();
}

function updatePopup(e) {
  console.log(e);
  var popup = document.getElementById('popup');
  popup.style.left = e.clientX + "px";
  popup.style.top = e.clientY + "px";
}
