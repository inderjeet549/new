import React, { useState } from 'react';
import EventList from './components/EventList';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import './App.css';

const H = styled.h1`
 align-items:center;
 font-size:2.3em;
 &:hover{
 font-size:2.5em;
 }
`;
function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="App">
      <H>EventSpot Lite</H>
      <EventList onSelectEvent={setSelectedEvent} />
      <AnimatePresence>
        {selectedEvent && <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
