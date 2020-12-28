import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  > div {
    margin-top: 100px;
  }
`;

export const ExperiencesContainer = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  h3 {
    display: flex;
    align-items: baseline;
    text-align: center;
    margin-bottom: 10px;

    svg {
      margin-right: 10px;
    }
  }

  > div {
    h4 {
      display: inline;
      font-size: 16px;
      color: ${lighten(0.7, '#424242')};
      margin-right: 10px;
    }

    i {
      color: ${lighten(0.5, '#424242')};
    }

    .desc-exp {
      margin-top: 7px;
      line-height: 20px;
    }

    background: rgba(22, 22, 22, 0.95);
    padding: 15px;
    border-radius: 10px;

    line-height: 30px;
    margin-bottom: 25px;
  }

  div + div {
    margin-top: 25px;
  }
`;

export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    margin-top: 30px;

    li {
      list-style: none;
      padding: 10px;
      margin: 10px;
    }
  }
`;

interface KnowledgeBox {
  bgColor?: string;
}

export const KnowledgeBox = styled.li<KnowledgeBox>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 10px;

  cursor: pointer;

  background: ${(props) =>
    props.bgColor ? props.bgColor : 'rgba(22, 22, 22, 0.95)'};

  transition: 0.15s all ease;

  margin-top: 50px;

  :hover {
    margin-top: 0px;
    background: ${(props) =>
      props.bgColor
        ? lighten(0.1, props.bgColor)
        : lighten(0.1, 'rgba(22, 22, 22, 0.95)')};
  }

  svg {
    font-size: 37px;
    margin-bottom: 7px;
  }
`;
