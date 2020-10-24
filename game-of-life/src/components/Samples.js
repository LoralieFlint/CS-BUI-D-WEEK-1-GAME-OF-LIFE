import React from "react";
import styled from "styled-components";
import { presetOne, presetTwo, presetThree, presetFour } from "./presets";

const Holder = styled.section`
  // background-color: black;
  width: 40%;
  margin-top: 20px;
  margin-left: 200px;
`;

const Title = styled.h3`
  color: teal;
`;

const Select = styled.button`
  color: green;
`;

function Samples({ setGrid }) {
  return (
    <Holder>
      <div>
        <Title>Preset1</Title>
        <Select
          onClick={() => {
            setGrid(presetOne);
          }}
        >
          Run Me
        </Select>
      </div>
      <br />
      <div>
        <Title>Preset2</Title>
        <Select
          onClick={() => {
            setGrid(presetTwo);
          }}
        >
          Run Me
        </Select>
      </div>
      <br />
      <div>
        <Title>Preset3</Title>
        <Select
          onClick={() => {
            setGrid(presetThree);
          }}
        >
          Run Me
        </Select>
      </div>
      <br />
      <div>
        <Title>Preset4</Title>
        <Select
          onClick={() => {
            setGrid(presetFour);
          }}
        >
          Run Me
        </Select>
      </div>
    </Holder>
  );
}
export default Samples;
