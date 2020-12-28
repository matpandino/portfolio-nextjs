import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100vw;
  top: 0px;
  z-index: 4;

  background: rgba(11, 11, 11, 0.99);

  @media screen and (max-width: 760px) {
    background: none;
  }
`;

export const TitleSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 40px;
  top: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin: 0 5px;
  }

  svg {
    color: var(--white-transparent);

    :hover {
      color: var(--white);
      cursor: pointer;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  height: auto;

  min-height: 100px;

  -webkit-box-shadow: 0px 1px 30px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 30px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 30px 2px rgba(0, 0, 0, 0.75);

  div {
    height: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  a {
    cursor: pointer;
    margin: 0px 20px;
    display: block;
    font-weight: bold;

    :hover {
      color: #e7305b;
    }
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

interface BurguerMenuContainerProps {
  shrinked: boolean;
}

export const BurguerMenuContainer = styled.div<BurguerMenuContainerProps>`
  display: none;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;

    height: auto;
    min-height: 100px;
    width: 100%;

    background: rgba(11, 11, 11, 0.99);

    -webkit-box-shadow: 0px 1px 30px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 30px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 30px 2px rgba(0, 0, 0, 0.75);

    div {
      margin-top: ${(props) => (props.shrinked ? '-130px' : '100px')};
      margin-bottom: 10px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 7px;

      width: 100vw;
      cursor: pointer;
      font-weight: bold;

      user-select: none;

      :hover {
        color: #e7305b;
        background: rgba(255, 255, 255, 0.1);
      }
    }

    svg {
      font-size: 30px;
      display: fixed;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 50px;
      top: 35px;

      :hover {
        cursor: pointer;
      }
    }
  }
`;
