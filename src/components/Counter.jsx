import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


const Counter = () => {

    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)
    const [start, setStart] = useState(false)
    const [bgColor, setBgColor] = useState(null)




    useEffect(() => {


        let timer = setInterval(() => {
            
        if (start === true) {

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                } else {
                    shortBreak()
                    longBreak()
                }
            } else {
                setSeconds(seconds - 1)
            }
        }
        }, 1000)

        return function () {
            clearInterval(timer)
        }

    }, [start, seconds, minutes])


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes ;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds ;

    function handelStart () {
        setStart(true)
    }

    function handelStop () {
        setStart(false)
    }

    function handelRefresh () {
        pomodoro()
    }

    function shortBreak (event) {
        setMinutes(5)
        setSeconds(0)
        setBgColor(bodyCopy.value = "background-color: rgb(56, 133, 138)")
        event.target.setAttribute("class", "break-active")
    }

    function longBreak (event) {
        setMinutes(15)
        setSeconds(0)
        setBgColor(bodyCopy.value = "background-color: rgb(57, 112, 151)")
        event.target.setAttribute("class", "break-active")
    }

    function pomodoro (event) {
        setMinutes(25)
        setSeconds(0)
        setBgColor(bodyCopy.value = "background-color: rgb(186, 73, 73)")
        event.target.setAttribute("class", "break-active")
    }

    const body = document.getElementById("body")
    const bodyCopy = body.getAttributeNode('style')

    
    return ( 
    <div className="counter-content" >
        <div className="counter" >
            <div className="break">
                <button onClick={pomodoro}>
                    Pomodoro
                </button>

                <button onClick={shortBreak} >
                    Short Break
                </button>

                <button onClick={longBreak} >
                    Long Break
                </button>
            </div>

            <div className="timer">
                <h1 className="text-8xl">
                    {timerMinutes}:{timerSeconds}
                </h1>
            </div>
            
            <div className="button-control">
                <button onClick={handelStart} className="bg-slate-50  p-1 rounded-md w-20">
                    Start
                </button>
                <button onClick={handelStop} className="bg-slate-50 p-1 rounded-md w-20">
                    Stop
                </button>
                <button onClick={handelRefresh} className="bg-slate-50 p-1 rounded-md w-10">
                    <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                </button>
            </div>
            
        </div>
    </div>
    )
}

export default Counter;