import React, { useState, useRef, useCallback } from "react";
import produce from "immer";
import Samples from "./Samples"

const numRows = 25;
const numCols = 25;

const options = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function Grid({ grid, setGrid, clearGrid }) {
  console.log(clearGrid);

  const [running, setRunning] = useState(false);

  let [lifes, setLifes] = useState(0);
  const runningRef = useRef(running);
  runningRef.current = running;

  const simulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let sides = 0;
            options.forEach(([x, y]) => {
              const newI = i + x;
              const newk = k + y;
              if (newI >= 0 && newI < numRows && newk >= 0 && newk < numCols) {
                sides += g[newI][newk];
              }
            });
            if (sides < 2 || sides > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && sides === 3) {
              gridCopy[i][k] = 1;
            }
            // setLifes(lifes + 1)
          }
        }
      });
    });
    setTimeout(function () {
      simulation();
      setLifes(lifes++);
    }, 100);
  }, []);
  return (
    <>
      <h1 style={{ color: "green" }}>Generation: {lifes}</h1>
      <div className="buttons">
        <button
          className="start"
          style={{ color: "green" }}
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              simulation();
            }
          }}
        >
          {running ? "stop" : "start"}
        </button>
        <button
          className="clear"
          style={{ color: "green" }}
          onClick={() => {
            setGrid(clearGrid());
            setLifes(0);
          }}
        >
          clear
        </button>
        <button
          className="random"
          style={{ color: "green" }}
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
              );
            }
            setGrid(rows);
          }}
        >
          random
        </button>
      </div>
      <div className="parent">
      <div 
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              id="child"
              key={`${i}-${k}`}
              onClick={() => {
                if (!running) {
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  });
                  setGrid(newGrid);
                  // setLifes(lifes + 1)
                }
              }}
              style={{
                width: 15,
                height: 15,
                backgroundColor: grid[i][k] ? "purple" : undefined,
                border: "3px solid teal",
              }}
            />
          ))
        )}
        </div>
        <Samples className="sample" setGrid={setGrid} />
        </div>
    </>
  );
}

export default Grid;
