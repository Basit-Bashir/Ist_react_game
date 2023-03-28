import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const handleClick = (e) => {
    // console.log(e);
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  };
  const handleUndo = () => {
    // console.log("hello");
    const newPoints = [...points];
    newPoints.pop();
    setPoints(newPoints);
  };
  return (
    <>
      <button onClick={handleUndo}>Undo!</button>
      <div className="App" onClick={handleClick}>
        {points.map((point) => (
          <div
            className="point"
            style={{ left: point.x - 5 + "px", top: point.y - 5 + "px" }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
