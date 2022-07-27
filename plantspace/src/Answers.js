import React, { useState } from 'react';
import Questions from './Questions'


export default function Answers(props) {
    const [expanded, setExpanded] = useState(false)
    const {answers} = props
    return (
                <>
                {expanded ? (
                    <>
                        <button onClick={() => {setExpanded(!expanded)}}>See Less</button>
                        {answers.map((answer, index) => (
                            <>
                            <div className="answer_body">
                                <p>{answer.user} says:</p>
                                {answer.body}
                            </div>
                            </>
                        ))}
                    </>
                ) : (
                    <button onClick={() => {setExpanded(!expanded)}}>See Answers</button>
                )
                }
                </>
            )
    }

