import React, { useState, useEffect } from "react"
import { Container, Form, InputGroup, Image, Navbar } from "react-bootstrap";
import WeatherDetails from "./WeatherDetails";

export const WeatherIcons = {
    "01d": "/icons/01d.png",
    "01n": "/icons/01n.png",
    "02d": "/icons/02d.png",
    "02n": "/icons/02n.png",
    "03d": "/icons/03d.png",
    "03n": "/icons/03n.png",
    "04d": "/icons/04d.png",
    "04n": "/icons/04n.png",
    "09d": "/icons/09d.png",
    "09n": "/icons/09n.png",
    "10d": "/icons/10d.png",
    "10n": "/icons/10n.png",
    "11d": "/icons/11d.png",
    "11n": "/icons/11n.png",
    "13d": "/icons/13d.png",
    "13n": "/icons/13n.png",
    "50d": "/icons/50d.png",
    "50n": "/icons/50n.png",
};

const WeatherApp = () => {
    const [weather, setWeather] = useState();
    const [text, setText] = useState("Chennai");
    const [icon, setIcon] = useState("");

    const [loading, setLoading] = useState(false);
    const [cityNotFound, setCityNotFound] = useState(false);
    const [error, setError] = useState(null);

    const search = async () => {
        if (!text.trim()) {
            setError("Please enter city name.");
            return;
        }
        setLoading(true);
        setError(null);

        let api_key = "0064465ca6851a7da8673401fae9b650"
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}`;

        try {
            let res = await fetch(url);
            let data = await res.json();
            setWeather(data);

            if (data.cod === "404") {
                console.log("City not found");
                setCityNotFound(true);
                setLoading(false);
                return;
            }

            if (data.main && data.wind) {
                const WeatherIcon = data.weather[0].icon;
                setIcon(WeatherIcons[WeatherIcon]);
                setCityNotFound(false);
            } else {
                setError("Weather data is incomplete.")
            }
        } catch (error) {
            console.error("An error occured", error.message);
            setError("An error occurred while fetching weather data.");
        } finally {
            setLoading(false);
        }
    };

    const handleCity = (e) => {
        setText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            search();
        }
    };

    useEffect(() => {
        search();
    }, []);

    return (
        <Container fluid className="vh-100" style={{ background: "linear-gradient(80deg, rgba(162, 194, 226, 0.6), #d0e8f2)" }}>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <Image
                            src="/icons/weatherAppLogo.png"
                            alt="Logo"
                            fluid
                            style={{ width: "40px", height: "40px" }}
                        />
                        <span className="ms-2 fw-bolder" style={{ color: "#1E2A5E" }}>
                            Weather <span style={{ color: "#04a1e8" }}>Now</span>
                        </span>
                    </Navbar.Brand>
                    <div className="d-flex justify-content-center w-100">
                        <InputGroup className="w-75">
                            <Form.Control
                                placeholder="Search City"
                                onChange={handleCity}
                                value={text}
                                onKeyDown={handleKeyDown}
                                className="form-control-sm"
                            />
                            <InputGroup.Text className="bg-white" onClick={() => search()}>
                                <i className="fa-solid fa-magnifying-glass" />
                            </InputGroup.Text>
                        </InputGroup>
                    </div>
                </Container>
            </Navbar>
            <hr />
            <Container>
                {loading && <div className="text-center">Loading...</div>}

                {error && !loading && !cityNotFound && (
                    <div className="text-center">{error}</div>
                )}

                {cityNotFound && !loading && !error && (
                    <div className="text-center">City Not Found</div>
                )}

                {!loading && !cityNotFound && !error && (
                    < WeatherDetails
                        icon={icon}
                        weather={weather}
                    />
                )}
            </Container>
        </Container>

    )
}

export default WeatherApp
