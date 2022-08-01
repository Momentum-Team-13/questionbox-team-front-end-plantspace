import './App.css';
import { useState } from "react"
import NavBar from "./Components/NavBar"
import Questions from './Questions'
import SingleQuestionView from './SingleQuestionView';
import Answers from './Answers';
import IndividualQuestion from './IndividualQuestion';
import Login from './Login'
import axios from 'axios'
import { Routes, Route, useNavigate, useParams} from 'react-router-dom'
import ProfilePage from "./Components/ProfilePage"
import AskQuestion from './Components/AskQuestion'
import Registration from './Registration';
import useLocalStorageState from 'use-local-storage-state'



function App() {
  const [token, setToken] = useLocalStorageState('libraryToken', null)
  const [username, setUsername] = useLocalStorageState('libraryUsername', '')
 
  


  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
    console.log(`Logging out with token ${token}`)
    axios
      .post(
        'https://plantspace-fennec-foxes.herokuapp.com/auth/token/logout',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() =>
        setAuth('', null)
      )
  }

  const navigate = useNavigate()

 


  const isLoggedIn = username && token
 
  return (
    <>
        <div className="App">
          <NavBar 
            setAuth={setAuth}
            token={token}
            handleLogout={handleLogout}
            Login={Login}
            isLoggedIn={isLoggedIn}
            navigate={navigate}/>
          <div>
        </div>
        <AskQuestion 
          isLoggedIn={isLoggedIn}
          user={username}
          token={token}/>
        <Routes>
          <Route 
            path="/login"
            element={<Login 
              setAuth={setAuth} 
              isLoggedIn={isLoggedIn} 
              navigate={navigate}
              />}
            />
          <Route
            path="/register"
            element={<Registration
              navigate={navigate} />}
            />
          <Route
            path="/"
            element={<Questions 
              isLoggedIn={isLoggedIn} 
              token={token} 
              username={username}
              />}
            />
          <Route
            path="/question/:questionId"
            element={<SingleQuestionView 
              isLoggedIn={isLoggedIn} 
              token={token} 
              username={username} 
              Answers={Answers} 
              />}
            />
         </Routes>
        {/* <ProfilePage 
        questions={questions}
        answers={questions.answers}/> */}
      </div>
      
      
    </>
  );
}

export default App;
