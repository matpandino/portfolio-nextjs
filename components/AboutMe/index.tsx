import React from 'react';

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGraduationCap,
  FaBriefcase,
  FaGitAlt,
} from 'react-icons/fa';

import { SiTypescript } from 'react-icons/si';

import {
  Container,
  ExperiencesContainer,
  KnowledgeContainer,
  KnowledgeBox,
} from './styles';

const AboutMe: React.FC = () => {
  return (
    <Container id="sobre-mim">
      <ExperiencesContainer>
        <h2>Experiências</h2>
        <div>
          <h3>
            <FaBriefcase />
            Profissionais
          </h3>
          <div>
            <div className="header-exp">
              <h4>Fullstack Software Developer</h4>
              <i>maio 2020 - atualmente</i>
            </div>
            <i>
              <b>Softplan Planejamentos e Sistemas</b>
            </i>
            <p className="desc-exp">
              Desenvolvimento de aplicações. Realizando todas as partes de
              desenvolvimento: design, construção do backend, frontend, testes e
              deploy. Dentro da minha stack utilizei principalmente
              Typescript/Javascript. Optando por frameworks como ReactJS no
              Frontend e Express.js no Backend.
            </p>
          </div>
          <div>
            <div className="header-exp">
              <h4>Técnico de Infraestrutura e TI</h4>
              <i>maio 2018 - abril 2020</i>
            </div>
            <i>
              <b>Softplan Planejamentos e Sistemas</b>
            </i>
            <p className="desc-exp">
              Monitoramento via Zabbix e Grafana. Resolução de alertas que vem a
              ocorrer. Realizei também automação de atividades, criação de
              scripts e ferramentas de apoio.
              <br />
              Aprendi muito sobre infraestrutura, monitoramento e pós produção.
            </p>
          </div>
        </div>
        <div>
          <h3>
            <FaGraduationCap />
            Acadêmica + Cursos
          </h3>
          <div>
            <div className="header-exp">
              <h4>Sistemas de Informação</h4>
              (2018/2 - 2021/2)
            </div>
            <i>
              <b>Estácio de Sá</b>
            </i>
          </div>
          <div>
            <div className="header-exp">
              <h4>Sistemas de Informação</h4>
              (2017/1 - 2018/1)
            </div>
            <i>
              <b>UNISUL - Universidade do Sul de Santa Catarina</b>
            </i>
          </div>
        </div>
      </ExperiencesContainer>

      <KnowledgeContainer>
        <h2>Conhecimentos</h2>
        <ul>
          <KnowledgeBox>
            <SiTypescript color="#007acc" />
            Typescript
          </KnowledgeBox>
          <KnowledgeBox>
            <FaReact color="#4287f5" />
            React
          </KnowledgeBox>
          <KnowledgeBox>
            <FaNodeJs color="#02d136" />
            Node.js
          </KnowledgeBox>
          <KnowledgeBox>
            <FaDocker color="#00c9e8" />
            Docker
          </KnowledgeBox>
          <KnowledgeBox>
            <FaGitAlt color="#F1502F" />
            Git
          </KnowledgeBox>
          <li>
            Styled Components, Socket.io, Express.js, noSQL, SQL, Zabbix,
            Grafana...
          </li>
        </ul>
      </KnowledgeContainer>
    </Container>
  );
};

export default AboutMe;
