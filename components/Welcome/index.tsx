import React from "react";
import Typist from "react-typist";

import {
  WelcomeContainer,
  WelcomeText,
  ProfileImage,
  GradientBorder,
} from "./styles";

const Welcome: React.FC = () => (
  <WelcomeContainer>
    <WelcomeText>
      <Typist cursor={{ show: false }}>
        <h1>Mateus Pandino.</h1>
        <p>
          Fullstack developer. ReactJS, Typescript, Node.js, React Native...
        </p>
        <Typist.Backspace count={47} delay={200} />
        <p>Acredito na tecnologia para transformar o mundo</p>
      </Typist>
    </WelcomeText>

    <GradientBorder>
      <ProfileImage src="/profile.jpeg" alt="Avatar" />
    </GradientBorder>
  </WelcomeContainer>
);

export default Welcome;
