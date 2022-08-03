import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'


export default function SingleQuestionView(props) {
    const { isLoggedIn, username, token, navigate, answerList } = props

    const [singleQuestionList, setSingleQuestionList] = useState(null)
    const [answer_body, setAnswer_Body] = useState(null)
    const [error, setError] = useState(null)
    const [isFavorite, setIsFavorite] = useState(false)

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
                // console.log(singleQuestionList)
                console.log(results)
            })
    }, [])

    function handleAnswerSubmit(e) {
        e.preventDefault()
        setError(null)
        axios.post(`https://plantspace-fennec-foxes.herokuapp.com/api/questions/${params.questionId}/answer/`,
            { answer_body },
            {
                headers: {
                    Authorization: `Token ${token}`
                },
            })
            .then((res) => {
                alert("Thank you for your answer!")
                navigate('/');

            })
            .catch((error) => {
                setError(Object.values(error.response.data))
                console.log(error)
            })
    }


    return (
        <>
            {!singleQuestionList &&
                <div className='loader'><RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="200"
                    visible={true} />
                </div>}
            {singleQuestionList &&
                <div className="individual_question">
                    <div className='title-and-star'>
                        <h2 className='question'>{singleQuestionList.title}</h2>
                        {isLoggedIn && isFavorite ? (
                           <>
                           <div className='click-and-star'>
                           <p className='click-to-favorite'>Click to Favorite!</p> 
                           <p onClick={() => setIsFavorite(!isFavorite)} className='favorite-star'>&#9733;</p>
                           </div>
                           </>
                        ) : (
                            <>
                            <div className='click-and-star'>
                            <p className='click-to-favorite'>Click to Favorite!</p>
                            <p onClick={() => setIsFavorite(!isFavorite)} className='favorite-star'>&#9734;</p>
                            </div>
                            </>
                        )
                        }
                    </div>
                    <p>Submitted by: {singleQuestionList.user}</p>
                    <h4>{singleQuestionList.body}</h4>
                    <Answers answerList={singleQuestionList.answers} />
                    {username === singleQuestionList.user ? (
                        <button className='answers-button' onClick={() => handleDelete()}>Delete Question</button>
                    ) : (
                        ('')
                    )
                    }
                </div>}
            {isLoggedIn ? (
                <>
                    <h2>Submit an Answer:</h2>
                    <form className="answer-form" onSubmit={handleAnswerSubmit}>
                        <textarea
                            rows={10}
                            cols={100}
                            placeholder="Write Your Answer Here"
                            onChange={(e) => setAnswer_Body(e.target.value)}
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
