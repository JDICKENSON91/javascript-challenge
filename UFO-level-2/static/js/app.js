// from data.js
var tableData = data;

// YOUR CODE HERE!
// Add Data To Table and display all data.

//Assign Table to Variable
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
filterbutton.on("click", runfilters);
//or pressing enter
var form = d3.select("#form");
form.on("submit", runfilters);

//Create the function
function runfilters() {

    //remove the current data from tbody
    d3.select("tbody").html("");

    //Don't refresh the page
    d3.event.preventDefault();


    //Set the filter keywords to variables and make them all lowercase
    var FilterDate = d3.select("#datetime").property("value");

    var FilterCountry = d3.select("#country").property("value").toLowerCase();

    var FilterState = d3.select("#state").property("value").toLowerCase();

    var FilterCity = d3.select("#city").property("value").toLowerCase();

    var FilterShape = d3.select("#shape").property("value").toLowerCase();

    //Select filters based on inputs
    FilteredData = tableData;

    if (FilterDate) {
    FilteredData = FilteredData.filter(record => record.datetime === FilterDate);
    }
    if (FilterCountry) {
    FilteredData = FilteredData.filter(record => record.country === FilterCountry);
    }
    if (FilterState) {
    FilteredData = FilteredData.filter(record => record.state === FilterState);
    }
    if (FilterCity) {
    FilteredData = FilteredData.filter(record => record.city === FilterCity);
    }
    if (FilterShape) {
    FilteredData = FilteredData.filter(record => record.shape === FilterShape);
    }

    //Re-Enter the table based on Filters

    FilteredData.forEach((report) => {
        var row = tbody.append('tr');

        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
}



