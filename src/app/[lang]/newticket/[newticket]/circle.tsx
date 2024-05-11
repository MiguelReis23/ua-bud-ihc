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

const Line = () => (
  <div
    style={{
      width: "1px",
      height: "20px",
      backgroundColor: "black",
      marginRight: "10px",
    }}
  ></div>
);

export const CircleLine = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Circle color="grey" />
    <Line />
    <Circle color="white" />
    <Line />
    <Circle color="white" />
  </div>
);

