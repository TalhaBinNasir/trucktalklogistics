import React from "react";
import { Box } from "../styles/box";
import { Svg } from "../styles/svg";

export const PeaceIcon = () => {
  return (
    <Box
      css={{
        width: "auto",
        height: "fit-content",
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="9.5"
          stroke="#222222"
          stroke-linecap="round"
        />
        <path
          d="M8.20857 15.378C8.63044 15.7433 9.20751 16.0237 9.86133 16.2124C10.5191 16.4023 11.256 16.5 12 16.5C12.744 16.5 13.4809 16.4023 14.1387 16.2124C14.7925 16.0237 15.3696 15.7433 15.7914 15.378"
          stroke="#222222"
          stroke-linecap="round"
        />
        <circle
          cx="9"
          cy="10"
          r="1"
          fill="#222222"
          stroke="#222222"
          stroke-linecap="round"
        />
        <circle
          cx="15"
          cy="10"
          r="1"
          fill="#222222"
          stroke="#222222"
          stroke-linecap="round"
        />
      </svg>
    </Box>
  );
};
