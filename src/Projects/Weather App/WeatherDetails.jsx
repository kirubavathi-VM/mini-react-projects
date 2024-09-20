import React from "react"
import { Col, Image, Row } from "react-bootstrap"

const WeatherDetails = ({ icon, weather }) => {

    const tempCelsius = (weather?.main?.temp - 273.15).toFixed(2);

    const sunsetTime = new Date(weather?.sys?.sunset * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <div style={{ fontSize: "40px" }}>
                            {weather?.name}
                        </div>
                        <div>
                            <h5 style={{ fontWeight: "normal" }}>
                                {weather?.sys?.country}
                            </h5>
                        </div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <div style={{ fontSize: "55px" }}>
                            {tempCelsius}<sup className="fs-1">°C</sup>
                        </div>
                        <div>
                            <h5 style={{ fontWeight: "normal" }}>{weather?.weather[0]?.description}</h5>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Image
                        src={icon}
                        alt="Weather Icon"
                        fluid
                        style={{ width: "150px", height: "150px" }}
                    />
                </Col>
            </Row>

            <div>
                <p className="mt-3 mb-0 fw-bold">Weather Info</p>

                <Row className="d-flex align-items-center">
                    <Col className="d-flex justify-content-center align-items-center p-3">
                        <Image src="/icons/temp.svg" alt="Sunset Icon" />
                        <div className="ms-2">
                            <div>{sunsetTime} </div>
                            <div>Sunset</div>
                        </div>
                    </Col>

                    <Col className="d-flex justify-content-center align-items-center p-3">
                        <Image src="/icons/pressure.svg" alt="Pressure Icon" />
                        <div className="ms-2">
                            <div>{weather?.main?.pressure}hPa</div>
                            <div>Pressure</div>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center p-3">
                        <Image src="/icons/humidity.svg" alt="Humidity Icon" />
                        <div className="ms-2">
                            <div>{weather?.main?.humidity}%</div>
                            <div>Humidity</div>
                        </div>
                    </Col>

                    <Col className="d-flex justify-content-center align-items-center p-3">
                        <Image src="/icons/wind.svg" alt="Wind Icon" />
                        <div className="ms-2">
                            <div>{weather?.wind?.speed}km/h</div>
                            <div>Wind</div>
                        </div>
                    </Col>
                </Row>
            </div>


        </>
    )
}

export default WeatherDetails