import React from 'react';
import './App.css';

import {HashRouter as Router, Route, Link} from 'react-router-dom';

import {Container, Pagination, Jumbotron} from "react-bootstrap";

import QuestionList from "./components/QuestionList";

import questions1 from "./questions/ooad/ooad";

function App() {
  return (
    <Router>
      <Container>
        <Jumbotron>
          <Pagination>
            <Pagination.Item><Link to="/">1</Link></Pagination.Item>
          </Pagination>

          <Route path="/" exact component={() => <QuestionList questions={questions1} />} />

          <Pagination>
            <Pagination.Item><Link to="/">1</Link></Pagination.Item>
          </Pagination>
        </Jumbotron>
      </Container>
    </Router>
  );
}

export default App;
