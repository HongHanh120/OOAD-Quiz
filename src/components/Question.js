import React, {
    Component
} from 'react';

import Answer from "./Answer";

class Question extends Component {

    render() {
        const {question} = this.props;
        const answers = question["answers"];
        // const answers = question.answers;
        // const answers = question["answers"].sort(() => 0.5 - Math.random());
        return (
            <div className= "question">
                <div className="form-group pt-2">
                    <label className="font-weight-seminole"><strong>{question["position"]}. {question["cont"]}</strong></label>
                    {
                        answers.map((answer, index) =>{
                            return <Answer key={answer.key} answer={answer}
                                            corrects={question.corrects}  position={question.position}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Question;