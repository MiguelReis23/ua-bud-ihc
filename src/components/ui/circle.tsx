'use CLient';
import React from "react"

const Circle = ({ color }: { color: string }) => (
  <div
    style={{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: color,
      marginRight: "10px",
    }}
  ></div>
);

export const CircleLine = ({ activeCircle }: { activeCircle: number }) => {
  const colors = ["white", "white", "white"];
  colors[activeCircle] = "grey";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px" }}>
        <Circle color={colors[0]} />
        <p style={{ textAlign: "center" }}>Serviço</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px" }}>
        <Circle color={colors[1]} />
        <p style={{ textAlign: "center" }}>Categoria</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px" }}>
        <Circle color={colors[2]} />
        <p style={{ textAlign: "center" }}>Detalhes</p>
      </div>
    </div>
  );
};