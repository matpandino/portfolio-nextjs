import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background: rgba(22, 22, 22, 0.95);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;

  h3 {
    font-size: 25px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;
    font-weight: bold;
  }

  a {
    display: flex;
    justify-content: center;
    width: 200px;
    padding: 7px;
    background: #e7305b;
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    border-radius: 5px;

    :hover {
      background: ${lighten(0.1, '#e7305b')};
    }

    :active {
      background: ${darken(0.1, '#e7305b')};
    }

    svg {
      margin-right: 6px;
    }
  }
`;

export const ProjectImages = styled.div`
  background: ${transparentize(0.2, '#111')};

  .aws-btn {
    --slider-transition-duration: 862ms;
    --organic-arrow-thickness: 3px;
    --organic-arrow-border-radius: 20px;
    --organic-arrow-height: 20px;
    --organic-arrow-color: #fff;
    --control-button-width: 14%;
    --control-button-height: 25%;
    --control-button-background: transparent;
    --control-bullet-color: #f46b34;
    --control-bullet-active-color: #cf5b2c;
    --loader-bar-color: #851515;
    --loader-bar-height: 6px;
  }

  img {
    max-height: auto;
    max-width: 100%;
  }
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: column;

  b {
    margin-bottom: 7px;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      align-items: center;
      margin-left: 5px;

      margin-bottom: 2px;

      svg {
        margin-left: 5px;
      }
    }
  }
`;
