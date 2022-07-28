import {useState} from "react"

export default function AskQuestion() {
const [title, setTitle] = useState("")
const [question, setQuestion] = useState("")
const [isShown, setIsShown]= useState(false)

const handleClick = event => {
    setIsShown(current => !current);
};

    return (
    <div>    
        <button onClick={handleClick}>Ask a Question!</button>
        {isShown && 
        <form>
            <label>Title:   
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </label> <br /> <br />
            <label>Category:
            <select name="category" id="categories">
                <option value="House Plants">House Plants</option>
                <option value="Outdoor Plants">Outdoor Plants</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            </label> <br /> <br />
            <label>Question:
                <textarea
                    name="question-area"
                    type="textarea"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)} />
            </label>
            <input type="submit" />
        </form>}
    </div>
    )
}