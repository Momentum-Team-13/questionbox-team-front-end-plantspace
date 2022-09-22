import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import IndividualQuestion from './IndividualQuestion';
import { RotatingLines } from 'react-loader-spinner'

export default function Questions(props) {
    const { isLoggedIn, username, navigate, categoryName, searchResults, query} = props

    const [questionList, setQuestionList] = useState(null)



    useEffect(() => {
        axios.get('https://plantspace-fennec-foxes.herokuapp.com/api/questions')
        .then(res => {
                let results = (res.data)
                // if we have a category name, take the results and filter to keep everything that matches our category name.
                if (categoryName) {
                    results = results.filter((question) => question.category_name === categoryName) 
                }
                if (query) {
                    console.log(query)
                    results = results.filter((resultObject) => {
                        console.log(Object.values(resultObject))
                        for (let element of Object.values(resultObject)) {
                            if (typeof element === 'string' && element.toLowerCase().includes(query)) {
                                return resultObject
                            }
                        } 
                    }
                    )
                }
                setQuestionList(results)
                console.log(results)
            })
    }, [categoryName, query])



    return (
        <>
            {isLoggedIn && <h3>Welcome, {username}! 🌻</h3>}
            <h2 className='questions_title'>All Plant Questions :</h2>
            {!questionList &&
                <div className='loader'><RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="200"
                    visible={true} />
                </div>}

            <div className='scrollbar'>
                {questionList && questionList.map((questionObject, index) => {
                    return (
                        <IndividualQuestion 
                        questionObject={questionObject} 
                        index={index} 
                        username={username}
                        navigate={navigate}
                        />
                )
            })}                    
            </div>
            
        </>
    )
}

