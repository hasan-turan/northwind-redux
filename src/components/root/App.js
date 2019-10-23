import React from "react";
import { Container } from "reactstrap";
import Navigation from "../navi/Navigation";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navigation />
      <Dashboard />
    </Container>
  );
}

export default App;
