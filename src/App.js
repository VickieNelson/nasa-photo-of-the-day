import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Post from "./posts.js";

function App() {
  const [nasaData, updateData] = useState({});

  useEffect(() => {
    axios

      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

      .then((response) => {
        // displaying data from api for inspection
        console.log(res.data);

        updateData(res.data);

        console.log(`${nasaData} is the data`);
      })

      .catch((err) => {
        console.log("Yoda says: return you must!");
      });
  });

  return (
    <div className='App'>
      <Post
        title={nasaData.title}
        date={nasaData.date}
        url={nasaData.url}
        summary={nasaData.explanation}
      />
    </div>
  );
}

export default App;
