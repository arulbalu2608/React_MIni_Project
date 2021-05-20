import "./App.css";
import Background from "./comp/Background";
import IncDec from "./comp/IncDec";
import IncDecComp from "./comp/IncDecComp";
import Todo from "./Todo/Todo";
import Multiplication from "./comp/Multiplication";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homee from "./project_login/Homee";
import Header from "./comp/Header";
import UserComp from "./Form/UserComp";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-2"></div>
        <div className="container col-12 col-sm-8">
          <h1 className="text-center">Welcome to React demo</h1>
          <br />

          <h4>
            This project was created by HTMl, Css, Reactstrap, React,
            ReactRouter. Using the Navigation Bar you can see all the projects
            Demo
          </h4>
          <h5 className="d-flex justify-content-end">~Arul Prasad</h5>
        </div>
        <div className="col-12 col-sm-2"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/incDec">
            <IncDecComp />
          </Route>
          <Route exact path="/incDeccomp">
            <IncDec />
          </Route>
          <Route exact path="/multi">
            <Multiplication />
          </Route>
          <Route exact path="/back">
            <Background />
          </Route>
          <Route exact path="/todo">
            <Todo />
          </Route>
          <Route exact path="/form">
            <UserComp />
          </Route>
          <Route exact path="/login">
            <Homee />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
