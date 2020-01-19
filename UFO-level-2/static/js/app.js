// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Set buttons using event listener
searchBtn.addEventListener("click", searchButton);
clearBtn.addEventListener("click", resetButton);

// Set variable using query selector
var tbody = document.querySelector("tbody");
var date = document.querySelector("#datetime");
var state = document.querySelector("#state");
var city = document.querySelector("#city");
var country = document.querySelector("#country");
var shape = document.querySelector("#shape");
var search = document.querySelector("#search");
var clear = document.querySelector("#reset");

// Build table
function populate() {
  tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    var index = tableData[i];
    console.log(index)
    var fields = Object.keys(index);
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = index[field];
    }
  }
}

  // Filter on date
  if (filterDate != "") {
    tableData = data.filter(function(index) {
      var indexDate = index.datetime;
      return indexDate === filterDate;
    });
  }
  else {tableData};

  // Filter on state
  if (filterState != "") {
    tableData = tableData.filter(function(index) {
      var indexState = index.state;
      return indexState === filterState;
    });
  }
  else {tableData};

  // Filter on city
  if (filterCity != "") {
    tableData = tableData.filter(function(index) {
      var indexCity = index.city;
      return indexCity === filterCity;
    });
  }
  else {tableData};

  // Filter on country
  if (filterCountry != "") {
    tableData = tableData.filter(function(index) {
      var indexCountry = index.country;
      return indexCountry === filterCountry;
    });
  }
  else {tableData};

  // Filter on shape
  if (filterShape != "") {
    tableData = tableData.filter(function(index) {
      var indexShape = index.shape;
      return indexShape === filterShape;
    });
  }
  else {tableData};

  populate();


// Build search table for filtered data
function searchButton() {
  var filterDate = date.value;
  var filterState = state.value.trim().toLowerCase();
  var filterCity = city.value.trim().toLowerCase();
  var filterCountry = country.value.trim().toLowerCase();
  var filterShape = shape.value.trim().toLowerCase();
// Clear all the fields
function resetButton(){
  populate();
}

// Populate the data table when page loads for first time
populate();
}