import {useState} from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"

export default function AskQuestion(props) {
const [title, setTitle] = useState("")
const [body, setBody] = useState("")
const [isShown, setIsShown]= useState(false)
const [error, setError] = useState(null)
const [question, setQuestion] = useState(null)

const {isLoggedIn, token, user} = props

const navigate = useNavigate()

const handleClick = event => {
    setIsShown(current => !current);
};

const handleSubmit = event => {
    event.preventDefault()
    setError(null)


    axios
        .post(
            "https://plantspace-fennec-foxes.herokuapp.com/api/questions/new/", 
            {title, body, user},
        {
            headers: { Authorization: `Token ${token}` },
        })
        
        .then ((response) => 
        {setQuestion(response.data)
        })
        .catch((error) => {
            setError(error.message)
        })
}


    return (
    <>
    <div className="whole-question">   
        {/* {<Navigate to="/askQuestion" />}  */}

        {isLoggedIn && <button className="question-button" onClick={handleClick}>Ask a Question!</button>}
        {isShown && 
        <form id="question-form" onSubmit={handleSubmit}>
            <label className="question-labels">Title:   
                <input 
                    id="question-title"
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </label> <br /> <br />
            <label className="question-labels">Category:
            <select name="category" id="categories">
                <option value="House Plants">House Plants</option>
                <option value="Outdoor Plants">Outdoor Plants</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            </label> <br /> <br />
            <label className="question-labels">Question:
                <textarea
                    id="question-body"
                    name="question-area"
                    type="textarea"
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />
            </label>
            <input type="submit" />
        </form>}
    </div>
    <div>
        {/* <h3>{question.title}</h3>
        <p>{question.body}</p> */}
    </div>
    </>
    )
}