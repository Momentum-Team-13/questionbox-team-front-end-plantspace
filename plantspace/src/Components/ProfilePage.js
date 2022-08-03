import { useState, useEffect } from "react"
import Answers from '../Answers'
import { Navigate } from "react-router-dom"
import axios from "axios";
import Moment from "react-moment";
import moment from 'moment'
import { Link, useParams} from 'react-router-dom'
import IndividualQuestion from "../IndividualQuestion";


export default function ProfilePage (props) {
const [myQuestionList, setMyQuestionList] = useState([])
const [myAnswerList, setMyAnswerList] = useState(null)

const [expandedQuestions, setExpandedQuestions] = useState(false)
const [expandedAnswers, setExpandedAnswers] = useState(false)
const [expandedFavorites, setExpandedFavorites] = useState(false)

const {isLoggedIn, username, index, token, navigate, questionObject, userIsMe, answerList} = props



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
    })
}, [] )



return (
        <>
            <h3>{username}'s Stats</h3>
            <h2>My Questions</h2>
            
            <div className="question-dropdown">
                {myQuestionList.length === 0 &&
                    <button className="question-button" disabled={true}>You have answered no questions yet!</button>}
                
                {myQuestionList.length !== 0 && !expandedQuestions && (
                                    
                        <button className="question-button" onClick={() =>{ setExpandedQuestions(!expandedQuestions)}}>Hide Questions</button>
                )}
                        {myQuestionList && myQuestionList.map((questionObject, index) => {
                            return (
                                <IndividualQuestion
                                    questionObject={questionObject} 
                                    myQuestionList={myQuestionList}
                                    index={index} 
                                    Answers={Answers} 
                                    username={username}
                                    isLoggedIn={isLoggedIn}
                                    token={token}
                                    navigate={navigate} />
                                )
                    
                            })} 

                {myQuestionList.length !== 0 && expandedQuestions && (
                    <button className="question-button" onClick={() => {setExpandedQuestions(expandedQuestions)}}>See Questions</button>
                )}
            </div>
            {/* <h2>My Answers</h2>
            <div className="answer-dropdown">

            </div>
            <div className="favorite-dropdown">
            <h2>MyFavorites</h2>
            </div>
        <div className="user-answers"></div>    */}
        </>
    );
}