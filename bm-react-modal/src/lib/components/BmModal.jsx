import React from 'react';
import { useState } from 'react';
import BmModalStructure from './BmModalStructure';
import './BmModal.css';

const BmModal = (props) => {
  //declare openning parameter
  const [modalOpen, setModalOpen] = useState(false);
  //declare modal toggle function
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  //declare modal openning function
  function openFunction() {
    if (props.beforeOpenFunction) {
      props.beforeCloseFunction();
    }
    toggleModal();
    if (props.afterOpenFunction) {
      props.afterOpenFunction();
    }
  }

  //declare modal closing function
  function closeFunction() {
    if (props.beforeCloseFunction) {
      props.beforeCloseFunction();
    }
    toggleModal();
    if (props.afterCloseFunction) {
      props.afterCloseFunction();
    }
  }

  //declare modal props
  let defaultProps = {
    open: modalOpen,
    closeFunction: closeFunction,
    openFunction: openFunction,
    afterClosefunction: props.afterCloseFunction
      ? props.afterCloseFunction
      : null,
    btnText: 'Open Modal',
    backGroundColor: 'rgba(84, 197, 222, 0.4)',
    bodyBackGround: 'blue',
    textColor: 'white',
  };
  defaultProps.message = (
    <div className='modal-message'>
      <div className='modal-message-headline'>
        <h2 className='modal-message-headline-h2'>
          {props.headLineText
            ? props.headLineText
            : 'Customize your headline with headLineText property'}
        </h2>
        <button className='modal-btn' onClick={defaultProps.closeFunction}>
          Close <span>&#10005;</span>
        </button>
      </div>

      <p className='modal-message-text'>
        {props.messageText
          ? props.messageText
          : 'Customize your message with messageText property'}
      </p>
    </div>
  );

  let finalProps = { ...defaultProps, ...props };
  return (
    <div className='react-simple-modal-container'>
      <button onClick={finalProps.openFunction}>{finalProps.btnText}</button>
      {finalProps.open ? (
        <BmModalStructure {...finalProps}></BmModalStructure>
      ) : (
        ''
      )}
    </div>
  );
};

export default BmModal;