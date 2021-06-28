// From data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Append data to html table
data.forEach(function(sighting) {
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select button
var button = d3.select('#filter-btn')

// Select form
var form = d3.select('#form')

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Create event handler function runEnter
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Grab filtered data
    var filteredData = tableData.filter(date => date.datetime === inputValue);

    // Clear table
    d3.selectAll("tr").remove();

    // Append filtered results to table
    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};