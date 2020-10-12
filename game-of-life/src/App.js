import React from "react";
import "./App.css";
import styled from 'styled-components'

const Title = styled.h1`
color: green;
font-weight: 900;
font-family: 'Anton', sans-serif;
font-size: 45px
`
const Rules = styled.h3 `
color: teal;
font-family: 'Anton', sans-serif;
font-size: 25px
`
const List = styled.li`
color: teal;
font-family: 'Anton', sans-serif;
font-size: 15px
`
const LearnMore = styled.button`
background-color: black;
color: teal;
padding: 7px;
border-radius: 15px;
border 1px solid gray;
margin-top: 10px;
font weight: 900;
&:hover {
  background-color: white;
  color: black;
}
`




function App() {
  return (
    <div className="App">
      <Title>Conways Game Of Life</Title>
      <Rules>Rules of the Game:</Rules>
      <List className="topListItem">
      If a cell is "alive" and has 2-3 neighbors it remains alive. Else it dies
      </List>
      <List>
      If a cell is "dead" and has exactly 3 neighbors, then it comes to life. Else it dies.
      </List>
      <LearnMore>Learn More</LearnMore>
      </div>
   
  );
}

export default App;
