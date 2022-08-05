import Moment from 'react-moment';
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react';
import Answers from './Answers';


export default function IndividualQuestion(props) {
    const { questionObject, index, username, navigate} = props


    // const params = useParams()
    // console.log(`QL: ${params.questionId}`)


    return (
        <>
            <div className='individual_question'>
                <div className='specific_question'>
                    <h2 className='question' key={index}><Link to={`/question/${questionObject.id}`}>{questionObject.title}</Link></h2>
                    <p>Replies: {questionObject.answers.length}</p>
                </div>
                <p className="question_body">{questionObject.body}</p>
                <div className="submitted_by">
                    <p>Submitted by: {questionObject.user}  on {moment(questionObject.created_at).format('MM/DD/YY h:mm a')} </p>
                    <p>Category: {questionObject.category_name}</p>
                    <Answers answerList={questionObject.answers} user={questionObject.user} username={username} params={questionObject.id} navigate={navigate}/>
                </div>
            </div>
        </>
    )
}