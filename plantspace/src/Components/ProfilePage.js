import { useState, useEffect } from "react"
import Answers from '../Answers'
import { Navigate } from "react-router-dom"
import axios from "axios";
import Moment from "react-moment";
import moment from 'moment'
import { Link, useParams} from 'react-router-dom'
import IndividualQuestion from "../IndividualQuestion";
import Questions from "../Questions";


export default function ProfilePage (props) {
const [myQuestionList, setMyQuestionList] = useState([])
const [myAnswerList, setMyAnswerList] = useState([])

const [expandedQuestions, setExpandedQuestions] = useState(false)
const [expandedAnswers, setExpandedAnswers] = useState(false)
const [expandedFavorites, setExpandedFavorites] = useState(false)

const {isLoggedIn, username, index, token, user, navigate, questionObject, answerList} = props



useEffect(() => {
    axios.get('https://plantspace-fennec-foxes.herokuapp.com/api/myquestions', 
    {headers: {
        Authorization: `Token ${token}`,
        }},)
    .then(res => {
        let myQuestions = (res.data.questions)
        console.log(res.data)
        setMyQuestionList(myQuestions.reverse())
        console.log(myQuestions)
        console.log(myQuestionList)

        let myAnswers = (res.data.answers)
        console.log(myAnswers)
        console.log(myAnswerList)
        setMyAnswerList(myAnswers.reverse())
    })
}, [] )



return (
    <>
        <h3>{username}'s Stats</h3>

    <div className="question-body">
        <h2>My Questions</h2>

        <div className="question-dropdown">
            {myQuestionList.length === 0 && (
            <button id="center-buttons" className="question-button" disabled={true}>
            You have asked no questions yet!
            </button>
        )}
        {myQuestionList.length !== 0 && (
            <button id="center-buttons"
            className="question-button"
            onClick={() => {
            setExpandedQuestions(!expandedQuestions)
            }}
            >
            {expandedQuestions ? 'Hide Questions' : 'See Questions'}
            </button>
        )}
        {expandedQuestions &&
            myQuestionList &&
            myQuestionList.map((questionObject, index) => {
            return (
                <IndividualQuestion
                questionObject={questionObject}
                myQuestionList={myQuestionList}
                index={index}
                Answers={Answers}
                username={username}
                isLoggedIn={isLoggedIn}
                token={token}
                navigate={navigate}
                />
                )
            })}
        </div>
        </div>

    <div className="answer-body">
        <h2>My Answers</h2>
            <div className="answer-dropdown">
                {myAnswerList.length === 0 && (
            <button id="center-buttons" className="question-button" disabled={true}>
            You have no answers!
            </button>
        )}
        {myAnswerList.length !== 0 && (
            <button id="center-buttons"
            className="question-button"
            onClick={() => {
            setExpandedAnswers(!expandedAnswers)
            }}
            >
            {expandedAnswers ? 'Hide Answers' : 'See Answers'}
            </button>
        )}
        {expandedAnswers &&
            myAnswerList &&
            myAnswerList.map((answer, index) => (
                <>
                    <div className='individual-answer'>
                        <p key={index}>{answer.answer_body}</p>
                        <p> Answered by: {answer.user} on on {moment(answer.created_at).format('MM/DD/YY h:mm a')}</p>
                    </div>
                </>
            ))}
            </div>
    </div>
            <div className="favorite-dropdown">
            <h2>My Favorites</h2>
            </div>
        <div className="user-answers"></div>   
    </>
    )
}