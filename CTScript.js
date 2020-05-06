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
  userCritters.push(critters_lookup_by_name(critter));
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
    inProgress += "<td>test</td>";
    inProgress += "<td><input type=\"checkbox\" id=\"checkbox" + i + "\"< /td>";
    inProgress += "<td><img src=\"image link here\" onclick=\"deleteData(" + i + ")\"></td>";
    inProgress += "</tr>";
  }
  inProgress += "</table>";
  document.getElementById('workingList').innerHTML = inProgress;
  document.getElementById('critterSelection').focus();
};

function deleteData(i) {
  userCritters.splice(i, 1);
  updateList();
};
