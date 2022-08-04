import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import ProfilePage from "./ProfilePage"
import Questions from "../Questions"
import AskQuestion from "./AskQuestion"



export default function NavBar(props) {
const {navigate, handleLogout, token, login, question, isLoggedIn, setAuth, setSelectedCategory, setMyProfileQuestions, userIsMe, username} = props
const [query, setQuery] = useState("")
const [category, setCategory] = useState("Home")
const [profile, setProfile] = useState([])


useEffect ((category) => {
    setCategory(category)
}, []);


    return (
    <>
    <div className="header-bg">
    <div className="header">
        <div className="header-elements">
            <h1> PlantSpace </h1>
            <h2>It ain't easy being green, but we're here to help.</h2>
            
        <nav>
            <div className="categories">
                <button className="category-buttons" onClick ={() => {setSelectedCategory(""); navigate('/'); setCategory("Home")}}>All Questions</button>
                <button className="category-buttons" onClick = {() => {setSelectedCategory("House Plants"); setCategory("House Plants")}}>Houseplants</button>
                <button className="category-buttons" onClick = {() => {setSelectedCategory("Outdoor Plants"); setCategory("Outdoor Plants")}}>Outdoor Plants</button>
                <button className="category-buttons" onClick = {() => {setSelectedCategory("Vegetables"); setCategory("Vegetables")}}>Vegetables</button>
            </div>

            <div className="header-buttons">
                <input className= "search-bar" placeholder="Search all posts" onChange={event => setQuery(event.target.value)}/>
                {isLoggedIn ? (
                    <>
                    <button className="user-buttons" onClick ={() => handleLogout()}>Logout</button>
                    <button className="user-buttons" onClick={() => {setCategory("My Profile"); navigate("/myprofile")}}>My Profile</button>
                    <button className="user-buttons" onClick ={() => {navigate('/askquestion'); setCategory("Ask a Question")}}>Ask a Question</button>

                    </>
                ) : (
                    <>
                <button className="user-buttons" onClick ={() => navigate('/login')}>Log In</button>
                <button className="user-buttons" onClick ={() => navigate('/register')}>Register</button>
                
                </>
                )}
            </div>
        </nav>
        </div>
    </div>
    </div>
    <div className="category-header">
        <h1>{category} 🌱</h1>
    </div>
    </>
    );
};
