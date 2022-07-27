import React, { useState, useEffect } from 'react';
import Questions from './Questions'


export default function Answers(props) {
    const {expanded, setExpanded, questions} = props
    return (
                <>
                {expanded ? (
                    <>
                        {questions.map((question, index) => (
                            question.answers[0].body
                        ))}
                        <button onClick={() => {setExpanded(!expanded)}}>See Less</button>
                    </>
                ) : (
                    <button onClick={() => {setExpanded(!expanded)}}>See More</button>
                )
                }
                </>
            )
    }

