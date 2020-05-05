"use strict";


/*File for JavaScript to support Critter Tracker
Created by Cassaundra Caldwell and Rey Orozco
Date Created: 4 May 2020
Date Last Modified: 4 May 2020
File name: CTScripts.js */

window.onload = function() {
  addButton()
};

/*array to hold IDs of critters obtained from name*/
var userCritters = [];

function addButton() {
  document.getElementById("addBtn").addEventListener("click", addToList);
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
  document.getElementById('addedList').innerHTML = "";
  var i;
  for (i = 0; i < userCritters.length; ++i) {
    document.getElementById('addedList').innerHTML += "<li>" + bugs_data[userCritters[i] - 1]["name"] + "</li>";
  }
};