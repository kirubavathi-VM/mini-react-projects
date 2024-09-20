import { Button, Card, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import './Calendar.css';

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const daysInMonth = () => {
        const daysArray = [];
        const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
        // Fill in days before the first day with null
        for (let i = 0; i < firstDay.getDay(); i++) {
            daysArray.push(null);
        }
        // Fill in the days of the month
        for (let i = 1; i <= lastDay.getDate(); i++) {
            daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
        }
        return daysArray;
    };

    const isSameDay = (date1, date2) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    const handleChangeMonth = (e) => {
        const newMonth = parseInt(e.target.value, 10);
        setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
    };

    const handleChangeYear = (e) => {
        const newYear = parseInt(e.target.value, 10);
        setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
    };

    return (
        <Container fluid className='bg-secondary vh-100 vw-100 d-flex justify-content-center align-items-center'>
            <Card className='border-0'>
                <div className='d-flex justify-content-between align-items-center color'>
                    <Button
                        onClick={() => {
                            setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
                        }}
                        className='border-0 fs-2 color calendar-button'
                    >
                        <i className="fa-solid fa-circle-chevron-left"></i>
                    </Button>
                    <select
                        className='border border-2 rounded-2'
                        value={selectedDate.getMonth()}
                        onChange={handleChangeMonth}
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index}>{month}</option>
                        ))}
                    </select>
                    <select
                        className='border border-2 rounded-2'
                        value={selectedDate.getFullYear()}
                        onChange={handleChangeYear}
                    >
                        {Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 5 + i).map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <Button
                        onClick={() => {
                            setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
                        }}
                        className='border border-0 fs-2 color calendar-button'
                    >
                        <i className="fa-solid fa-circle-chevron-right"></i>
                    </Button>
                </div>
                <div className='d-grid text-center fw-bold p-2 text-white color calendar-header'>
                    {daysOfWeek.map((day) => (
                        <div key={day} className='p-2'>{day}</div>
                    ))}
                </div>
                <div className='p-2 d-grid calender-body'>
                    {daysInMonth().map((day, index) => (
                        <div
                            key={index}
                            className={
                                day ? (
                                    isSameDay(day, new Date())
                                        ? "calendar-day text-center border border-1 current text-white"
                                        : "calendar-day text-center border border-1"
                                ) : "border border-1 bg-light"
                            }
                        >
                            {day ? day.getDate(): "" }
                        </div>
                    ))}
                </div>
            </Card>
        </Container>
    );
};

export default Calendar;
