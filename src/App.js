import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <Game />
      </main>
      <footer>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61551771230717&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://linkedin.com/in/farhad-ali-turk-135369305"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/FarhadAliTurk"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:369farhadali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon email"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;