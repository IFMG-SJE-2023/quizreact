import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import LogoQuiz from '../../assets/images/quiz.png'
function Score({score }) {

    const navigate = useNavigate();
    function restart() {
        navigate("/");
    }

    const messages = {
        0: 'você não sabe nada sobre React 🤣',
        1: 'você sabe pouquíssimo sobre React 😢',
        2: 'você sabe pouco sobre React 😊',
        3: 'você está no caminho 😁',
        4: 'você está aprendendo 😊',
        5: 'você sabe muito 😎',
    }


    return (
        <div className="container">
            <h1 className='title'>Pointuacao</h1>
            <img className="logo" src={LogoQuiz} alt="Quiz" />
            <small className="description">{score ? messages[score]  : messages[5]}</small>
            <div className="score-container">
                    <big className="score">{score ? score : 5}</big>
                    <small className="total">/5</small>
            </div>
        
            <button className="button-start" type onClick={restart}>🚀 Reiniciar</button>
            <footer className="footer">  
                <span  className='author'>Criado por 
                    <a  className='author' target="_blank" href="https://github.com/Luccb" rel="noreferrer"> Luciano</a>
                </span>
            </footer>
        </div>

    )
}

export default Score;