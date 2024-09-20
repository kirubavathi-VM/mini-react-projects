import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import "./digital-clock.css";

const DigitalClock = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTimeWithLeadingZero = ((num) => {
        return num < 10 ? `0${num}` : num;
    });

    const formatHour = ((hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    });

    const hours = formatTimeWithLeadingZero(formatHour(currentDateTime.getHours()));
    const minutes = formatTimeWithLeadingZero(currentDateTime.getMinutes());
    const seconds = formatTimeWithLeadingZero(currentDateTime.getSeconds());
    const period = currentDateTime.getHours() >= 12 ? "PM" : "AM";

    const formatDate = ((date) => {
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    })

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100" >
            <Card className='border border-0'>
                <Card.Body className="text-center">
                    <h1 style={{ color: "orange" }}>Digital Clock</h1>
                    <div style={{ fontSize: "50px", fontWeight: "700" }}>
                        {`${hours}:${minutes}:${seconds} ${period}`}
                    </div>
                    <div className="text-secondary">{formatDate(currentDateTime)}</div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DigitalClock
