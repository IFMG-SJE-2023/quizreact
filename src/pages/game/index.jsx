import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {shuffle, questions} from '../../database/questions.js';
import './styles.css';
import LogoQuiz from '../../assets/images/quiz.png'
function Game(params) {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionSelected, setQuestionSelected] = useState([]);
    const [userAnswer, setUserAnswer] = useState([]);

    useEffect(() => {
        if(questionSelected.length >0)
            return;
        const shuffledQuestions = shuffle(questions);
        const selectedQuestions = shuffledQuestions.slice(0,5);
        setQuestionSelected(selectedQuestions);

        console.log(shuffledQuestions);

    },[questionSelected]);

    return (
        <div className="container">
            <img className="logo" src={LogoQuiz} />
            <div className="card">
                <div className="card-question">
                    <p className="card-title">Pergunta 1 de 5</p>
                    <p className="question">qual linguagem é a melhor?</p>

                </div>
                <div className="card-answer">
                    <div className="card-options">
                        <button className="card-option">c++</button>
                        <button className="card-option">c</button>
                        <button className="card-option">javaScript</button>
                        <button className="card-option">python</button>
                        <button className="card-option">c#</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game