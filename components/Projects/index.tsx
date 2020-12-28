/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import Project from './Project';

import { ProjectsContainer } from './styles';

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projetos</h2>
      <Project
        name="Repository Peek"
        description="Simples página para adicionar respositórios a uma lista e visualizá-los individualmente com seus issues."
        repositoryUrl="https://github.com/matpandino/repository-peek"
        technologies={{ nodejs: true, reactjs: true }}
        images={[
          {
            url:
              'https://camo.githubusercontent.com/a97c3879d651975d6d60335f7e977db9d4b73570/68747470733a2f2f692e696d6775722e636f6d2f7356706157736f2e706e67',
            alt: 'Image 1',
          },
          {
            url:
              'https://camo.githubusercontent.com/0b8e58f775830f1a1418ff0da75830098cd90fea/68747470733a2f2f692e696d6775722e636f6d2f6d3271627235462e706e67',
            alt: 'Image 2',
          },
        ]}
      />

      <Project
        name="Spotify UI Clone"
        description="Simple Spotify UI Clone."
        repositoryUrl="https://github.com/matpandino/spotify-ui-clone"
        technologies={{
          nodejs: true,
          reactjs: true,
          electron: true,
          typescript: true,
        }}
        images={[
          {
            url:
              'https://github.com/matpandino/spotify-ui-clone/raw/master/.github/spotify-clone.jpg',
            alt: 'Image 1',
          },
        ]}
      />
    </ProjectsContainer>
  );
};

export default Projects;
