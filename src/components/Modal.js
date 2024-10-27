import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled(motion.div)`
  width: 80%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

function Modal({ event, onClose }) {
  return (
    <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>{event.name}</h2>
        <img src={event.image} alt={event.name} style={{ width: "100%", borderRadius: "8px" }} />
        <p>{event.description}</p>
        <button onClick={onClose}>Close</button>
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
