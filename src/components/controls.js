import { useState, useCallback, useEffect } from "react";

export const Controls = ({ head, setHead, setScore, setIsGameOver }) => {

    const [action, setAction] = useState("");

    const [intervalId, setIntervalId] = useState(null);

    const screen = document.getElementById("screen");

    const moveRight = useCallback(() => {

        const intervalId = setInterval(() => {
            setHead((position) => ({
                x: (position.x + 1),
                y: position.y
            }))
        },5);

        return intervalId;
        
    },[setHead]);

    const moveLeft = useCallback(() => {

        const intervalId = setInterval(() => {
            setHead((position) => ({
                x: (position.x - 1),
                y: position.y
            }))
        },5);

        return intervalId;
        
    },[setHead]);

    const moveDown = useCallback(() => {

        const intervalId = setInterval(() => {
            setHead((position) => ({
                x: position.x,
                y: (position.y - 1)
            }))
        },5);

        return intervalId
    }, [setHead])

    const moveUp = useCallback(() => {

        const intervalId = setInterval(() => {
            setHead((position) => ({
                x: position.x,
                y: (position.y + 1)
            }))
        },5);

        return intervalId
    }, [setHead]);

    useEffect(() => {

        if(!screen){
            return;
        }
    

        let isBoundaryTouched = false;        

        if(head.x === 0 || Math.abs(head.x) === Math.floor(screen.getBoundingClientRect().width)){
            isBoundaryTouched = true;
        } else if (head.y === 0 || Math.abs(head.y) === Math.floor(screen.getBoundingClientRect().height)){
            isBoundaryTouched = true;
        }

        if(isBoundaryTouched){
            setAction("stop");
            setScore(0);
            setIsGameOver(true)
        }

    },[screen, head])

    useEffect(() => {


        clearInterval(intervalId);

        switch(action){
            case "right":
                setIntervalId(moveRight());
                break;
            case "down":
                setIntervalId(moveDown());
                break;
            case "left":
                setIntervalId(moveLeft());
                break;
            case "up":
                setIntervalId(moveUp());
                break;
            case "stop":
                setHead({ x: 1, y: 1});
                break;
        }
    },[screen, action, setIntervalId])

    useEffect(() => {

        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
                setAction("up");
              } else if (e.key === "ArrowDown" || e.key === "S" || e.key === "s") {
                setAction("down")
              } else if (e.key === "ArrowLeft" || e.key === "A" || e.key === "a") {
                setAction("left")
              } else if (e.key === "ArrowRight" || e.key === "D" || e.key === "d") {
                setAction("right")
              }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    },[setAction])

    return (  
        <></>
    )
}