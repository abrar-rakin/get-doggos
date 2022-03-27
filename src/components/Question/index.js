import React, { useContext } from "react";
import { DLoverContext } from "../../contexts/DLoverContext";
import styles from "./index.module.css";

function Question() {
  const { setHasResponded, setIsDogLover } =
    useContext(DLoverContext);
  return (
    <div>
        <h1 className={styles.title}>WELCOME TO DOG O' CLOCK</h1>
      <h1 className={styles.question}>Are you a dog lover?</h1>
      <div className={styles.btnFlex}>
      <button
        className={styles.btn}
        onClick={() => {
          setHasResponded(true);
          setIsDogLover(true);
        }}
      >
        Yes
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setHasResponded(true);
          setIsDogLover(false);
        }}
      >
        No
      </button>
      </div>
    </div>
  );
}

export default Question;
