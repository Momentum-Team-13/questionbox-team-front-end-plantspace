import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import IndividualQuestion from './IndividualQuestion';

export default function Questions(props) {
    const {questions, isLoggedIn, setAuth, token, username} = props
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        axios.get('https://plantspace-fennec-foxes.herokuapp.com/api/questions')
        .then(res => {
            let results = (res.data)
            setQuestionList(results)
            console.log(questionList)
        })
    }, [] )

    

    return (
        <>
            {isLoggedIn && <h2>Welcome, {username}!</h2>}
            <h3 className='questions_title'>All Q & A :</h3>
            {questionList.map((questionObject, index) => {
                return (
                    <IndividualQuestion questionObject={questionObject} index={index} Answers={Answers} />
                )
            })}
        </>
    )
}
