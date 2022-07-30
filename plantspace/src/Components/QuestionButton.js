import React from "react"

const QuestionButton = (props) => {

    return (
        <button className="question-button" onClick={props.onClick}>{props.text}</button>
    );
}
export {QuestionButton};