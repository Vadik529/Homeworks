import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Container } from "./components/Container";

export class App extends React.Component {
  render() {
    return(
    <div className="App">
      <Header name="my first react project"/>
      <Navigation link="https://ru.lipsum.com/"/>
      <Container />
    </div>);
  }
}

export default App;
