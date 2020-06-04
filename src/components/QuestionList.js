import React, {Component} from 'react';

import {Button} from "react-bootstrap";

import Question from "./Question";

import PubSub from "pubsub-js";

import ooad from "../questions/ooad/ooad";

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class QuestionList extends Component{
    constructor() {
        super();

        this.dataSet = this.makeAllQuestions();
        this.totalQuestions = this.dataSet.length;
        this.pageSize = typeof this.pageSize === "number" ? this.pageSize : 15;
        this.pagesCount = Math.ceil(this.totalQuestions / this.pageSize);

        this.state = {currentPage: 0};
    }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({currentPage: index});
    }
    checkAnswer = () => {
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
        // const questions = this.makeAllQuestions();
        const { currentPage } = this.state;
        return (
            <div className="questions">

                {
                    this.dataSet.slice(currentPage * this.pageSize, (currentPage + 1) * this.pageSize)
                    .map((question, i) => {
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

                <div className="pagination-wrapper">
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage - 1)}
                                previous
                                href="#"
                            />
                        </PaginationItem>

                        {[...Array(this.pagesCount)].map((page, i) =>
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={e => this.handleClick(e,i)} href="#">
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage + 1)}
                                next
                                href="#"
                            />
                        </PaginationItem>

                    </Pagination>
                </div>

                {/*<div className="questions">*/}
                {/*    {*/}
                {/*        questions.map((question, i) => {*/}
                {/*            return (*/}
                {/*                <Question*/}
                {/*                    key={i}*/}
                {/*                    question={question}*/}
                {/*                    index={i}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*    <Button variant="primary" onClick={this.checkAnswer}>Submit</Button>*/}
                {/*    <hr />*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default QuestionList;
