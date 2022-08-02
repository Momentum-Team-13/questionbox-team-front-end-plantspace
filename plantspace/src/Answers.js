import React, { useState } from 'react';
import Questions from './Questions'
import moment from 'moment';


export default function Answers(props) {
    const [expanded, setExpanded] = useState(false)
    const { answerList } = props
    // console.log(questionList)
    return (
        <>
            {answerList.length === 0 && 
                <button className='answers-button' disabled={true}>Sorry, no answers yet!</button>
            }

            {answerList.length !== 0 && expanded && (
                <>
                    <button className="answers-button" onClick={() => { setExpanded(!expanded) }}>See Less</button>
                    {answerList.map((answer, index) => (
                        <>
                            <div className='individual-answer'>
                                <p key={index}>{answer.answer_body}</p>
                                <p> Answered by: {answer.user} on on {moment(answer.created_at).format('MM/DD/YY h:mm a')}</p>
                            </div>
                        </>
                    ))}
                </>
            )}

            {answerList.length !== 0 && !expanded && (
                <button className="answers-button" onClick={() => { setExpanded(!expanded) }}>See Answers</button>
            )}
        </>
    )
}

