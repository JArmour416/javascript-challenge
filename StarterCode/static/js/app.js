// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

 // Get a reference to the table body
var tbody = d3.select("tbody");

function autoPopulate(tableData) {
    tableData.forEach((visits) => {
        var row = tbody.append("tr");
        Object.entries(visits).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    };
}

button.on("click", function() {
    d3.evet.preventDefault();
    tbody.html("");
     var inputElement = d3.select("#filtertype");
     var inputValue = inputElement.property("value");
})

filteredData.forEach((alients) => {
    var row = tbody.append("tr");
    Object.entries(visits).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
}