import './App.css';
import NavBar from "./Components/NavBar"
import Questions from './Questions'

function App() {
  const questions = [
    {
        "id": 1,
        "user": "Matt",
        "title": "Why is my pothos dying?",
        "body": "I've had this plant for 2 years and I haven't changed anything and now it's dying, help!",
        "answers": [{"user": "Elise", "body": "Do you make sure you take the dead leaves off?"}]
    },
    {
        "id": 2,
        "user": "Fred",
        "title": "Garden of Weedin'",
        "body": "Can anyone recommend a good environmentally friendly weed-killer?",
        "answers": [{"user": "Tom", "body": "Try some vinegar!"}]
    },
    {
        "id": 3,
        "user": "Karen",
        "title": "Low maintenance?",
        "body": "What sort of plants would you suggest that are very low maintenance?",
        "answers": [{"user": "Bob", "body": "I think pothos are great in low light!"}, {"user": "Julie", "body": "Snake plants are also great!"}]
    },
    {
        "id": 4,
        "user": "Katie",
        "title": "Good low-light plants?",
        "body": "I don't have a lot of light in my house and would like some suggestions for low-light plants!",
        "answers": [{ "user": "Frank", "body": "Get more lights!" }, { "user": "Tom", "body": "Pothos is a great low-light plant!" }]
    }
]
  return (
    <div className="App">
      <NavBar questions={questions}/>
      <Questions questions={questions}/>
    </div>
  );
}

export default App;
