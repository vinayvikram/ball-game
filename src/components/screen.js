import React, { useCallback, useEffect, useState } from "react";
import { Snake } from "./snake";

export const Screen = ({ head, score, setScore, isGameOver, setIsGameOver }) => {

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

    if(isGameOver){
        return (
            <div className="screen game-over">
                <div>
                    GAME OVER !
                </div>
                <button onClick={() => setIsGameOver(false)}>
                    Replay
                </button>
            </div>
        )
    }

    return (
        <div className="screen" id="screen">
            <Snake head={head} />
           {!!food && <div id="food" style={{
                position: "absolute",
                background: "green",
                width:"10px",
                height: "10px",
                borderRadius: "5px",
                left: food.x,
                bottom: food.y
            }}>
            </div>}
        </div>
    )
}