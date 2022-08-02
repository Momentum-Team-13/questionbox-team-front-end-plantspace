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


const handleChange = (event) => {
    setCategory({value: event.target.value});
}

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
        {navigate("/")
        })
        .catch((error) => {
            setError(error.message)
        })
}


    return (
    <>
    <div className="whole-question">   
        <form id="question-form" onSubmit={handleSubmit}>
            <label className="question-labels">Title:   
                <input 
                    id="question-title"
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </label> <br /> <br />
            <label className="question-labels">Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="category" id="categories">
                <option value="1">House Plants</option>
                <option value="2">Outdoor Plants</option>
                <option value="3">Vegetables</option>
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
            <input type="submit" onClick ={handleSubmit}/>
        </form>
    </div>
    </>
    )
}