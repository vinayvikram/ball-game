import { useState } from 'react';
import './App.css';
import { Controls } from './components/controls';
import { Screen } from './components/screen';

function App() {


  const [head, setHead] = useState({ x: 1, y: 1});

  const [score, setScore] = useState(0);

  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <div className="app">
      <div className='score-row'>
            <div className="score">
                {score}
            </div>
      </div>
      <Screen head={head} score={score} setScore={setScore} isGameOver={isGameOver} setIsGameOver={setIsGameOver} />
      <Controls head={head} setHead={setHead} setScore={setScore} setIsGameOver={setIsGameOver}/>
    </div>
  );
}

export default App;
