import {useState} from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"
import { Link, useParams} from 'react-router-dom'

export default function AskQuestion(props) {
const [title, setTitle] = useState("")
const [category, setCategory] = useState(null)
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
            {title, body, user, category},
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
                <option value="HOUSE_PLANTS" onChange={(e) => setCategory(e.target.value)}>House Plants</option>
                <option value="OUTDOOR_PLANTS" onChange={(e) => setCategory(e.target.value)}>Outdoor Plants</option>
                <option value="VEGETABLES" onChange={(e) => setCategory(e.target.value)}>Vegetables</option>
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