import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import Link from "next/link";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// const Button = styled.button`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   font-weight: bold;
//   &:hover {
//     color: white;
//   }
// `;

const Title = styled.h1`
  text-align: center;
`;
const Nav = styled.h2`
  text-align: center;
  a:hover {
    background-color: yellow;
  }
`;

// const Button = styled.a`
//  text-align: center;

// `

function Icons() {
  return (
    <div>
      <div>
        <Title>Icons</Title>
      </div>
    </div>
  );
}

export default Icons;
