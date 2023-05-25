import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [matchingProducts, setMatchingProducts] = useState([]);

  const questions = [
    {
      question: 'Question 1: Which color(s) do you prefer?',
      answers: ['Red', 'Blue', 'Green', 'Yellow', 'Black'],
    },
    {
      question: 'Question 2: Which size(s) do you prefer?',
      answers: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    },
    {
      question: 'Question 3: Which brand(s) do you prefer?',
      answers: ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance'],
    },
  ];

  const products = [
    { name: 'Product A', color: 'Red', size: 'Medium', brand: 'Nike' },
    { name: 'Product B', color: 'Blue', size: 'Large', brand: 'Adidas' },
    { name: 'Product C', color: 'Green', size: 'Small', brand: 'Puma' },
    { name: 'Product D', color: 'Yellow', size: 'XL', brand: 'Reebok' },
    { name: 'Product E', color: 'Black', size: 'XXL', brand: 'New Balance' },
  ];

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    const selectedAnswerIndex = updatedAnswers[currentQuestion]?.indexOf(answer);

    if (selectedAnswerIndex > -1) {
      // Remove the answer if already selected
      updatedAnswers[currentQuestion].splice(selectedAnswerIndex, 1);
    } else {
      // Add the answer if not selected
      updatedAnswers[currentQuestion] = [...(updatedAnswers[currentQuestion] || []), answer];
    }

    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleShowResults = () => {
    const matching = products
      .map((product) => {
        const { color, size, brand } = product;
        const matchCount = [color, size, brand].filter(
          (answer, index) => selectedAnswers[index]?.includes(answer)
        ).length;
        return { ...product, matchCount };
      })
      .filter((product) => product.matchCount > 0);

    matching.sort((a, b) => b.matchCount - a.matchCount);
    setMatchingProducts(matching);
  };

  return (
    <div className='App'>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index}>
                <label>
                  <input 
                    type="checkbox"
                    checked={selectedAnswers[currentQuestion]?.includes(answer)}
                    onChange={() => handleAnswerSelect(answer)}
                  />
                  {answer}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Selected answers:</p>
          <ul>
          {selectedAnswers.map((answers, index) => (
              <li key={index}>{answers.join(', ')}</li>
            ))}
          </ul>
          <button onClick={handleShowResults}>Show Results</button>
          {matchingProducts.length > 0 && (
            <div>
              <h3>Matching Products:</h3>
              <ul>
                {matchingProducts.map((product, index) => (
                  <li key={index}>
                    {product.name} - Matched Answers: {product.matchCount}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;

