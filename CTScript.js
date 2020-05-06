"use strict";


/*File for JavaScript to support Critter Tracker
Created by Cassaundra Caldwell and Rey Orozco
Date Created: 4 May 2020
Date Last Modified: 4 May 2020
File name: CTScripts.js */

window.onload = function() {
  addButton();
  document.getElementById("critterSelection").focus();
};

/*array to hold IDs of critters obtained from name*/
var userCritters = [];
var critterQuant = [];
var completedCritters = [];

function addButton() {
  document.getElementById("addBtn").addEventListener("click", addToList);
  document.getElementById("critterSelection").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      addToList();
    }
  });
};

function addToList() {
  /*var list = document.getElementById('addedList');
  var critter = document.getElementById('critterSelection').value;
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(critter));
  list.appendChild(entry);*/
  var critter = document.getElementById('critterSelection').value;
  var critterId = critters_lookup_by_name(critter);
  if(userCritters.indexOf(critterId) == -1){
    userCritters.push(critterId);
    critterQuant.push(0);
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
  inProgress += "<br><table>";
  inProgress += "<tr><th>Critter</th><th>Quantity</th><th>Completed</th><th>Delete</th></tr>";
  for (i = 0; i < userCritters.length; ++i) {
    inProgress += "<tr>";
    inProgress += "<td>" + bugs_data[userCritters[i] - 1]["name"] + "</td>";
    inProgress += "<td><img src=\"images/icons/icon_arrow_down.png\" class=\"imgBtn\" onClick=\"decreaseQuant(" + i + ")\">" + critterQuant[i] + "<img src=\"images/icons/icon_arrow_up.png\" class=\"imgBtn\" onClick=\"increaseQuant(" + i + ")\"></td>";
    inProgress += "<td><img src=\"images/icons/icon_check.png\" class=\"imgBtn\" onclick=\"moveToCompleted(" + i + ")\"< /td>";
    inProgress += "<td><img src=\"images/icons/icon_delete.png\" onclick=\"deleteData(" + i + ")\" class=\"imgBtn\"></td>";
    inProgress += "</tr>";
  }
  inProgress += "</table>";
  document.getElementById('workingList').innerHTML = inProgress;

  var completed = "";
  var k;
  completed += "<br><table>";
  completed += "<tr><th>Critter</th><th>Delete</th></tr>";
  for (k=0; k < completedCritters.length; ++k) {
    completed += "<tr>";
    completed += "<td>" + bugs_data[completedCritters[k] - 1]["name"] + "</td>";
    completed += "<td><img src=\"images/icons/icon_delete.png\" onclick=\"deleteCompletedData(" + k + ")\" class=\"imgBtn\"></td>";
    completed += "</tr>";
  }
  completed += "</table>";
  document.getElementById('completedList').innerHTML = completed;

  document.getElementById('critterSelection').focus();
};

function deleteData(i) {
  userCritters.splice(i, 1);
  critterQuant.splice(i,1);
  updateList();
};

function deleteCompletedData(k)
{
  completedCritters.splice(k, 1);
  updateList();
};

function moveToCompleted(i) {
  completedCritters.push(userCritters[i]);
  deleteData(i);
};

function decreaseQuant(i) {
  critterQuant[i]-=1;
  updateList();
};

function increaseQuant(i) {
  critterQuant[i]+=1;
  updateList();
};
