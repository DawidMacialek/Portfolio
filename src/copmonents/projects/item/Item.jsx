import React, { useState, useRef, useEffect } from 'react';
import 'material-icons/iconfont/material-icons.css';
import './item.scss';

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
      <div className='div' onClick={() => setInfoOpen(name)}>
        <img src={miniPicture} alt={`${name}`} />
        <h4>{name}</h4>
      </div>
      <div ref={infoRef} className={infoOpen === name ? 'info active' : 'info'}>
        <div className='info-header'>
          <h3>{name}</h3>
          <span
            onClick={handleCloseClick}
            className='material-icons-round arrow close'
          >
            close
          </span>
        </div>
        <div className='content-info'>
          <p>{description}</p>
          <img src={Picture} alt={`gra ${name}`} />
        </div>
        <div className='info-footer'>
          <a href={playHref} target='_blank' rel='noreferrer noopener'>
            <span className='material-icons-outlined icon'>
              play_circle_outline
            </span>
          </a>
          <a href={gitHubHref} target='_blank' rel='noreferrer noopener'>
            <span className='material-icons-outlined icon'>code</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Item;
