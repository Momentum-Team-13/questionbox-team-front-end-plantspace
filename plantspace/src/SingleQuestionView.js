import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'


export default function SingleQuestionView(props) {
    const {isLoggedIn, username, token, navigate } = props

    const [singleQuestionList, setSingleQuestionList] = useState(null)
    const [answer, setAnswer] = useState(null) 
    const[error, setError] = useState(null)

    const params = useParams()
    // console.log(`QL: ${params.questionId}`)

    const handleDelete = () => {
        // event.preventDefault()
        setError(null)

        axios.delete(`https://plantspace-fennec-foxes.herokuapp.com/api/questions/${params.questionId}/trash`,
            {
                headers: { Authorization: `Token ${token}` },
            })
            .then((res) => {
                navigate('/login');
                console.log(res)
            })
            .catch((error) => {  
                setError(error.message)
            })
    }

    useEffect(() => {
        axios.get(`https://plantspace-fennec-foxes.herokuapp.com/api/questions/${params.questionId}/details`)
            .then(res => {
                let results = (res.data)
                setSingleQuestionList(results)
                console.log(singleQuestionList)
                // console.log(results)
            })
    }, [])

    function handleAnswerSubmit(e) {
        e.preventDefault()
        // console.log(e.target.value)
        console.log(answer)
    }


    return (
        <>
            {!singleQuestionList &&
                <div className='loader'><RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true} />
                </div>}
            {singleQuestionList &&
                <div className="single_question">
                    <h2>{singleQuestionList.title}</h2>
                    <p>Submitted by: {singleQuestionList.user}</p>
                    <h2>{singleQuestionList.body}</h2>
                    {username === singleQuestionList.user ? (
                    <button onClick={() => handleDelete()}>Delete Question</button>
                ) : (
                    ('')
                )
                }
                </div>}
            {isLoggedIn ? (
                <>
                    <h2>Submit an Answer:</h2>
                    <form onSubmit={handleAnswerSubmit}>
                        <textarea
                            rows={10}
                            cols={100}
                            placeholder="Write Your Answer Here" 
                            onChange={(e) => setAnswer(e.target.value)}                      
                        />
                        <div className="form-submit">
                            <input type="submit" value="Submit Answer" />
                        </div>
                    </form>
                </>
            ) : (
                ('')
            )
            }
        </>
    )
}
