import React, { useState } from 'react';
import Answers from './Answers'
// import axios from 'axios';

export default function Questions(props) {
    const {questions} = props

    return (
        <>
            <h3 className='questions_title'>All Q & A :</h3>
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
                        <Answers answers={question.answers}/>
                        </div>
                    </>
                )
            })}
        </>
    )
}
