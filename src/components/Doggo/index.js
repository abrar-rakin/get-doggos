import React, { useState, useEffect, useContext } from "react";
import { DLoverContext } from "../../contexts/DLoverContext";
import saddog from "./saddog.jpg";
import styles from "./index.module.css";

function Doggo() {
  const { isDogLover } = useContext(DLoverContext);

  const [randomDoggo, setRandomDoggo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchDoggo = async () => {
    const dogUrl = "https://dog.ceo/api/breeds/image/random";
    try {
      const response = await fetch(dogUrl);
      const json = await response.json();
      setRandomDoggo(json.message);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDoggo();
  }, []);

  return (
    <>
      {isDogLover ? (
        <div className={styles.mainDiv}>
          <h1>Awesome, get your doggo!</h1>
          {!isLoading ? <img src={randomDoggo} alt="random dog" className={styles.dogImg} /> : <p>Loading...</p>}
          <button onClick={fetchDoggo} className={styles.btn}>
            Get Another Doggo
          </button>
        </div>
      ) : (
        <div className={styles.mainDiv}>
          <h1>Doggo is sad :(</h1>
          <img src={saddog} alt="sad dog" className={styles.dogImg} />
        </div>
      )}
    </>
  );
}

export default Doggo;
