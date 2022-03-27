import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [randomDoggo, setRandomDoggo] = useState("");
  const fetchDoggo = async () => {
    const dogUrl = "https://dog.ceo/api/breeds/image/random";
    try {
      const response = await fetch(dogUrl);
      const json = await response.json();
      setRandomDoggo(json.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDoggo();
  }, []);
  return (
    <div className="mainDiv">
      <h1>Get a random doggo!</h1>
      <img src={randomDoggo} alt="random dog" id="dogImg"/>
      <button onClick={fetchDoggo}>Get Another Doggo</button>
    </div>
  );
}

export default App;
