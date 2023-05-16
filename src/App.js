import React, { useState } from "react";
//import logo from './logo.svg';
import './App.css';

export function App() {

  //properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalResults, setFinalResultsState] = useState([true,true,true]);

  const questions = [
    {
      text: "What is your base preferece?",
      options: [
        { id: 0, text: "Silicone", answer: false },
        { id: 1, text: "Water Based", answer: true },
        { id: 2, text: "No preference", answer: null },
      ]
    },
    {
      text: "Do you like flavor?",
      options: [
        { id: 0, text: "No", answer: false },
        { id: 1, text: "Yes", answer: true },
        { id: 2, text: "No preference", answer: null }
      ]
    },
    {
      text: "Do you like it thick?",
      options: [
        { id: 0, text: "No", answer: false },
        { id: 1, text: "Yes", answer: true },
        { id: 2, text: "No preference", answer: null }
      ]
    }
  ];

  const formulas = [
    {
      id: 0, title: "Glide", properties: {
        answer1: true,
        answer2: false,
        answer3: false
      }
    },

    {
      id: 1, title: "T-Glide", properties: {
        answer1: true,
        answer2: false,
        answer3: true
      }
    },

    {
      id: 2, title: "Pleasure", properties: {
        answer1: true,
        answer2: false,
        answer3: false
      }
    },

    {
      id: 3, title: "Millennium", properties: {
        answer1: false,
        answer2: false,
        answer3: false
      }
    },

    {
      id: 4, title: "Frutopia", properties: {
        answer1: true,
        answer2: true,
        answer3: false
      }
    },

    {
      id: 5, title: "Velvet", properties: {
        answer1: false,
        answer2: false,
        answer3: true
      }
    },

    {
      id: 6, title: "Silk", properties: {
        answer1: false,
        answer2: false,
        answer3: false
      }
    },

    {
      id: 6, title: "3Some", properties: {
        answer1: true,
        answer2: true,
        answer3: true
      }
    },
  ];


  //helper functions

  const optionClicked = (answer) => {
    if(currentQuestion === 0 ){
      setFinalResultsState([answer, null, null]);
    }
    else if(currentQuestion === 1){
      setFinalResultsState([finalResults[0], answer, null]);
    }
    else if(currentQuestion === 2){
      setFinalResultsState([finalResults[0], finalResults[1], answer]);
    }
    if (currentQuestion + 1 <questions.length){
      setCurrentQuestion(currentQuestion +1);
    } else {
      setFinalResults(true)
    }

    
  };

  const filteredFormulas = formulas.filter((formula) => {

    if (finalResults[0]===null){
      formula.properties.answer1 = null
    }
    if (finalResults[1]===null){
      formula.properties.answer2 = null
    }
    if (finalResults[2]===null){
      formula.properties.answer3 = null
    }
    // Check if the formula's properties match the user's answers
    return (

      formula.properties.answer1 === finalResults[0] &&
      formula.properties.answer2 === finalResults[1] &&
      formula.properties.answer3 === finalResults[2]
    );
  });
  

  return (
    <div className="App">

      {showFinalResults ?
        <div>
          <h1>Product Quiz</h1>
          <h2>Final Results</h2>
          <ul>
            {filteredFormulas.map((formula) => (
              <li key={formula.id}>{formula.title}</li>
            ))}
          </ul>
        </div>


        :


        <div>
          <h1>Product Quiz</h1>
          <div className="progress-container">
            <h3 className="progress-text">Question {currentQuestion + 1}</h3>
          </div>

          <h2 className="question-text"> {questions[currentQuestion].text} </h2>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.answer)} key={option.id}>{option.text}</li>
              );
            })}

          </ul>
        </div>


      }
    </div>
  );
}

export default App;
