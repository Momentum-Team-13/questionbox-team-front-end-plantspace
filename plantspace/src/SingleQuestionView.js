import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import axios from 'axios';


export default function SingleQuestionView(props) {
    const {isLoggedIn, username, token, navigate } = props

    const[singleQuestionList, setSingleQuestionList] = useState({})
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


    return (
        <>
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
            </div>
            {isLoggedIn ? (
                <>
                    <h2>Submit an Answer Here:</h2>
                    <form>
                        <textarea
                            rows={10}
                            cols={50}
                        />
                    </form>
                </>
            ) : (
                ('')
            )
            }
        </>
    )
}
