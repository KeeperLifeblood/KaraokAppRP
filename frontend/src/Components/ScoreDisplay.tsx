import React from "react";

const ScoreDisplay = (props: { score: number }) => {
  return (
    <div>
      <h1>Score: {props.score}</h1>
      {/* Aquí va la lógica para mostrar el score */}
    </div>
  );
};

export default ScoreDisplay;
