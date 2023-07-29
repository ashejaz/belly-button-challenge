// Use D3 library to read in samples.json from the provided URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the data from the URL and update the dashboard when data is loaded
d3.json(url).then(function(data) {
  // Call the function to initialise the dashboard with the data
  init(data);
});

// Function to initialize the dashboard with the data
function init(data) {
  // Make the 'data' variable accessible to other functions
  window.data = data;

  // Select the dropdown menu
  const dropdownMenu = d3.select("#selDataset");

  // Populate the dropdown menu with subject IDs
  data.names.forEach(function(name) {
    dropdownMenu.append("option").text(name).property("value", name);
  });

  // Retreive the first subject ID from the data
  const firstSubjectID = data.names[0];

  // Call the functions to create the charts and display demographic info for the first subject
  createBarChart(data, firstSubjectID);
  createBubbleChart(data, firstSubjectID);
  displayDemographicInfo(data, firstSubjectID);
}

// Function to create the bar chart with the top 10 OTUs for the selected subject ID
function createBarChart(data, subjectID) {
    // Filter the data for the selected subject ID
    const sampleData = data.samples.filter(sample => sample.id === subjectID)[0];
  
    // Get the top 10 OTUs and reverse the array to plot in descending order
    const top10SampleValues = sampleData.sample_values.slice(0, 10).reverse();
    const top10OTUids = sampleData.otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();
    const top10OTULabels = sampleData.otu_labels.slice(0, 10).reverse();
  
    // Create the trace for the bar chart
    const trace = {
      x: top10SampleValues,
      y: top10OTUids,
      text: top10OTULabels,
      type: "bar",
      orientation: "h"
    };
  
    // Create the data array for the plot
    const dataBar = [trace];
  
    // Define the layout for the bar chart
    const layoutBar = {
      title: "Top 10 Microbial Species",
      xaxis: { title: "Sample Values" }
    };
  
    // Plot the bar chart
    Plotly.newPlot("bar", dataBar, layoutBar);
  }
  
  // Function to create the bubble chart that displays each sample
  function createBubbleChart(data, subjectID) {
    // Filter the data for the selected subject ID
    const sampleData = data.samples.filter(sample => sample.id === subjectID)[0];
  
    // Create the trace for the bubble chart
    const trace = {
      x: sampleData.otu_ids,
      y: sampleData.sample_values,
      text: sampleData.otu_labels,
      mode: "markers",
      marker: {
        size: sampleData.sample_values,
        color: sampleData.otu_ids,
        colorscale: "Earth"
      }
    };
  
    // Create the data array for the plot
    const dataBubble = [trace];
  
    // Define the layout for the bubble chart
    const layoutBubble = {
      title: "Microbial Species Present",
      xaxis: { title: "Operational Taxonomic Unit (OTU) ID" },
      yaxis: { title: "Sample Values" }
    };
  
    // Plot the bubble chart
    Plotly.newPlot("bubble", dataBubble, layoutBubble);
  }
  
  // Function to display the sample metadata, i.e., an individual's demographic information
  function displayDemographicInfo(data, subjectID) {
    // Filter the data for the selected subject ID
    const metadata = data.metadata.filter(meta => meta.id.toString() === subjectID)[0];
  
    // Select the demographic info panel
    const demographicInfo = d3.select("#sample-metadata");
  
    // Clear any existing metadata
    demographicInfo.html("");
  
    // Append each key-value pair from the metadata JSON object to the panel
    Object.entries(metadata).forEach(([key, value]) => {
      demographicInfo.append("p").text(`${key}: ${value}`);
    });
  }
  

  // Function to handle changes in the dropdown menu
function optionChanged(newSubjectID) {
    // Update the bar chart, bubble chart, and demographic info when the dropdown selection changes
    createBarChart(data, newSubjectID);
    createBubbleChart(data, newSubjectID);
    displayDemographicInfo(data, newSubjectID);
  }

  // Initialise the dashboard
init(data); 