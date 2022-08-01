import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import IndividualQuestion from './IndividualQuestion';

export default function Questions(props) {
    const {isLoggedIn, username, token, navigate} = props

    const [questionList, setQuestionList] = useState(null)

    

    useEffect(() => {
        axios.get('https://plantspace-fennec-foxes.herokuapp.com/api/questions')
        .then(res => {
            let results = (res.data)
            setQuestionList(results)
            console.log(results)
        })
    }, [] )



    return (
        <>
            {isLoggedIn && <h2>Welcome, {username}! 🌻</h2>}
            {/* {isLoggedIn && <button>Ask a Question!</button>} */}
            <h3 className='questions_title'>All Q & A :</h3>
            {questionList && questionList.map((questionObject, index) => {
                return (
                    <IndividualQuestion 
                        questionObject={questionObject} 
                        index={index} 
                        Answers={Answers} 
                        username={username}
                        isLoggedIn={isLoggedIn}
                        token={token}
                        navigate={navigate}/>
                        
                )
            })}
        </>
    )
}
