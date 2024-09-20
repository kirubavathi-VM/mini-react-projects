import React, { useState } from "react"
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap"

const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const calculatedBmi = weight / (heightInMeters * heightInMeters);
            setBmi(calculatedBmi.toFixed(2));

            if (calculatedBmi < 18.5) {
                setStatus("Underweight");
            } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
                setStatus("Normal weight");
            } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
                setStatus("Overweight");
            } else {
                setStatus("Obesity");
            }
            setErrorMessage("");
        } else {
            setBmi(null);
            setStatus("");
            setErrorMessage("Please enter both height and weight.")
        }
    }

    const handleClear = () => {
        setHeight("");
        setWeight("");
        setBmi(null);
        setErrorMessage("");
    }

    return (
        <div style={{ background: "linear-gradient(80deg, #2980b9, #6dd5fa)" }}>
            <Container className="d-flex justify-content-center align-items-center vh-100 vw-100">
                <Card
                    className="w-75 border border-0" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                    <Row className="m-0 p-3">
                        <Col lg={6}>
                            <div className="rounded-2 m-2 p-4 text-center bg-light">
                                <img src="/images/bmiLogo.png" alt="Healthy Lifestyle" style={{ width: "100px" }} />
                                <h4 style={{ color: "#3498db" }}>Start Your Journey to Better Health!</h4>
                                <p>Enter your height and weight to find out your Body Mass Index (BMI) and discover your current health status. <br /> Stay fit, stay healthy.</p>
                                <h5> Let's get started!</h5>
                            </div>
                        </Col>
                        <Col lg={6} className="p-3">
                            <Form>
                                <h3 className="fw-bold mb-4" style={{ color: "#2980b9" }}>
                                    BMI CALCULATOR
                                </h3>
                                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                <Form.Group className="mb-3">
                                    <Form.Label>Height (cm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Weight (kg)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="light" className="text-white me-3" onClick={handleBMI} style={{ backgroundColor: "#2398db" }}>
                                    Calculate BMI
                                </Button>
                                <Button variant="danger" onClick={handleClear}>Clear</Button>

                                {(bmi !== null) && (
                                    <div className="rounded-2 mt-2 p-2" style={{ border: "2px solid #3498db" }}>
                                        <p>Your BMI is: {bmi}</p>
                                        <p>Status: <strong style={{ color: "#2398db" }}>{status}</strong></p>
                                    </div>
                                )}
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default BMICalculator