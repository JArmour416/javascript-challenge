// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
d3.selectAll("#filter-btn").on("click", button);

// Set function once button is clicked
function button() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if (date) {
        filterData = filterData.filter((row) => row.datetime == date);
    }
    appendTable(filterData);

    // Use d3 to populate table data
    function appendTable(data) {
        // Select the unordered list element by tbody
        d3.select("tbody").html("");
        data.forEach((sighting) => {
            var tableRow = d3.select("tbody").append("tr");
            Object.values(sighting).forEach((value) => {
                var tableData = tableRow.append("td");
                tableData.text(value);
            });
        });
    };
    //appendTable(filterData);

}
