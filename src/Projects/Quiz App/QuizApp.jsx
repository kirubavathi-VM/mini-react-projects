import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import questionData from "./Questions.json";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAnswerClick = (() => {
    if (selectedOption === questionData[currentQuestion].correctOption) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(10);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  });

  const handleRestartQuiz = (() => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
    setSelectedOption('');
  });

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => { setTimer((prevTimer) => prevTimer - 1); }, 1000);
    } else {
      clearInterval(interval);
      if (timer === 0) {
        handleAnswerClick();
      }
    }
    return () => clearInterval(interval);
  }, [timer, showScore]);

  return (
    <Container fluid className='d-flex justify-content-center align-items-center vh-100 vw-100 bg-secondary'>
      <Card className='w-50 p-4'>
        <Card.Body>
          {showScore ? (
            <div className='text-center'>
              <h1 className='mb-4'>Your Score: {score}/{questionData.length}</h1>
              <Button
                variant='danger'
                className='rounded-pill px-4 py-2'
                onClick={handleRestartQuiz}
              >
                Restart
              </Button>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h2>Question {currentQuestion + 1}</h2>
                <p className='text-end'>
                  Time Left: <span className='fw-bold'>{timer}s</span>
                </p>
              </div>

              <p className='my-3'>{questionData[currentQuestion].question}</p>
              <Form>
                {questionData[currentQuestion].options.map((option, index) => (
                  <Form.Check
                    type='radio'
                    id={`radio-${index}`}
                    name='answerOptions'
                    label={option}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    key={index}
                    className='mb-2'
                  />
                ))}
              </Form>
              <div className='d-flex justify-content-end'>
                <Button
                  variant={currentQuestion === questionData.length - 1 ? "success" : "primary"}
                  className='rounded-pill px-4 py-2'
                  onClick={handleAnswerClick}
                  disabled={!selectedOption}
                >
                  {currentQuestion === questionData.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QuizApp;
