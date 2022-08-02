import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import IndividualQuestion from './IndividualQuestion';

export default function Questions(props) {
    const { isLoggedIn, username, token, navigate} = props

    const [questionList, setQuestionList] = useState(null)



    useEffect(() => {
        axios.get('https://plantspace-fennec-foxes.herokuapp.com/api/questions')
            .then(res => {
                let results = (res.data)
                setQuestionList(results.reverse())
                console.log(results)
            })
    }, [])



    return (
        <>
            {isLoggedIn && <h2>Welcome, {username}! 🌻</h2>}
            <h3 className='questions_title'>All Plant Questions :</h3>
            <div className='scrollbar'>
                {questionList && questionList.map((questionObject, index) => {
                    return (
                        <IndividualQuestion 
                        questionObject={questionObject} 
                        questionList={questionList}
                        index={index} 
                        Answers={Answers} 
                        username={username}
                        isLoggedIn={isLoggedIn}
                        token={token}
                        navigate={navigate}
                        />
                )
            })}                    
            </div>
            
        </>
    )
}
