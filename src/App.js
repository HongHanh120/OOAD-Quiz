import React from 'react';
import './App.css';

import {HashRouter as Router, Route} from 'react-router-dom';

import {Container, Jumbotron} from "react-bootstrap";

import QuestionList from "./components/QuestionList";

import questions from "./questions/ooad/ooad";

function App() {
  return (
    <Router>
      <Container>
        <Jumbotron>
          <Route path="/" exact component={() => <QuestionList questions={questions} />} />
        </Jumbotron>
      </Container>
    </Router>
  );
}

export default App;
