import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import { FaGithub, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { IoLogoElectron } from 'react-icons/io5';

import 'react-awesome-slider/dist/styles.css';

import { Container, Techs, ProjectImages } from './styles';

interface ITechs {
  reactjs?: boolean;
  nodejs?: boolean;
  typescript?: boolean;
  electron?: boolean;
}

interface ImageData {
  url: string;
  alt: string;
}

interface ProjectProps {
  name: string;
  description: string;
  repositoryUrl?: string;
  images?: ImageData[];
  technologies?: ITechs;
}

const Project: React.FC<ProjectProps> = ({
  children,
  name,
  description,
  repositoryUrl,
  images,
  technologies,
}) => {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{description}</p>
      <br />
      {technologies && (
        <Techs>
          <b>Principais tecnologias utilizadas:</b>
          <ul>
            {technologies?.typescript && (
              <li>
                Electron
                <IoLogoElectron color="#8ED1FC" />
              </li>
            )}

            {technologies?.reactjs && (
              <li>
                ReactJS
                <FaReact color="#4287f5" />
              </li>
            )}

            {technologies?.electron && (
              <li>
                Typescript
                <SiTypescript color="#007acc" />
              </li>
            )}

            {technologies?.nodejs && (
              <li>
                Node.js
                <FaNodeJs color="#02d136" />
              </li>
            )}
          </ul>
        </Techs>
      )}

      <br />
      <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub />
        Repositório do projeto
      </a>
      <br />
      <ProjectImages>
        <AwesomeSlider
          buttonContentLeft={false}
          bullets={false}
          organicArrows={images?.length !== 1}
          className="aws-btn"
        >
          {images &&
            images?.map((image: ImageData) => (
              <div>
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
        </AwesomeSlider>
      </ProjectImages>
    </Container>
  );
};

export default Project;
