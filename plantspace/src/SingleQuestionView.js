import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import axios from 'axios';


export default function SingleQuestionView(props) {
    const {isLoggedIn } = props

    const[singleQuestionList, setSingleQuestionList] = useState([])

    const params = useParams()
    // console.log(`QL: ${params.questionId}`)

    useEffect(() => {
        axios.get(`https://plantspace-fennec-foxes.herokuapp.com/api/questions/${params.questionId}/details`)
            .then(res => {
                let results = (res.data)
                setSingleQuestionList(results)
                console.log(singleQuestionList)
            })
    }, [])


    return (
        <>
            <div className="single_question">
                <h2>{singleQuestionList.title}</h2>
                <p>Submitted by: {singleQuestionList.user}</p>
                <h2>{singleQuestionList.body}</h2>
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
