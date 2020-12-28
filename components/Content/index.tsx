/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Container } from './styles';

import Welcome from '../Welcome';
import Projects from '../Projects';
import AboutMe from '../AboutMe';

const Content: React.FC = () => {
  return (
    <Container>
      <Welcome />
      <AboutMe />
      <Projects />
    </Container>
  );
};

export default Content;
