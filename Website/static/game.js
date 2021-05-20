cardcontainer = document.querySelector(".cardcontainer");
personalcards = document.querySelector(".personalcards");
tablecards = document.querySelector(".tablecards");
addpersonalcards = document.querySelectorAll(".addpersonalcards");
addtablecards = document.querySelectorAll(".addtablecards");

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
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
  personalcards.style.display = "unset";
  tablecards.style.display = "none";
}

function showtablecards() {
  personalcards.style.display = "none";
  tablecards.style.display = "unset";
}

function personalcardsselected() {
  addpersonalcards.forEach(element => {
    element.click()
  });
}

function tablecardsselected() {
  addtablecards.forEach(element => {
    element.click()
  });
}

function addcard(color, number){
  console.log(color + number)
}