import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    // <svg viewBox="0 0 106 28" height="30px">
    //   <path d="M62.9 12h2.8v10...." />
    //   <path fill="#f00" d="M25 14h-..." />
    //   <path d="M14 0C6.3..." fill="#639" />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="185">
      <text
        id="_jantonioavalos"
        data-name="@jantonioavalos"
        transform="translate(0 26)"
        fill="#888888"
        font-size="24"
        font-family="OpenSans-Bold, Open Sans"
      >
        <tspan x="0" y="0">
          @jantonioavalos
        </tspan>
      </text>
    </svg>
  );
}
