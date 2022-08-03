import './App.css'
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
import EditQuestion from './EditQuestion';



function App() {
  const [token, setToken] = useLocalStorageState('plantToken', null)
  const [username, setUsername] = useLocalStorageState('plantUsername', '')
 
  


  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
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
        <Routes>
          <Route 
            path="/askquestion"
            element={<AskQuestion 
              isLoggedIn={isLoggedIn} 
              user={username} 
              navigate={navigate}
              token={token}/>}
          />
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
              navigate={navigate}
              setAuth={setAuth}
              />}
            />
          <Route
            path="/"
            element={<Questions 
              isLoggedIn={isLoggedIn} 
              token={token} 
              username={username}
              navigate={navigate}
              />}
            />
          <Route
            path="/question/:questionId"
            element={<SingleQuestionView 
              isLoggedIn={isLoggedIn} 
              token={token} 
              username={username} 
              Answers={Answers}  
              navigate={navigate}     
              />}
            />
          <Route
            path="/question/edit/:questionId"
            element={<EditQuestion 
              isLoggedIn={isLoggedIn} 
              token={token} 
              username={username} 
              Answers={Answers}  
              navigate={navigate}     
              />}
            />
          <Route 
            path="/myprofile"
            element={<ProfilePage
              isLoggedIn={isLoggedIn}
              token={token}
              navigate={navigate}
              username={username}
              />}
              />
         </Routes>

      </div>
      
      
    </>
  );
}

export default App;
