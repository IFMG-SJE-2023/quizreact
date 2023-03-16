import React from 'react';
import './styles.css';
import LogoQuiz from '../../assets/images/quiz.png'
function Home(params) {
    return (
        <div className="container">
            <h1 className='title'>Bem vindo ao</h1>
            <img className="logo" src={LogoQuiz} alt="Quiz" />
            <small className="description">teste de conhecimentos sobre React</small>
        
            <button className="button-start" type>🚀 Começar</button>
            <footer className="footer">  
                <span  className='author'>Criado por 
                    <a  className='author' target="_blank" href="https://github.com/Luccb" rel="noreferrer"> Luciano</a>
                </span>
            </footer>
        </div>

    )
}

export default Home