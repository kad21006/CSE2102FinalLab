import './App.css';
import React, {useState} from "react";

function App() {

const [visableresult, setresult] = useState(false);
const [grade, setgrade] = useState(0);
const [currentquestion, setcurrentquestion] = useState(0);

const optionClicked = (answer) => {
  if (answer) {
    setgrade(grade + 1);
  }
  if (currentquestion + 1 >= questions.length) {
    setresult(true);
  } else {
  setcurrentquestion(currentquestion + 1);
  }
}

const restart = () => {
  setgrade(0);
  setcurrentquestion(0);
  setresult(0);
}

const questions = [
  {
    question: "What does the periodic table represent?",
    options: [
      {text: "Molecular Compunds", answer: false},
      {text: "Types of Energy", answer: false},
      {text: "Elements", answer: true},
      {text: "Animal Species", answer: false}
    ]
  },
  {
    question: "What is the most abundant element?",
    options: [
      {text: "Carbon", answer: false},
      {text: "Hydrogen", answer: true},
      {text: "Oxygen", answer: false},
      {text: "Nitrogen", answer: false}
    ]
  },
  {
    question: "Which is NOT an Alkali Metal",
    options: [
      {text: "Germanium", answer: true},
      {text: "Sodium", answer: false},
      {text: "Rubidium", answer: false},
      {text: "Lithium", answer: false}
    ]
  },
  {
    question: "What is unique about noble gases?",
    options: [
      {text: "They have a complete outer shell", answer: true},
      {text: "They are extremely unstable", answer: false},
      {text: "They contain addition protons", answer: false},
      {text: "They clump together when in close proximity to each other", answer: false}
    ]
  },
  {
    question: "Which two elements are most similar?",
    options: [
      {text: "K and NA", answer: true},
      {text: "NA and CL", answer: false},
      {text: "K and LI", answer: false},
      {text: "LI and CL", answer: false}
    ]
  },
  {
    question: "How many electrons are in every shell of an atom?",
    options: [
      {text: "2", answer: false},
      {text: "4", answer: false},
      {text: "8", answer: false},
      {text: "None of the above", answer: true}
    ]
  },
  {
    question: "Why is it hard to discover new elements?",
    options: [
      {text: "Since new elements are manmade there is no value in creating them", answer: false},
      {text: "Elements usually become more unstable the larger they get", answer: true},
      {text: "They cannot exist in Earth's atmosphere", answer: false},
      {text: "The science community is hiding the truth", answer: false}
    ]
  },
  {
    question: "Which element is a halogen in Group 17?",
    options: [
      {text: "NA", answer: false},
      {text: "CL", answer: true},
      {text: "FE", answer: false},
      {text: "K", answer: false}
    ]
  },
  {
    question: "Which element has the atomic number 79?",
    options: [
      {text: "AU", answer: true},
      {text: "AG", answer: false},
      {text: "FE", answer: false},
      {text: "HG", answer: false}
    ]
  },
  {
    question: "Signs commonly use which element for its glowing properties?",
    options: [
      {text: "PB", answer: false},
      {text: "AR", answer: false},
      {text: "NE", answer: true},
      {text: "HE", answer: false}
    ]
  }
]

  return (
    <div className="App">

      <h1>Periodic Table Quiz</h1>

      {visableresult? (
        <div className="results">
          <h1>Final Grade</h1>
          <h2>{grade} out of {questions.length} correct</h2>
          <button className="restartbutton" onClick={() => restart()}>Restart Quiz</button>
        </div>
      ) : (
        <div className="questionbox">
          <h2>Question {currentquestion + 1}/{questions.length}: {questions[currentquestion].question}</h2>
          <ul>
            {questions[currentquestion].options.map((option) => {
              return(
                <li onClick={() => optionClicked(option.answer)}>{option.text}</li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App;
