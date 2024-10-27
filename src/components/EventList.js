import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import EventDetailsModal from './EventDetailsModal';
import AddEventForm from './AddEventForm';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const EventListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 20px;
`;

function EventList() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  useEffect(() => {
    fetch('/events.json')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error loading events:", error));
  }, []);

  const onDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setSelectedEvent(null);
  };

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowAddEventForm(false);
  };

  return (
    <Container>
      <SearchBarContainer>
        <SearchBar setSearchQuery={setSearchQuery} />
      </SearchBarContainer>
      <Button onClick={() => setShowAddEventForm(true)}>Add Event</Button>
      {showAddEventForm && (
        <AddEventForm onClose={() => setShowAddEventForm(false)} onAddEvent={addEvent} />
      )}
      <EventListContainer>
        {events.filter(event =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </EventListContainer>
      {selectedEvent && (
        <EventDetailsModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
          onDelete={() => onDeleteEvent(selectedEvent.id)} 
        />
      )}
    </Container>
  );
}

export default EventList;
