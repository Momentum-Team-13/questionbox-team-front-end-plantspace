import { useState, useEffect } from "react"
import ProfilePage from "./ProfilePage"
import Questions from "../Questions"


export default function NavBar(props) {
const [query, setQuery] = useState("")
const [category, setCategory] = useState("Home")
const [profile, setProfile] = useState([])




const profilePage = <ProfilePage />

const handleProfile = (profilePage) => {
    console.log("you have clicked profile.")
    setProfile(profilePage)
}

useEffect (() => {
    setCategory(category)
});



    return (
    <>
    <div className="header-bg">
    <div className="header">
        <div className="header-elements">
            <h1> PlantSpace </h1>
            <h2>It ain't easy being green, but we're here to help.</h2>
            
        <nav>
            <div className="categories">
                <button className="category-buttons" onClick = {() => {setCategory("Home")}}>Home</button>
                <button className="category-buttons" onClick = {() => {setCategory("House Plants")}}>Houseplants</button>
                <button className="category-buttons" onClick = {() => {setCategory("Outdoor Plants")}}>Outdoor Plants</button>
                <button className="category-buttons" onClick = {() => {setCategory("Vegetables")}}>Vegetables</button>
            </div>

            <div className="header-buttons">
                <input className= "search-bar" placeholder="Search all posts" onChange={event => setQuery(event.target.value)}/>
                <button className="user-buttons" onClick ={() => alert("Log in!")}>Log In</button>
                <button className="user-buttons">Register</button>
                <button className="user-buttons" onClick={() => handleProfile(profilePage)}>My Profile</button>
            </div>
        </nav>
        </div>
    </div>
    </div>
    <div className="category-header">
        <h3>{category}</h3>
    </div>



 {/* {
    questions.filter(questions => {
        if (query === "") {
            return questions;
        } else if (questions.user.toLowerCase().includes(query.toLowerCase())) {
            return questions;
        } else if (questions.title.toLowerCase().includes(query.toLowerCase())) {
            return questions;
        } else if (questions.body.toLowerCase().includes(query.toLowerCase())) {
            return questions;
    }}).map((question, index) => (
        <div key={index}>
            <p>{question.user}</p>
            <p>{question.title}</p>
            <p>{question.body}</p>
        </div>
        ))
    } */}

    
    </>
    );
};
