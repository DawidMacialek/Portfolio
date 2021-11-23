import React, { useState } from 'react';
import './gameProjects.scss';
import 'material-icons/iconfont/material-icons.css';
import { games } from '../../../../data/Projects/games.js';

function GameProjects() {
  const [infoOpen, setInfoOpen] = useState('');
  console.log(games[0].name);

  const content = games.map((item) => {
    return (
      <>
        <div onClick={() => setInfoOpen(item.name)}>
          <img src={item.miniPicture} alt={`gra ${item.name}`} />
          <h3>{item.name}</h3>
        </div>

        <section className={infoOpen === item.name ? 'info active' : 'info'}>
          <h3>{item.name}</h3>
          <div className='content-info'>
            <p>{item.description}</p>
            <img src={item.Picture} alt={`gra ${item.name}`} />
          </div>
          <span
            onClick={() => setInfoOpen('')}
            class='material-icons-round arrow close'
          >
            close
          </span>
          <div className='links'>
            <a href={item.playHref} target='_blank' rel='noreferrer noopener'>
              <span className='material-icons-outlined play'>
                play_circle_outline
              </span>
            </a>
            <a href={item.gitHubHref} target='_blank' rel='noreferrer noopener'>
              <span className='material-icons-outlined code'>code</span>
            </a>
          </div>
        </section>
      </>
    );
  });
  return (
    <div className='game-project-container'>
      {content}

      {/* <div onClick={() => setInfoOpen('hangman')}>
        <img src={hangman} alt='gra wisielec' />
        <h3>Wisielec</h3>
      </div>

      <section className={infoOpen === 'hangman' ? 'info active' : 'info'}>
        <h3>Wisielec</h3>
        <div className='content-info'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo
            voluptas dolor blanditiis ipsum sunt cumque repudiandae deleniti
            facilis obcaecati officia nam suscipit, delectus consequatur quam
            ex. Excepturi, modi ducimus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis eaque cumque quo placeat laboriosam.
            Doloremque sequi odio libero voluptates architecto error, unde
            veritatis debitis quos ad id quisquam, explicabo at?
          </p>
          <img src={games[0].Picture} alt='' />
        </div>
        <span
          onClick={() => setInfoOpen('')}
          class='material-icons-round arrow close'
        >
          close
        </span>
        <div className='links'>
          <a href='http://'>
            <span className='material-icons-outlined play'>
              play_circle_outline
            </span>
          </a>
          <a href='http://'>
            <span className='material-icons-outlined code'>code</span>
          </a>
        </div>
      </section>

      <div onClick={() => setInfoOpen('saper')}>
        <img src={saper} alt='gra saper' />
        <h3>Saper</h3>
      </div>

      <section className={infoOpen === 'saper' ? 'info active' : 'info'}>
        <h3>Saper</h3>
        <div className='content-info'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo
            voluptas dolor blanditiis ipsum sunt cumque repudiandae deleniti
            facilis obcaecati officia nam suscipit, delectus consequatur quam
            ex. Excepturi, modi ducimus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis eaque cumque quo placeat laboriosam.
            Doloremque sequi odio libero voluptates architecto error, unde
            veritatis debitis quos ad id quisquam, explicabo at?
          </p>
          <img src={saperInfo} alt='' />
        </div>
        <span
          onClick={() => setInfoOpen('')}
          class='material-icons-round arrow close'
        >
          close
        </span>
        <div className='links'>
          <a href='http://'>
            <span className='material-icons-outlined play'>
              play_circle_outline
            </span>
          </a>
          <a href='http://'>
            <span className='material-icons-outlined code'>code</span>
          </a>
        </div>
      </section>

      <div onClick={() => setInfoOpen('memory')}>
        <img src={memory} alt='gra wisielec' />
        <h3>Memory</h3>
      </div>

      <section className={infoOpen === 'memory' ? 'info active' : 'info'}>
        <h3>memory</h3>
        <div className='content-info'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo
            voluptas dolor blanditiis ipsum sunt cumque repudiandae deleniti
            facilis obcaecati officia nam suscipit, delectus consequatur quam
            ex. Excepturi, modi ducimus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis eaque cumque quo placeat laboriosam.
            Doloremque sequi odio libero voluptates architecto error, unde
            veritatis debitis quos ad id quisquam, explicabo at?
          </p>
          <img src={saperInfo} alt='' />
        </div>
        <span
          onClick={() => setInfoOpen(false)}
          className='material-icons-round arrow close'
        >
          close
        </span>
        <div className='links'>
          <a href='http://'>
            <span className='material-icons-outlined play'>
              play_circle_outline
            </span>
          </a>
          <a href='http://'>
            <span className='material-icons-outlined code'>code</span>
          </a>
        </div>
      </section> */}
    </div>
  );
}

export default GameProjects;
