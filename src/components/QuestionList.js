import React, {Component} from 'react';

import {Button} from "react-bootstrap";

import Question from "./Question";

import ooad from '../questions/ooad/ooad1.json'
import PubSub from "pubsub-js";

class QuestionList extends Component{

    checkAnswer = () => {
        // this.setState({checked:true});
        PubSub.publish("SUMMIT_ANSWER", 'submit_answer')
    };

    makeAllQuestions = () => {
        const questions = [];
        for (let value of Object.values(ooad)) {
            questions.push(...value)
        }
        return questions
    };


    render() {
        const questions = this.makeAllQuestions();
        return (
            <div className="questions">
                {
                    questions.map((question, i) => {
                        return (
                            <Question
                                key={i}
                                question={question}
                                index={i}
                            />
                        )
                    })
                }

                <Button variant="primary" onClick={this.checkAnswer}>Submit</Button>
                <hr />
            </div>
        );
    }
}

export default QuestionList;
