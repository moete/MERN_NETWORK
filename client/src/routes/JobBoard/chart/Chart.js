
import React, { useState, useEffect } from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import axios from 'axios';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);



export default function Chart() {
  const [data, setData] = useState([]);
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "1200", // Width of the chart
    height: "700", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Searched jobs by location",
        //Set the chart subcaption
        subCaption: "networky_stats",
        //Set the x-axis name
        xAxisName: "Country",
        //Set the y-axis name
        yAxisName: "Job",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
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


