import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CardGroup } from "react-bootstrap";

function DisplayDayData(props) {
  const dayDataCards = props.dayData.map((day) => {
    return (
      <Card style={{ width: "18rem" }}>
      <Card.Header>{day.dt_txt}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{day.main.temp}</ListGroup.Item>
        <ListGroup.Item>{day.weather[0].main}</ListGroup.Item>
      </ListGroup>
    </Card>
    )
  });

  return <CardGroup>{dayDataCards}</CardGroup>;
}

export default DisplayDayData;
