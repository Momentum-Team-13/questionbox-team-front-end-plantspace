import { Link, useParams} from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'


export default function IndividualQuestion(props) {
    const { questionObject, index, username, isLoggedin, token, navigate } = props
    const [error, setError] = useState(null)

    const params = useParams()
    // console.log(`QL: ${params.questionId}`)


    return (
        <>
            <div className='individual_question'>
                <div className='specific_question'>
                    <h2 key={index}><Link to={`/question/${questionObject.id}`}> {questionObject.title}</Link></h2>
                    <p>Replies: </p>
                    {/* {questionObject.answers.length}</p> */}
                </div>
                <p>Submitted by: {questionObject.user}  on (date)</p>
                <p>{questionObject.body}</p>
            </div>
        </>
    )
}