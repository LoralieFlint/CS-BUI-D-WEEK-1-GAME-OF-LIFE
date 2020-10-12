import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  color: green;
  font-weight: 900;
  font-family: "Anton", sans-serif;
  font-size: 45px;
`;
const Rules = styled.h3`
  color: teal;
  font-family: "Anton", sans-serif;
  font-size: 25px;
`;
const List = styled.li`
  color: teal;
  font-family: "Anton", sans-serif;
  font-size: 15px;
`;

function Main() {
  return (
    <div className="App">
      <Title>Conways Game Of Life</Title>
      <Rules>Rules of the Game:</Rules>
      <List className="topListItem">
        If a cell is "alive" and has 2-3 neighbors it remains alive. Else it
        dies
      </List>
      <List className="bottomListItem">
        If a cell is "dead" and has exactly 3 neighbors, then it comes to life.
        Else it dies.
      </List>
      <Link className="learnMore" to="/info">
        Learn More
      </Link>
    </div>
  );
}
export default Main;
