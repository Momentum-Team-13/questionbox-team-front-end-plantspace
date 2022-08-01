import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Answers from './Answers'
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'


export default function SingleQuestionView(props) {
    const { isLoggedIn } = props

    const [singleQuestionList, setSingleQuestionList] = useState(null)

    const params = useParams()
    console.log(`QL: ${params.questionId}`)

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
                </div>}
            {isLoggedIn ? (
                <>
                    <h2>Submit an Answer Here:</h2>
                    <form>
                        <textarea
                            rows={10}
                            cols={100}
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
