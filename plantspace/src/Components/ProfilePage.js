import { useState, useEffect } from "react"
import Questions from "../Questions";
import Answers from '../Answers'
import Data from "../MOCK_DATA.json"


export default function ProfilePage (props) {
const [expandedQuestions, setExpandedQuestions] = useState(false);
const [expandedAnswers, setExpandedAnswers] = useState(false)
const {questions} = props
const {answers} = props


    return (
        <>
            <h1>My Profile</h1>
                <div className="welcome-back">
                    <div className="container">
                        <h3>My Questions</h3>
                        {questions.map((question, index) => {
                return (
                    <>
                        <div className='individual_question'>
                            <div className='specific_question'>
                                <h2 key={index}>{question.title} </h2>
                                <p>Replies (count)</p>
                            </div>
                            <p>Submitted by: {question.user}  on (date)</p>
                            <p>{question.body}</p>
                        <Answers answers={question.answers}/>
                        </div>
                    </>
                )
            })}
                        <h3>My Answers</h3>
                        <>
                {expandedAnswers ? (
                    <>
                        <button onClick={() => {setExpandedAnswers(!expandedAnswers)}}>See Less</button>
                        {answers.map((answer, index) => (
                            <>
                            <div className="answer_body">
                                {answer.body}
                            </div>
                            </>
                        ))}
                    </>
                ) : (
                    <button onClick={() => {setExpandedAnswers(!expandedAnswers)}}>See Answers</button>
                )
                }
                </>
                        <h3>My Favorites</h3>
                    </div>
            </div>
        </>
    );
}