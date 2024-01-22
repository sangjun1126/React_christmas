import React, {useState, useEffect} from "react";
import './Time.css'

function Time(props) {
    const [DateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
      <div className="time-container">
        <h2 className="time-box"> Today {DateTime} </h2>
      </div>

    );
}

export default Time;