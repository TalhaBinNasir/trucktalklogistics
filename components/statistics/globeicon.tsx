import React from "react";
import { Box } from "../styles/box";
import { Svg } from "../styles/svg";

export const GlobeIcon = () => {
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
        <path
          d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g opacity="0.4">
          <path
            d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <path
          d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 22L21 21"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};
