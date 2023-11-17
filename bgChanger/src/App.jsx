import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const red = () => {
    setColor("red")
  };
  const blue = () => {
    setColor("blue")
  };
  const green = () => {
    setColor("green")
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="inset-x-0 fixed flex flex-wrap justify-center  bottom-12">
        <div className="bg-white p-2 flex gap-3 felx-wrap rounded-xl">
          <button
            onClick={red}
            className="p-2 rounded-sm text-white "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={green}
            className="p-2 rounded-sm text-white "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={blue}
            className="p-2 rounded-sm text-white "
            style={{ backgroundColor: "blue" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
