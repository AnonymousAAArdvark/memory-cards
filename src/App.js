import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { fetchCards, shuffleArray } from "./utils";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [clickedHeroes, setClickedHeroes] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setHeroes(shuffleArray(fetchCards()));
  }, [])

  const handleCardClick = (e) => {
    const heroName = e.target.parentNode.lastChild.textContent;
    playRound(heroName);
    setHeroes(shuffleArray(heroes));
  }

  const playRound = (heroName) => {
    if(clickedHeroes.includes(heroName)) {
      resetGame();
    }
    else {
      const newScore = currentScore + 1;
      if(newScore > bestScore) setBestScore(newScore);
      setCurrentScore(newScore);
      setClickedHeroes((prevState) => [...prevState, heroName]);
    }
  }

  const resetGame = () => {
    setClickedHeroes([]);
    setCurrentScore(0);
  }

  return (
    <>
      <Header />
      <Main
        heroes={heroes}
        handleCardClick={handleCardClick}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <Footer />
    </>
  );
}

export default App;
