
import QuizCard from './Components/QuizCard'
import questIcon from "./assets/images/light-bulb.png";

function App() {

  return (
    
    <QuizCard 
      question="What is the longest river in the world?" 
      answer="river nile"
      icon={questIcon}
    />
   
  )
}

export default App
