import React, {useState, useEffect} from 'react';
import "./CountDown.css";

const CountDown = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        let countDownDate = new Date ("Nov 4, 2022 12:36:00").getTime();
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            if(distance < 0) {
                clearInterval(x);
                setTime("Cuenta atras Terminada!");
            }
        }, 1000);
    }, []);
    return (
        <div class="countDown">
            <h2>{time}</h2>
        </div>
    )
}

export default CountDown
