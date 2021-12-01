import React, { useState, useRef, useEffect } from 'react';
import './item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faPlayCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

function Item({
  name,
  miniPicture,
  description,
  Picture,
  playHref,
  gitHubHref,
}) {
  const [infoOpen, setInfoOpen] = useState('');
  const infoRef = useRef();

  const handleCloseClick = () => {
    setInfoOpen('');
  };

  useEffect(() => {
    function checkOutsideClick(event) {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setInfoOpen('');
      }
    }
    document.addEventListener('mousedown', checkOutsideClick);
    return () => document.removeEventListener('mousedown', checkOutsideClick);
  }, [infoOpen]);

  return (
    <>
      <div className='item' onClick={() => setInfoOpen(name)}>
        <img src={miniPicture} alt={`${name}`} />
        <h4>{name}</h4>
      </div>
      <div ref={infoRef} className={infoOpen === name ? 'info active' : 'info'}>
        <div className='info-header'>
          <h3>{name}</h3>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleCloseClick}
            className='close'
          />
        </div>
        <div className='info-content'>
          <p>{description}</p>
          <img src={Picture} alt={`gra ${name}`} />
        </div>
        <div className='info-footer'>
          <a href={playHref} target='_blank' rel='noreferrer noopener'>
            <FontAwesomeIcon icon={faPlayCircle} className='icons' />
          </a>
          <a href={gitHubHref} target='_blank' rel='noreferrer noopener'>
            <FontAwesomeIcon icon={faCode} className='icons' />
          </a>
        </div>
      </div>
    </>
  );
}

export default Item;
