import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card, } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const getWeatherData = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=1a3a17eb4e4ca46db19ee1839ed6cedd`;
      console.log(endpoint);
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
        setLoading(false);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {}
  };

  //   useEffect(() => {
  //     getWeatherData();
  //   }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Form
            className="d-flex flex-row justify-content-center my-4"
            onSubmit={getWeatherData}
          >
            <Form.Group>
              <Form.Control
                className="mr-5"
                type="text"
                placeholder="Enter city"
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
            <Button className="ml-5" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={12}>

          {!loading && weatherData ? (
            <Card key={weatherData.name} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>City: {weatherData.name}</Card.Title>
                <Card.Text>
                  <p>Visibility: {weatherData.visibility}</p>
                  <p>Current Temperature: {weatherData.main.temp}</p>
                  <p>Feels like: {weatherData.main.feels_like}</p>
                </Card.Text>
                <Button variant="danger">
                  <AiFillHeart />
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <p>Please refine your search</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
