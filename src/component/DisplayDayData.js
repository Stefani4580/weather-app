import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CardGroup } from "react-bootstrap";

function DisplayDayData(props) {
  const dayDataCards = props.dayData.map((day) => {
    let date = new Date(day.dt_txt);
    console.log(date)
    return (
      <Card style={{ width: "18rem" }} >
      <Card.Header> 
        {date.getDay() === 0 && 'Sunday'}
        {date.getDay() === 1 && 'Monday'}
        {date.getDay() === 2 && 'Tuesday'}
        {date.getDay() === 3 && 'Wednesday'}
        {date.getDay() === 4 && 'Thursday'}
        {date.getDay() === 5 && 'Friday'}
        {date.getDay() === 6 && 'Saturday'} 
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div className="lineup">
            <div>
              {day.weather[0].main === 'Rain' && <i  className="fas fa-cloud-showers-heavy ico"></i>}
              {day.weather[0].main === 'Clear' && <i className="fas fa-sun ico"></i>}
              {day.weather[0].main === 'Clouds' && <i class="fas fa-cloud ico"></i>}
            </div>
          
            <div className="dis">
              <strong>{day.main.temp_max}</strong> {day.main.temp_min}
            </div>
          </div>
          
        </ListGroup.Item>
      </ListGroup>
    </Card>
    )
  });

  return <CardGroup>{dayDataCards}</CardGroup>;
}

export default DisplayDayData;
