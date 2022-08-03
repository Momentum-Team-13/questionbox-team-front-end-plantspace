import Moment from 'react-moment';
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'
import Answers from './Answers';


export default function IndividualQuestion(props) {
    const { questionObject, index, username, navigate} = props
    const [error, setError] = useState(null)


    const params = useParams()
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

// if they click the star, axios post request to favorite endpoint. in the .then setFavorite to true?
// then an {favorite=true && show filled in star, otherwise show empty star}