import { useState, useEffect } from "react";
import './DigitalClock.css';
function DigitalClock() {
    const [timer, setTimer] = useState(new Date().toLocaleTimeString());

    
    function updateTime(){
        setTimer(new Date().toLocaleTimeString());
    }
    function handleEffect(){
        const interval = setInterval(updateTime, 1000);
        return () => {
            clearInterval(interval);
        }

    }
    
    useEffect(handleEffect,[]);

    return (
        <div className="digital-clock">
            <h1 className="clock-title">Digital Clock</h1>
            <h2 className="clock-time">{timer}</h2>
        </div>
    );
}

export default DigitalClock;