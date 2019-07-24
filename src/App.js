import React from 'react';
import './sass/main.scss';
import Sprite from './img/sprite.svg';

function App() {
  return (
    <div className="container">
      <div className="sidebar">sidebar</div>
      <header className="header">header</header>
      <div className="realtors">realtors</div>
      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${Sprite}#icon-home`} />
          </svg>
          <h4 className="heading-4 heading-4--dark">Tamastudy is very good</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            aspernatur. Aliquid expedita, quae pl
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${Sprite}#icon-chevron-down`} />
          </svg>
          <h4 className="heading-4 heading-4--dark">Tamastudy is very good</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            aspernatur. Aliquid expedita, quae pl
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${Sprite}#icon-bookmark`} />
          </svg>
          <h4 className="heading-4 heading-4--dark">Tamastudy is very good</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            aspernatur. Aliquid expedita, quae pl
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
          </svg>
          <h4 className="heading-4 heading-4--dark">Tamastudy is very good</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            aspernatur. Aliquid expedita, quae pl
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${Sprite}#icon-mail`} />
          </svg>
          <h4 className="heading-4 heading-4--dark">Tamastudy is very good</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            aspernatur. Aliquid expedita, quae pl
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={`${Sprite}#icon-map`} />
          </svg>
          <h4 className="heading-4 heading-4--dark">Tamastudy is very good</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            aspernatur. Aliquid expedita, quae pl
          </p>
        </div>
      </section>
      <div className="story__pictures">story pictures</div>
      <div className="story__content">story content</div>
      <section className="homes">Homes</section>
      <section className="gallery">gallery</section>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
