import { useRef, useState } from "react";


import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, Tooltip } from "recharts";
function Section3() {
    const colors = [
        "#CBF2DC",
        "rgba(40, 199, 111, 0.24)",
        "rgba(255, 159, 67, 0.38)",
        "rgba(128, 131, 144, 0.24)"
      ];
      
      const data = [
        { startTime: "8:00 am", endTime: "9:00 am", name: "Page A", uv: 4000, pv: 2400, amt: 2400, fill: colors[0] },
        { startTime: "9:00 am", endTime: "11:00 am", name: "Page B", uv: 4000, pv: 2400, amt: 2400, fill: colors[1] },
        { startTime: "11:00 am", endTime: "12:00 pm", name: "Page C", uv: 4000, pv: 2400, amt: 2200, fill: colors[2] },
        { startTime: "12:00 pm", endTime: "13:00 pm", name: "Page D", uv: 4000, pv: 2400, amt: 2400, fill: colors[2] },
        { startTime: "13:00 pm", endTime: "14:00 pm", name: "Page E", uv: 4000, pv: 2400, amt: 2400, fill: colors[0] },
        { startTime: "14:00 pm", endTime: "15:00 pm", name: "Page F", uv: 4000, pv: 2400, amt: 2400, fill: colors[1] },
        { startTime: "15:00 pm", endTime: "16:00 pm", name: "Page G", uv: 4000, pv: 2400, amt: 2200, fill: colors[2] },
        { startTime: "16:00 pm", endTime: "17:00 pm", name: "Page H", uv: 4000, pv: 2400, amt: 2400, fill: colors[3] },
      ];
    const [selectedTime, setSelectedTime] = useState(""); // State to hold the selected time
    const graphRef = useRef(null); // Ref to the graph container for scrolling
  
    // Function to handle time submission
    const handleTimeSubmit = (event) => {
      event.preventDefault(); // Prevent form submission
  
      // Example: You might have an input field to enter the time
      const enteredTime = event.target.value; // Get the entered time (you should adjust this based on your actual input method)
  
      // Find the corresponding data element for the entered time
      const matchingData = data.find((item) => item.startTime === enteredTime || item.endTime === enteredTime);
  
      if (matchingData) {
        setSelectedTime(enteredTime); // Update the selected time state
  
        // Scroll to the matching data element in the graph
        const index = data.indexOf(matchingData);
        const xOffset = index * 100; // Assuming each bar width is 100px
        if (graphRef.current) {
          graphRef.current.scrollLeft = xOffset;
        }
      }
    };
    return (
        <div className="section-3">
        <h3 className="main-heading ">
          <span>Timeline</span>:
        </h3>
        <h3 className="Timeline-heading">Security Start Time</h3>
        <div className="flex items-center section-3-content flex-wrap">
          <div className="mr-8">
            <input
              type="text"
              name=""
              id=""
              className="shadow appearance-none border rounded w-[350px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Where to start?"
              onChange={handleTimeSubmit} // Assuming you're using an input for time entry
            />
          </div>
          <div className="flex items-center gap-6 mr-12">
            <span className="dot"></span>
            <span>Reach to Pickup </span>
          </div>

          <div className="flex items-center gap-6 mr-12">
            <span className="dot unloading-truck"></span>
            <span>Loading/unloading truck</span>
          </div>

          <div className="flex items-center gap-6 mr-12">
            <span className="dot destination-truck"></span>
            <span>Travelling to Destination</span>
          </div>

          <div className="flex items-center gap-6 mr-12">
            <span className="dot Break-point"></span>
            <span>Break up</span>
          </div>
        </div>

        <div ref={graphRef} className="graph-container" style={{ overflowX: "auto", width: "100%", height: "300px" }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="uv" fill="rgba(255, 159, 67, 0.38)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
}


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const uv = payload[0].value; // Assuming uv is the key we want to show
      const { startTime, endTime } = payload[0].payload; // Extracting startTime and endTime from payload
  
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} (Start: ${startTime}, End: ${endTime})`}</p>
          <p className="intro">{`UV: ${uv}`}</p>
        </div>
      );
    }
  
    return null;
  };

export default Section3
