import { useState, useEffect } from "react"
import MyQuestions from './MyQuestions';
import Answers from '../Answers'
import { Navigate } from "react-router-dom"
import axios from "axios";
import Moment from "react-moment";
import moment from 'moment'
import { Link, useParams} from 'react-router-dom'


export default function ProfilePage (props) {
const [myQuestionList, setMyQuestionList] = useState(null)
const {isLoggedIn, username, index, token, navigate, questionObject} = props


function justMyQuestions () {
    let currentUser = {username}
console.log(currentUser)
} 

useEffect(() => {
    axios.get('https://plantspace-fennec-foxes.herokuapp.com/api/questions')
    .then(res => {
        let results = (res.data)
        let myResults = (res.data.filter(justMyQuestions))
        setMyQuestionList(myResults)
        console.log(results)
    })
}, [] )



return (
        <>
            <h3>{username}'s Profile</h3>
            {myQuestionList && myQuestionList.map((questionObject, index) => {
                return (
                    <MyQuestions
                        questionObject={questionObject} 
                        index={index} 
                        Answers={Answers} 
                        username={username}
                        isLoggedIn={isLoggedIn}
                        token={token}
                        navigate={navigate} />
                )
                
            })}    
        </>
    );
}