import { useParams, } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'
// import useLocalStorageState from 'use-local-storage-state'



export default function SingleQuestionView(props) {
    const { isLoggedIn, username, token, navigate, user } = props

    const [singleQuestionList, setSingleQuestionList] = useState(null)
    const [answer_body, setAnswer_Body] = useState(null)
    const [error, setError] = useState(null)
    const [isFavorite, setIsFavorite] = useState(false)

    const params = useParams()
    // console.log(`QL: ${params.questionId}`)

    useEffect(() => {
        axios.get(`https://plantspace-fennec-foxes.herokuapp.com/api/questions/${params.questionId}/details`)
            .then(res => {
                let results = (res.data)
                results["starred_by"] = ["dummy007"]
                setSingleQuestionList(results)
                // console.log(singleQuestionList)
                console.log(results)
                if (results.starred_by.includes("dummy007")) {
                    setIsFavorite(true)
                    console.log("yes")
                }
                else {
                    setIsFavorite(false)
                    console.log("no")
                }
            })
    }, [])

    const handleDelete = () => {
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


    const handleAnswerSubmit = (e) => {
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

    const handleFavorite = () => {
        setError(null)
        axios.post(`https://plantspace-fennec-foxes.herokuapp.com/api/questions/${params.questionId}/star/`,
            {},
            {
                headers: {
                    Authorization: `Token ${token}`
                },
            })
            .then((res) => {
                console.log("This is a favorite!")
                setIsFavorite(true)

            })
            .catch((error) => {
                setError(Object.values(error.response.data))
                console.log(error)
            })
    }

    const handleUnfavorite = () => {
        setError(null)
        axios.delete(`https://plantspace-fennec-foxes.herokuapp.com/api/questions/${params.questionId}/star/`,
        {
            headers: { Authorization: `Token ${token}` },
        })
            .then((res) => {
                setIsFavorite(false)
                console.log("This is no longer a favorite!")

            })
            .catch((error) => {
                setError(Object.values(error.response.data))
                console.log(error)
            })
    }


    return (
        <>
        {error && <div>{error}</div>}
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
                           <p onClick={() => {handleUnfavorite()}} className='favorite-star'>&#9733;</p>
                           </div>
                           </>
                        ) : (
                            <>
                            <div className='click-and-star'>
                            <p className='click-to-favorite'>Click to Favorite!</p>
                            <p onClick={() => {handleFavorite()}} className='favorite-star'>&#9734;</p>
                            </div>
                            </>
                        )
                        }
                    </div>
                    <p>Submitted by: {singleQuestionList.user}</p>
                    <h4>{singleQuestionList.body}</h4>
                    <Answers answerList={singleQuestionList.answers} username={username} user={user} />
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
                            <input className='answers-button' type="submit" value="Submit Answer" />
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
