import Moment from 'react-moment';
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import Answers from './Answers';


export default function IndividualQuestion(props) {
    const { questionObject, questionList, index, username, isLoggedin, token, navigate } = props
    const [error, setError] = useState(null)


    const params = useParams()
    // console.log(`QL: ${params.questionId}`)


    return (
        <>
            <div className='individual_question'>
                <div className='specific_question'>
                    <h2 className='question' key={index}><Link to={`/question/${questionObject.id}`}> {questionObject.title}</Link></h2>
                    <p>Replies: {questionObject.answers.length}</p>
                </div>
                <p className="question_body">{questionObject.body}</p>
                <div className="submitted_by">
                    <p>Submitted by: {questionObject.user}  on {moment(questionObject.created_at).format('MM/DD/YY h:mm a')} </p>
                    <p>Category: {questionObject.category}</p>
                    {/* <p>Answers: {questionObject.answers[0].answer_body}</p> */}
                    <Answers answerList={questionObject.answers}/>
                </div>
            </div>
        </>
    )
}