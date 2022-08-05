import axios from "axios"
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react';


export default function EditQuestion() {
    const [question, setQuestion] = useState(null)
    const [editedQuesetion, setEditedQuestion] = useState(null)
    console.log("worked!")
    const params = useParams()
    // console.log(params.questionId)

    function handleEditSubmit() {
        console.log(editedQuesetion)
        // waiting for endpoint from backend to post edited Q
    }

    useEffect(() => {

        axios.get(`https://plantspace-fennec-foxes.herokuapp.com/api/questions/${params.questionId}/details`)
            .then(res => {
                let results = (res.data)
                console.log(results.body)
                setQuestion(results.body)
            })
    }, [])


    return (
        <>
            <div className="edit-question-form">
                <form>
                    <textarea
                        defaultValue={question}
                        className="edit_question"
                        rows={10}
                        cols={50}
                        onChange={(e) => setEditedQuestion(e.target.value)}
                    ></textarea>
                </form>

                <button onClick={handleEditSubmit} className="answers-button">Submit Edited Question</button>
        </div>
            </>
    )
}