import { useState } from 'react';
import './App.css';
import { Controls } from './components/controls';
import { Screen } from './components/screen';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {

  const handle = useFullScreenHandle();

  const [head, setHead] = useState({ x: 1, y: 1});

  const [score, setScore] = useState(0);

  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <FullScreen handle={handle} className="app">
      <div className='score-row' onClick={handle.enter}>
            <div className="score">
                {score}
            </div>
      </div>
      <Screen head={head} score={score} setScore={setScore} isGameOver={isGameOver} setIsGameOver={setIsGameOver} />
      <Controls head={head} setHead={setHead} setScore={setScore} setIsGameOver={setIsGameOver}/>
    </FullScreen>
  );
}

export default App;
