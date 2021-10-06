import React from 'react';

const Contacts = () => (
  <ul className="social-networks">
    <li className="social-networks__item">
      <a
        href="mailto:julien@julien-maze.com"
        className="social-networks__link"
        title="julien@julien-maze.com"
      >
        <i className="fa fa-fw fa-envelope social-networks__icon"></i>
        <span className="social-networks__text">Email</span>
      </a>
    </li>
    <li className="social-networks__item">
      <a
        href="http://github.com/djorak"
        title="github.com/djorak"
        className="social-networks__link"
      >
        <i className="fa fa-fw fa-github social-networks__icon"></i>
        <span className="social-networks__text">Github</span>
      </a>
    </li>
    <li className="social-networks__item">
      <a
        href="http://www.twitter.com/djorak"
        title="twitter.com/djorak"
        className="social-networks__link"
      >
        <i className="fa fa-fw fa-twitter social-networks__icon"></i>
        <span className="social-networks__text">Twitter</span>
      </a>
    </li>
    <li className="social-networks__item">
      <a
        href="http://linkedin.com/in/julienmaze"
        title="linkedin.com/in/julienmaze"
        className="social-networks__link"
      >
        <i className="fa fa-fw fa-linkedin social-networks__icon"></i>
        <span className="social-networks__text">LinkedIn</span>
      </a>
    </li>
  </ul>
);

export default Contacts;
