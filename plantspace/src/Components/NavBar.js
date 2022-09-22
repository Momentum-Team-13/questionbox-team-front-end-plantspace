import { useState, useEffect} from "react"
import axios from 'axios';
import useLocalStorageState from 'use-local-storage-state'

export default function NavBar(props) {
const {navigate, handleLogout, isLoggedIn, setSelectedCategory, query, setQuery} = props
const [searchResults, setSearchResults] = useState('')
const [category, setCategory] = useLocalStorageState("category", "Home")

// function runSearch() {
//     console.log(query)
//     axios.get('https://plantspace-fennec-foxes.herokuapp.com/api/questions')
//     .then(res => {
//             let results = (res.data)
//             console.log(results)
//             results.filter((resultObject) => {
//                 console.log(Object.values(resultObject))
//                 for (let element of Object.values(resultObject)) {
//                     if (typeof element === 'string' && element.toLowerCase().includes(query)) {
//                         console.log(resultObject)
//                         setSearchResults(resultObject)
//                     }
//                 } 
//             }
//             )
//         })
// }

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
                <button className="category-buttons" onClick = {() => {setSelectedCategory("House Plants"); navigate("/houseplants"); setCategory("House Plants")}}>Houseplants</button>
                <button className="category-buttons" onClick = {() => {setSelectedCategory("Outdoor Plants"); navigate("/outdoorplants"); setCategory("Outdoor Plants")}}>Outdoor Plants</button>
                <button className="category-buttons" onClick = {() => {setSelectedCategory("Vegetables"); navigate("/vegetables"); setCategory("Vegetables")}}>Vegetables</button>
            </div>

            <div className="header-buttons">
                <input className= "search-bar" placeholder="Search all posts" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                {/* <button className="user-buttons" onClick ={() => { navigate("/searchresults")}}>Search</button> */}

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
