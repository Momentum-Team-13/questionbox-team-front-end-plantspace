import { useState, useEffect } from "react"
import MyQuestions from './MyQuestions';
import Answers from '../Answers'
import { Navigate } from "react-router-dom"
import axios from "axios";
import Moment from "react-moment";
import moment from 'moment'
import { Link, useParams} from 'react-router-dom'
import IndividualQuestion from "../IndividualQuestion";


export default function ProfilePage (props) {
const [myQuestionList, setMyQuestionList] = useState(null)
const [myAnswerList, setMyAnswerList] = useState(null)
const {isLoggedIn, username, index, token, navigate, questionObject, userIsMe} = props



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
    })
}, [] )



return (
        <>
        <div className="user-questions">
            <h3>{username}'s Stats</h3>
            <h2>My Questions</h2>
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
        </div>
        <div className="user-answers"></div>   
        </>
    );
}