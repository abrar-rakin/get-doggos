import React, { useState } from "react";
import { DLoverContext } from "./contexts/DLoverContext";
import Doggo from "./components/Doggo";
import Question from "./components/Question";

function App() {
  const [hasResponded, setHasResponded] = useState(false);
  const [isDogLover, setIsDogLover] = useState(false);
  return (
    <>
      <DLoverContext.Provider
        value={{ hasResponded, setHasResponded, isDogLover, setIsDogLover }}
      >
        {hasResponded ? <Doggo /> : <Question />}
      </DLoverContext.Provider>
    </>
  );
}

export default App;
