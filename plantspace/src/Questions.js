import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export default function Questions() {
    const [expanded, setExpanded] = useState(true)
    const questions = [
        {
            "user": "Matt",
            "title": "Why is my pothos dying?",
            "body": "I've had this plant for 2 years and I haven't changed anything and now it's dying, help!"
        },
        {
            "user": "Fred",
            "title": "What are these bugs?",
            "body": "Can anyone identify these bugs on my tomato plants?  They are eating them all up!"
        },
        {
            "user": "Karen",
            "title": "Low maintenance?",
            "body": "What sort of plants would you suggest that are very low maintenance?"
        },
        {
            "user": "Katie",
            "title": "Good low-light plants?",
            "body": "I don't have a lot of light in my house and would like some suggestions for low-light plants!",
            "answers": [{ "user": "Frank", "body": "Get more lights!" }, { "user": "Tom", "body": "Pothos is a great low-light plant!" }]
        }
    ]

    return (
        <>
            <h1 className='questions_title'>Questions</h1>
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
                    </div>
                    {expanded ? (
                        <>
                            <h1>expanded!</h1>
                        </>
                    ) : (
                        <>
                            <h1>not expanded</h1>
                        </>
                    )}
                    </>
                )
            })}
        </>
    )
}
