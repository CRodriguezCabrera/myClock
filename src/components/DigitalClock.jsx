import React, { useEffect, useState } from 'react'
import "./DigitalClock.css";



const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div class="digital__clock">
            <h2>{clockState}</h2>
        </div>
    )
}

export default DigitalClock
