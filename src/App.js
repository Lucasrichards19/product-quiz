import React, { useState } from 'react';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(3).fill(''));
    const [matchingProducts, setMatchingProducts] = useState([]);

    const questions = [
        {
            question: 'What type of lubricant do you prefer?',
            answers: ['Water Based', 'Silicone Based', 'Hybrid (Water and Silicone Combined)', 'Flavored'],
        },
        {
            question: 'What experience are you looking for in your lubricant?',
            answers: ['Natural Feel', 'Long Lasting', 'Extra Thick & Rich', 'Cooling Sensation', 'Warming Sensation'],
        },
        {
            question: 'What features are important to you?',
            answers: ['Good for Silicone Toys', 'Glycerin & Paraben Free', 'Easy to Clean & Non-Staining', 'Condom & Latex Safe', 'Underwater Play'],
        },
    ];

    const products = [
        {
            name: 'Glide',
            preferences: ['Water Based', 'Condom/Latex Safe', 'For Sensitive Skin', 'Hypoallergenic', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal'],
        },
        {
            name: 'Xtreme',
            preferences: [ 'Water Based', 'Condom/Latex Safe', 'For Sensitive Skin', 'Hypoallergenic', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Extra Thick', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal'],
        },
        {
            name: 'Pleasure',
            preferences: ['Water Based', 'Added Sensation', 'Condom/Latex Safe', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)'],
        },
        {
            name: 'Sensation',
            preferences: [ 'Water Based', 'Added Sensation', 'Condom/Latex Safe', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)'],
        },
        {
            name: 'Jelly',
            preferences: [ 'Water Based', 'Condom/Latex Safe', 'For Sensitive Skin', 'Hypoallergenic', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Extra Thick', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal'],
        },
        {
            name: 'Free',
            preferences: [ 'Water Based', 'Condom/Latex Safe', 'For Sensitive Skin', 'Hypoallergenic', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal'],
        },
        {
            name: 'TN',
            preferences: [ 'Water Based', 'Condom/Latex Safe', 'Hypoallergenic', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Extra Thick', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal'],
        },
        {
            name: 'Hero',
            preferences: [ 'Water Based', 'Condom/Latex Safe', 'Hypoallergenic', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal'],
        },
        {
            name: 'Hero HR',
            preferences: [ 'Water Based', 'Added Sensation', 'Condom/Latex Safe', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)'],
        },
        {
            name: 'Frutopia',
            preferences: [ 'Water Based', 'Flavored', 'Condom/Latex Safe', 'Easy to Clean', 'Non-Staining', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)', 'Oral Sex'],
        },
        {
            name: '3Some',
            preferences: [ 'Flavored', 'Body Topping', 'Added Sensation', 'Condom/Latex Safe', 'Easy to Clean', 'Non-Staining', 'Play with Partner(s)', 'Oral Sex', 'Massage'],
        },
        {
            name: 'Silk',
            preferences: [ 'Hybrid (Water and Silicone Combined)', 'Condom/Latex Safe', 'Long Lasting', 'Easy to Clean', 'Non-Staining', 'Silicone Toy Friendly', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal'],
        },
        {
            name: 'Millennium',
            preferences: [ 'Silicone Based', 'Condom/Latex Safe', 'Hypoallergenic', 'Waterproof', 'Long Lasting', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal', 'Massage'],
        },

        {
            name: 'Velvet',
            preferences: [ 'Silicone Based', 'Condom/Latex Safe', 'Hypoallergenic', 'Waterproof', 'Long Lasting', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal', 'Massage'],
        },
        {
            name: 'BackSlide',
            preferences: [ 'Silicone Based', 'Condom/Latex Safe', 'Hypoallergenic', 'Waterproof', 'Long Lasting', 'Masturbation / Self Play', 'Play with Partner(s)', 'Anal'],
        },
        
    ];

    const handleAnswerSelect = (answer) => {
        setSelectedAnswers((prevSelectedAnswers) => {
            const updatedAnswers = [...prevSelectedAnswers];
            updatedAnswers[currentQuestion] = answer;
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            return updatedAnswers;
        });
    };

    

    const handleShowResults = () => {
        const matching = products
            .map((product) => {
                const { preferences } = product;
                const matchCount = preferences.filter((preference) => selectedAnswers.includes(preference)).length;
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
                            <li key={index} 
                                className={`answer-button ${selectedAnswers[currentQuestion] === answer ? 'selected' : ''}`}
                                onClick={() => handleAnswerSelect(answer)} 
                            >
                                {answer}

                            </li>
                        ))}
                    </ul>
                    
                </div>
            ) : (
                <div>
                    <h2>Quiz Completed!</h2>
                    <h3>Selected answers:</h3>
                    <ul>
                        {selectedAnswers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                    </ul>
                    <button className='next' onClick={handleShowResults}>Show Results</button>
                    {matchingProducts.length > 0 && (
                        <div>
                            <h3 >Matching Products:</h3>
                            <ul>
                                {matchingProducts.map((product, index) => (
                                    <li key={index}>
                                        {product.name} <span className='match'> Matched Preferences: {product.matchCount}</span>
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

