import react from "react"
import { useState, useEffect } from "react"
import Data from "../MOCK_DATA.json"

export default function NavBar() {
const [query, setQuery] = useState("")
const [category, setCategory] = useState("Home")

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
            
        
            <div className="categories">
                <button className="category-buttons" onClick = {() => {setCategory("Home")}}>Home</button>
                <button className="category-buttons" onClick = {() => {setCategory("House Plants")}}>Houseplants</button>
                <button className="category-buttons" onClick = {() => {setCategory("Outdoor Plants")}}>Outdoor Plants</button>
                <button className="category-buttons" onClick = {() => {setCategory("Vegetables")}}>Vegetables</button>
            </div>

            <div className="header-buttons">
                <input className= "search-bar" placeholder="Search all posts" onChange={event => setQuery(event.target.value)}/>
                <button className="user-buttons">Log In</button>
                <button className="user-buttons">Register</button>
            </div>
        </div>
    </div>
    </div>
    <div className="category-header">
        <h3>{category}</h3>
    </div>

{/* Search bar that filters through post content, and maps through dummy data. */}
    {
    Data.filter(post => {
        if (query === "") {
            return post;
        } else if (post.post.toLowerCase().includes(query.toLowerCase())) {
            return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
        } else if (post.username.toLowerCase().includes(query.toLowerCase())) {
            return post;
    }}).map((post, index) => (
        <div key={index}>
            <p>{post.username}</p>
            <p>{post.title}</p>
            <p>{post.post}</p>
        </div>
        ))
    }

    
    </>
    );
};