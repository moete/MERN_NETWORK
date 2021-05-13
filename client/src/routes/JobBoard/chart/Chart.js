
import React, { useState, useEffect } from 'react';


// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column3D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import axios from 'axios';
// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column3D, FusionTheme)



export default function Chart() {
  const [data, setData] = useState([]);
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "1200", // Width of the chart
    height: "700", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most posted jobs by your prefered job type",
        subcaption: "jobs",
        enablesmartlabels: "1",
        showlabels: "1",
        numbersuffix: " ",
        usedataplotcolorforlabels: "1",
        plottooltext: "$label, <b>$value</b> ",
        theme: "fusion",
      
      },
      // Chart Data
      data: data
    }
  };
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'http://localhost:5000/job/stat/',
      );
      if (result)
        setData(result.data);
    }
    fetchData();
    
  },[]);
  console.log(setData)

  return (
    <div>
    <ReactFC {...chartConfigs} />
      

    </div>
  )
}


