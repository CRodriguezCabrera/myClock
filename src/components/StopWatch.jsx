import React, {useState, useEffect} from 'react';
import "./StopWatch.css";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn,setTimerOn] = useState(false);

      useEffect(() => {
        let interval = null;

        if (timerOn) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        }, 10);
        } else {
        clearInterval(interval);
        }

        return () => clearInterval(interval);
    },[timerOn]);
    return (
        <div class="stopWatch">
            <div class="crono__container">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div class="buttons__container" id="buttons">
                {!timerOn && time === 0 && (
                <button class="startbutton" onClick={() => setTimerOn(true)}>Empezar</button>
                )}
                {timerOn && <button class="stopbutton" onClick={() => setTimerOn(false)}>Parar</button>}
                {!timerOn && time > 0 && (
                <button class="resetbutton" onClick={() => setTime(0)}>Resetear</button>
                )}
                {!timerOn && time > 0 && (
                <button class="restartbutton" onClick={() => setTimerOn(true)}>Reanudar</button>
                )}
            </div>
        </div>
    )
}

export default StopWatch
