// from data.js
var tableData = data;

// YOUR CODE HERE!
// Add Data To Table and display all data.

//add table body from HTML to a variable
var tbody = d3.select("tbody");

//add all table data to table.
tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});


//Create The filtering event

//Selecting ID filter button and create the clicking event.
var filterbutton = d3.select("#filter-btn");
filterbutton.on("click", function() {
 
    //remove the current data from tbody
    d3.select("tbody").html("");

    //Get teh date in the filter box and store it
    var FilterDate = d3.select("#datetime").property("value");
    console.log(FilterDate);








