import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log(`${counter}`);
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (!counter == 0) {
      setCounter(counter - 1);
    }
    console.log(`${counter}`);
  };
  return (
    <>
      <h1> counter app</h1>
      <h3>Counter Value : {counter > 0 ? counter : ""}</h3>
      <button type="button" onClick={addValue}>
        Add Value {counter}
      </button>
      <button type="button" onClick={removeValue}>
        Remove Value
      </button>
    </>
  );
}

export default App;
