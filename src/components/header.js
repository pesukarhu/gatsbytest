import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styles from './header.module.scss';
import { Location } from '@reach/router';

// Typewriter from: https://stackoverflow.com/a/58053492
const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
};

function TypeWriter({ messages }) {
  const [state, setState] = useState({
    text: '',
    message: '',
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = '';
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (state.text === '') {
      setState(cs => ({
        ...cs, // cs means currentState
        loopNum: cs.loopNum + 1,
        message: messages,
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <span>
      {state.text}
      <span id="cursor" className={styles.underline}>
        _
      </span>
    </span>
  );
}

const HeaderLink = props => (
  <Link className={styles.links__link} to={props.to} data-text={props.text}>
    <TypeWriter messages={props.text} />
  </Link>
);

export default () => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>Pastel.</h1>

    <div className={styles.header__links}>
      <Location>
        {({ location }) => {
          if (location.pathname === '/') {
            return <HeaderLink to="/" text="You're home." />;
          } else {
            return <HeaderLink to="/" text="Return home." />;
          }
        }}
      </Location>
    </div>
  </header>
);
