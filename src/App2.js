import React, { useState } from "react";
//import logo from './logo.svg';
import './App.css';

const newResult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

 const questions = [
    {
      text: "What type of lubricant do you prefer?",
      options: [
        { id: 0, text: "Water Based"},
        { id: 1, text: "Silicone"},
        { id: 2, text: "Hybrid (Water and Silicone Combined) "},
        { id: 3, text: "Flavored"},
      ]
    },
    {
      text: "What experience are you looking for in your lubricant?",
      options: [
        { id: 5, text: "Natural Feel",  },
        { id: 10, text: "Long Lasting",  },
        { id: 13, text: " Extra Thick & Rich ",  },
        { id: 8, text: " Cooling Sensation",  },
        { id: 9, text: "Warming Sensation",  },
      ]
    },
    {
      text: "What features are important to you?",
      options: [
        { id: 10, text: "Good for Silicone Toys",  },
        { id: 11, text: "Glycerin & Paraben Free",  },
        { id: 12, text: "Easy to Clean & Non-Staining",  },
        { id: 13, text: "Condom & Latex Safe",  },
        { id: 14, text: "Underwater Play",  },
      ]
    }
  ];

  const formulas = [
    {
      id: 0,
      title: "Glide",
      properties: [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
      count: 0
    },
    {
      id: 1,
      title: "Free",
      properties: [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
      count: 0
    },
    {
      id: 2,
      title: "TN",
      properties: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      count: 0
    },
    {
      id: 3,
      title: "Hero",
      properties: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
      count: 0
    },
    {
      id: 4,
      title: "Hero HR",
      properties: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
      count: 0
    },
    {
      id: 5,
      title: "Xtreme",
      properties: [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
      count: 0
    },
    {
      id: 6,
      title: "Jelly",
      properties: [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
      count: 0
    },
    {
      id: 7, title: "Pleasure", properties: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0], count: 0
    },
    {
      id: 8, title: "Sensation", properties: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0], count: 0
    },
    {
      id: 9, title: "Millennium", properties: [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1], count: 0
    },
    {
      id: 10, title: "Frutopia", properties: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0], count: 0
    },
    {
      id: 11, title: "Velvet", properties: [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1], count: 0
    },
    {
      id: 12, title: "Backslide", properties: [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0], count: 0
    },
    {
      id: 13, title: "Silk", properties: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0], count: 0
    },
    {
      id: 14, title: "3Some", properties: [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1], count: 0
    },

  ];

  

export function App() {

  //properties

  const [showFinalResults, setShowFinalResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalResults, setFinalResults] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

 


  //helper functions

  const optionClicked = (option) => {

    if (currentQuestion < questions.length) {

      newResult[option.id] = 1;

      setFinalResults(newResult);

    }

  };

  const nextClicked = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true)
    }

  }

  const compareArrays = (formula, array2) => {

    for (let i = 0; i < formula.properties.length; i++) {
        if (formula.properties[i] === array2[i]) {
          formula.count++;
          console.log(formula.count)
          console.log(formula.title)
        }
        
        return formula.count

    };
  }

 
  

  const filteredFormulas = formulas.filter((formula) => {

      const countFormula = compareArrays(formula, finalResults);
    return (countFormula > 2);

  });

  const sortedFormulas = filteredFormulas.sort((a, b) => b.count - a.count);

  console.log(sortedFormulas)


  return (
    <div className="App">

      {showFinalResults ?
        <div>
          <h1>Product Quiz</h1>
          <h2>Final Results</h2>
          <ul>
            {sortedFormulas.map((formula) => (
              <li key={formula.id} >{formula.title}</li>
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
                <li onClick={() => optionClicked(option)} key={option.id}>{option.text}</li>

              );
            })}

          </ul>
          <button className="next" onClick={() => nextClicked()} >Next</button>
        </div>


      }
    </div>
  );
}

export default App;
