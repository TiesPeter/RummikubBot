var cardcontainer = document.querySelector(".cardcontainer");
var personalcards = document.querySelector(".personalcards");
var tablecards = document.querySelector(".tablecards");
var addpersonalcards = document.querySelectorAll(".addpersonalcards");
var addtablecards = document.querySelectorAll(".addtablecards");
var pc_list = {}
var tc_list = {}
var pc_selected = true
var results = document.querySelector(".results");
var fps = document.querySelector(".fps");

function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

function blackcards() {
  cardcontainer.innerHTML = '<div class="row"> <div class="col d-grid gap-1 pe-1"> <button onclick="addcard(\'black\', 1)" class="btn btn-dark" type="button">Black 1</button> </div> <div class="col d-grid gap-1 ps-1"> <button onclick="addcard(\'black\', 8)" class="btn btn-dark" type="button">Black 8</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'black\', 2)" class="btn btn-dark" type="button">Black 2</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'black\', 9)" class="btn btn-dark" type="button">Black 9</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'black\', 3)" class="btn btn-dark" type="button">Black 3</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'black\', 10)" class="btn btn-dark" type="button">Black 10</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'black\', 4)" class="btn btn-dark" type="button">Black 4</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'black\', 11)" class="btn btn-dark" type="button">Black 11</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'black\', 5)" class="btn btn-dark" type="button">Black 5</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'black\', 12)" class="btn btn-dark" type="button">Black 12</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'black\', 6)" class="btn btn-dark" type="button">Black 6</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'black\', 13)" class="btn btn-dark" type="button">Black 13</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'black\', 7)" class="btn btn-dark" type="button">Black 7</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'\', 0)" class="btn btn-secondary" type="button">Joker</button> </div> </div>';
}

function yellowcards() {
  cardcontainer.innerHTML = '<div class="row"> <div class="col d-grid gap-1 pe-1"> <button onclick="addcard(\'yellow\', 1)" class="btn btn-warning" type="button">Yellow 1</button> </div> <div class="col d-grid gap-1 ps-1"> <button onclick="addcard(\'yellow\', 8)" class="btn btn-warning" type="button">Yellow 8</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'yellow\', 2)" class="btn btn-warning" type="button">Yellow 2</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'yellow\', 9)" class="btn btn-warning" type="button">Yellow 9</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'yellow\', 3)" class="btn btn-warning" type="button">Yellow 3</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'yellow\', 10)" class="btn btn-warning" type="button">Yellow 10</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'yellow\', 4)" class="btn btn-warning" type="button">Yellow 4</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'yellow\', 11)" class="btn btn-warning" type="button">Yellow 11</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'yellow\', 5)" class="btn btn-warning" type="button">Yellow 5</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'yellow\', 12)" class="btn btn-warning" type="button">Yellow 12</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'yellow\', 6)" class="btn btn-warning" type="button">Yellow 6</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'yellow\', 13)" class="btn btn-warning" type="button">Yellow 13</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'yellow\', 7)" class="btn btn-warning" type="button">Yellow 7</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'\', 0)" class="btn btn-secondary" type="button">Joker</button> </div> </div>';
}

function redcards() {
  cardcontainer.innerHTML = '<div class="row"> <div class="col d-grid gap-1 pe-1"> <button onclick="addcard(\'red\', 1)" class="btn btn-danger" type="button">Red 1</button> </div> <div class="col d-grid gap-1 ps-1"> <button onclick="addcard(\'red\', 8)" class="btn btn-danger" type="button">Red 8</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'red\', 2)" class="btn btn-danger" type="button">Red 2</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'red\', 9)" class="btn btn-danger" type="button">Red 9</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'red\', 3)" class="btn btn-danger" type="button">Red 3</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'red\', 10)" class="btn btn-danger" type="button">Red 10</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'red\', 4)" class="btn btn-danger" type="button">Red 4</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'red\', 11)" class="btn btn-danger" type="button">Red 11</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'red\', 5)" class="btn btn-danger" type="button">Red 5</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'red\', 12)" class="btn btn-danger" type="button">Red 12</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'red\', 6)" class="btn btn-danger" type="button">Red 6</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'red\', 13)" class="btn btn-danger" type="button">Red 13</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'red\', 7)" class="btn btn-danger" type="button">Red 7</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'\', 0)" class="btn btn-secondary" type="button">Joker</button> </div> </div>';
}

function bluecards() {
  cardcontainer.innerHTML = '<div class="row"> <div class="col d-grid gap-1 pe-1"> <button onclick="addcard(\'blue\', 1)" class="btn btn-primary" type="button">Blue 1</button> </div> <div class="col d-grid gap-1 ps-1"> <button onclick="addcard(\'blue\', 8)" class="btn btn-primary" type="button">Blue 8</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'blue\', 2)" class="btn btn-primary" type="button">Blue 2</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'blue\', 9)" class="btn btn-primary" type="button">Blue 9</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'blue\', 3)" class="btn btn-primary" type="button">Blue 3</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'blue\', 10)" class="btn btn-primary" type="button">Blue 10</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'blue\', 4)" class="btn btn-primary" type="button">Blue 4</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'blue\', 11)" class="btn btn-primary" type="button">Blue 11</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'blue\', 5)" class="btn btn-primary" type="button">Blue 5</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'blue\', 12)" class="btn btn-primary" type="button">Blue 12</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'blue\', 6)" class="btn btn-primary" type="button">Blue 6</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'blue\', 13)" class="btn btn-primary" type="button">Blue 13</button> </div> </div> <div class="row"> <div class="col d-grid gap-2 pe-1"> <button onclick="addcard(\'blue\', 7)" class="btn btn-primary" type="button">Blue 7</button> </div> <div class="col d-grid gap-2 ps-1"> <button onclick="addcard(\'\', 0)" class="btn btn-secondary" type="button">Joker</button> </div> </div>';
}

function showpersonalcards() {
  pc_selected = true
  personalcards.style.display = "unset";
  tablecards.style.display = "none";
}

function showtablecards() {
  pc_selected = false
  personalcards.style.display = "none";
  tablecards.style.display = "unset";
}

function personalcardsselected() {
  addpersonalcards.forEach(element => {
    element.click();
  });
}

function tablecardsselected() {
  addtablecards.forEach(element => {
    element.click();
  });
}

function sortObjectByKeys(o) {
  return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}

function updatecards(cards, object) {
  if (cards == "pc" && Object.keys(object).length === 0){
    personalcards.innerHTML = "No cards added yet..."
  }
  else if (cards == "tc" && Object.keys(object).length === 0){
    tablecards.innerHTML = "No cards added yet..."
  }
  else if (cards == "pc") {
    personalcards.innerHTML = "<ul class='list-group m-1 p-1 personalcards' style='width: 100%;'>";

    for (const [key, value] of Object.entries(pc_list)) {
      if (key.includes("black")){
        color = "Black";
        colorname = "dark";
      } else if (key.includes("yellow")) {
        color = "Yellow"
        colorname = "warning"
      } else if (key.includes("red")) {
        color = "Red";
        colorname = "danger";
      } else if (key.includes("blue")) {
        color = "Blue";
        colorname = "primary";
      }

      if (key.includes(",0")) {
        personalcards.innerHTML += '<li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"> <div> <span class="me-2 badge bg-secondary rounded-pill">' + String(value) + 'x</span> Joker</div> <button onclick="removecard(\'\',0);" type="button" class="btn btn-sm btn-secondary">Remove</button> </li>';
        continue;
      }

      for (i = 0; i < 14; i++) {
        if (key.includes(String(i))) {
          number = i;
        }
    }
    personalcards.innerHTML += '<li class="list-group-item list-group-item-' + colorname +' d-flex justify-content-between align-items-center"> <div> <span class="me-2 badge bg-' + colorname + ' rounded-pill">' + String(value) + 'x</span> ' + color + ' ' + number + '</div> <button onclick="removecard(\'' + color + '\',' + number + ');" type="button" class="btn btn-sm btn-' + colorname + '">Remove</button> </li>'
    }

  } 
  else if (cards == "tc") {
    tablecards.innerHTML = "<ul class='list-group m-1 p-1 personalcards' style='width: 100%;'>";

    for (const [key, value] of Object.entries(tc_list)) {
      if (key.includes("black")){
        color = "Black";
        colorname = "dark";
      } else if (key.includes("yellow")) {
        color = "Yellow"
        colorname = "warning"
      } else if (key.includes("red")) {
        color = "Red";
        colorname = "danger";
      } else if (key.includes("blue")) {
        color = "Blue";
        colorname = "primary";
      }

      if (key.includes(",0")) {
        tablecards.innerHTML += '<li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"> <div> <span class="me-2 badge bg-secondary rounded-pill">' + String(value) + 'x</span> Joker</div> <button onclick="removecard(\'\',0);" type="button" class="btn btn-sm btn-secondary">Remove</button> </li>';
        continue;
      }

      for (i = 0; i < 14; i++) {
        if (key.includes("," + String(i))) {
          number = i;
        }
    }
    tablecards.innerHTML += '<li class="list-group-item list-group-item-' + colorname +' d-flex justify-content-between align-items-center"> <div> <span class="me-2 badge bg-' + colorname + ' rounded-pill">' + String(value) + 'x</span> ' + color + ' ' + number + '</div> <button onclick="removecard(\'' + color + '\',' + number + ');" type="button" class="btn btn-sm btn-' + colorname + '">Remove</button> </li>'
    }
  }
}

function addcard(color, number){
  if (pc_selected == true){
    if ([color, number] in pc_list) {
      pc_list[[color, number]] += 1;
    } 
    else {
      pc_list[[color, number]] = 1;
    }

    updatecards("pc", pc_list)
  }
  else {
    if ([color, number] in tc_list) {
      tc_list[[color, number]] += 1;
    }
    else {
      tc_list[[color, number]] = 1;
    }
  }
  updatecards("tc", tc_list)
  
}

function removecard(color, number) {
  color = color.toLowerCase()
  if (pc_selected == true) {
    if (pc_list[[color, number ]] > 1) {
      pc_list[[color, number]] -= 1;
    }
    else {
      delete(pc_list[[color, number]])
    }

    updatecards("pc", pc_list)
  }
  else {
    if (tc_list[[color, number ]] > 1) {
      tc_list[[color, number]] -= 1;
    }
    else {
      delete(tc_list[[color, number]])
    }

    updatecards("tc", tc_list)
  }
}

function showresults(response){
  console.log(response);
  if (response.length == 1) {
    results.innerHTML = "Ohh no, you only have " + response[0] + " points :(";
  } else {
    results.innerHTML = "<p>Wohoo, you have " + response[0] + " points :)</p>";
    for (x = 0; x < response[1].length; x++) {
      for (y = 0; y < response[1][x].length; y++) {
        if (response[1][x][y]["isjoker"] == true) {
          results.innerHTML += '<li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"> <div> <span class="me-2 badge bg-secondary rounded-pill">1x</span> Joker</div></li>';
          continue
        }

        if (response[1][x][y]["color"] == "black"){
          color = "Black";
          colorname = "dark";
        } else if (response[1][x][y]["color"] == "yellow") {
          color = "Yellow"
          colorname = "warning"
        } else if (response[1][x][y]["color"] == "red") {
          color = "Red";
          colorname = "danger";
        } else if (response[1][x][y]["color"] == "blue") {
          color = "Blue";
          colorname = "primary";
        }
        
        number = response[1][x][y]["number"];

        results.innerHTML += '<li class="list-group-item list-group-item-' + colorname +' d-flex justify-content-between align-items-center"> <div> <span class="me-2 badge bg-' + colorname + ' rounded-pill">1x</span> ' + color + ' ' + number + '</div></li>'
      }

      results.innerHTML += '<p></p>';
    
    }

  }
  
}

function showresults2(response){
  console.log(response);
  if (response.length == 1) {
    results.innerHTML = "I'm sorry, but you can't lay down any cards :(";
  } else {
    if (response[0] == 0) {
      results.innerHTML = "<p>Yessssir, you WIN!!!";
    } else {
      results.innerHTML = "<p>Wohoo, you will have " + response[0] + " cards left :)</p>";
    }

    for (x = 0; x < response[1].length; x++) {
      for (y = 0; y < response[1][x].length; y++) {
        if (response[1][x][y]["isjoker"] == true) {
          results.innerHTML += '<li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"> <div> <span class="me-2 badge bg-secondary rounded-pill">1x</span> Joker</div></li>';
          continue
        }

        if (response[1][x][y]["color"] == "black"){
          color = "Black";
          colorname = "dark";
        } else if (response[1][x][y]["color"] == "yellow") {
          color = "Yellow"
          colorname = "warning"
        } else if (response[1][x][y]["color"] == "red") {
          color = "Red";
          colorname = "danger";
        } else if (response[1][x][y]["color"] == "blue") {
          color = "Blue";
          colorname = "primary";
        }
        
        number = response[1][x][y]["number"];

        results.innerHTML += '<li class="list-group-item list-group-item-' + colorname +' d-flex justify-content-between align-items-center"> <div> <span class="me-2 badge bg-' + colorname + ' rounded-pill">1x</span> ' + color + ' ' + number + '</div></li>'
      }

      results.innerHTML += '<p></p>';
    
    }

  }
  
}

async function firstpoints(){
  window.scroll({
    top: 10000,
    left: 0,
    behavior: 'smooth'
  });
  
  results.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>'
  fps.disabled = true;

  fetch("/firstpoints/" + JSON.stringify(pc_list))
  .then(response => response.json())
  .then(data =>{
  showresults(data);
  fps.disabled = false;
})
}

async function midgame(){
  window.scroll({
    top: 10000,
    left: 0,
    behavior: 'smooth'
  });
  
  results.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>'
  fps.disabled = true;

  fetch("/midgame/" + JSON.stringify(pc_list) + "/" + JSON.stringify(tc_list))
  .then(response => response.json())
  .then(data =>{
  showresults2(data);
  fps.disabled = false;
})
}

updatecards("pc", pc_list)
updatecards("tc", tc_list)
