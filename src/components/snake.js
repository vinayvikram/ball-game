import { useState, useEffect} from "react"

export const Snake = ({ head }) => {

    const [positionStyles, setPositionStyles] = useState({
        left: head.x,
        bottom: head.y
    });

    useEffect(() => {
        if(head.x >= 0 && head.y >= 0){
            setPositionStyles({
                left: head.x,
                bottom: head.y,
            });
        } else if (head.x >= 0 && head.y < 0){
            setPositionStyles({
                left: head.x,
                top: Math.abs(head.y)
            })
        } else if (head.x < 0 && head.y >= 0){
            setPositionStyles({
                right: Math.abs(head.x),
                bottom: head.y
            })
        } else {
            setPositionStyles({
                right: Math.abs(head.x),
                top: Math.abs(head.y)
            })
        }
    },[head.x, head.y])

    return (
        <div className="head" style={{...positionStyles}}>
        </div>
    )
}