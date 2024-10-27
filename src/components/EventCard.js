import React from 'react';
import styled from 'styled-components';
import CountdownTimer from './CountdownTimer';

const Card = styled.div`
  background-color: #f4f4f9;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

function EventCard({ event, onClick }) {
  return (
    <Card onClick={onClick}>
      <Image src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <CountdownTimer targetDate={event.date} /> {/* Add the countdown timer here */}
    </Card>
  );
}

export default EventCard;
