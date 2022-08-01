import { useState, useEffect } from "react"
import Questions from "../Questions";
import Answers from '../Answers'
import Data from "../MOCK_DATA.json"
import { Navigate } from "react-router-dom"
import axios from "axios";
import Moment from "react-moment";
import moment from 'moment'
import { Link, useParams} from 'react-router-dom'


export default function ProfilePage (props) {
const [expandedQuestions, setExpandedQuestions] = useState(false);
const [expandedAnswers, setExpandedAnswers] = useState(false)
const [myQuestionList, setMyQuestionList] = useState(null)
const {questions, answers, isLoggedIn, username, index, token, navigate, questionObject} = props

let myUsername = {username}


 
useEffect(() => {
    axios.get('https://plantspace-fennec-foxes.herokuapp.com/api/questions')
    .then(res => {
        let results = (res.data)
        setMyQuestionList(results)
        console.log(results)
    })
}, [] )

return (
        <>
            <h3>My Profile</h3>
        </>
    );
}