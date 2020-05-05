"use strict";


/*File for JavaScript to support Critter Tracker
Created by Cassaundra Caldwell and Rey Orozco
Date Created: 4 May 2020
Date Last Modified: 4 May 2020
File name: CTScripts.js */

window.onload = function() {addButton()};

function addButton() {
  document.getElementById("addBtn").addEventListener("click", addToList);

  function addToList() {
    var list = document.getElementById('addedList');
    var critter = document.getElementById('critterSelection').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(critter));
    list.appendChild(entry);

  };
};
