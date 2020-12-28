import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 100px;

  h2 {
    font-size: 40px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;

    margin-bottom: 10px;
    width: 100%;
  }

  @media screen and (max-width: 760px) {
    margin: 40px 5px 0px 5px;
  }

  @media screen and (min-width: 760px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    > div {
      flex: 1;
      margin: 5px;
      min-width: 300px;

      margin-top: 10px;
    }
  }
`;
