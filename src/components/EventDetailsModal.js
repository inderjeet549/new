import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 90%;
  max-width: 500px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #d9363e;
  }
`;

const CloseButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  margin-right: 10px;

  &:hover {
    background-color: #b3b3b3;
  }
`;

function EventDetailsModal({ event, onClose, onDelete }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <img src={event.image} alt={event.name} style={{ width: '100%', borderRadius: '8px' }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <DeleteButton onClick={onDelete}>Delete Event</DeleteButton>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </div>
      </ModalContainer>
    </>
  );
}

export default EventDetailsModal;
