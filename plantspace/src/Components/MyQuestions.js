import Moment from 'react-moment';
import moment from 'moment'
import { Link, useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'


export default function MyQuestions(props) {
    const { questionObject, index, username, isLoggedIn, token, navigate} = props
    const [error, setError] = useState(null)
    const [currentUserIndex, setCurrentUserIndex] = useState(0)
    const [currentUser, setCurrentUser] = useState(null)



    // const dateToFormat = new Date('DD/MM/YYYY');
    
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
                <p>Submitted by: {questionObject.user}  on {moment(questionObject.created_at).format('MM/DD/YY h:mm a')} </p>
                <p>Category: {questionObject.category}</p>
                <p>{questionObject.body}</p>
            </div>
        </>
    )
}