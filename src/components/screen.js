import React, { useCallback, useEffect, useState } from "react";
import { Snake } from "./snake";

export const Screen = ({ head, score, setScore, isGameOver, setIsGameOver, playGame, setPlayGame, enterFullScreen }) => {

    const screen = document.getElementById("screen");

    const [food, setFood] = useState(null);

    const showFood = useCallback(() => {
        setFood({
            x: Math.random() * (screen.getBoundingClientRect().width - 5),
            y: Math.random() * (screen.getBoundingClientRect().height - 5)
        })
    },[setFood, screen])

    useEffect(() => {
        if(!screen){
            return;
        }

        showFood();
        
    },[screen])

    useEffect(() => {

        if(!food){
            return;
        }

        if(Math.abs(head.x - food.x) <=5 && Math.abs(head.y - food.y) <= 5){
            setScore(s => s + 5)
            showFood();
        }

        
    },[head, food]);

    if(!playGame){
        return (
            <div className="screen start-game">
                
                <button onClick={() => {
                    enterFullScreen();
                    setPlayGame(true)
                }}>
                    Play
                </button>
            </div>
        )
    }

    if(isGameOver){
        return (
            <div className="screen game-over">
                <div>
                    GAME OVER !
                </div>
                <button onClick={() => {
                    setIsGameOver(false)
                }}>
                   Replay
                </button>
            </div>
        )
    }

    return (
        <div className="screen" id="screen">
            <Snake head={head} />
           {!!food && <div id="food" style={{
                left: food.x,
                bottom: food.y
            }}>
            </div>}
        </div>
    )
}