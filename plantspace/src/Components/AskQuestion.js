import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export default function AskQuestion(props) {
const [title, setTitle] = useState("")
const [category, setCategory] = useState(null)
const [body, setBody] = useState("")
const [error, setError] = useState(null)

const {token, user} = props

const navigate = useNavigate()


const handleChange = (event) => {
    setCategory(parseInt(event.target.value));
    console.log(event.target.value)
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
            <label className="question-labels"><h3>Title:</h3>
                <input 
                    id="question-title"
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </label> <br /> <br />
            <label className="question-labels"><h3>Category:</h3>
            <select value={category} onChange={handleChange} className="category" id="categories">
                <option value="">Please Select a Category</option>
                <option value="1">House Plants</option>
                <option value="2">Outdoor Plants</option>
                <option value="3">Vegetables</option>
            </select>
            </label> <br /> <br />
            <label className="question-labels"><h3>Question:</h3>
                <textarea
                    id="question-body"
                    name="question-area"
                    type="textarea"
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />
            </label>
        <div className="form-and-submit">
            <input type="submit" className="question-button" onClick ={handleSubmit}/>
        </div>
        </form>
    </div>
    </>
    )
}