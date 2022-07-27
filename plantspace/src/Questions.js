import React, { useState, useEffect } from 'react';
import Answers from './Answers'
// import axios from 'axios';

export default function Questions(props) {
    const {expanded, setExpanded, questions} = props

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
                        {/* <button onClick={() => setExpanded(!expanded)}>See More</button> */}
                        <Answers expanded={expanded} setExpanded={setExpanded} questions={questions}/>
                        </div>
                    </>
                )
            })}
        </>
    )
}
