import { createGlobalStyle } from "styled-components";
import { transparentize } from "polished";

export default createGlobalStyle`

  :root {

    --white: #fafafa;
    --white-transparent: ${transparentize(0.3, "#fafafa")};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: rgba(22, 22, 22, 0.95);
    background-image: url("/wallpaper.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;

    ::-webkit-scrollbar {
      width: 11px;
      height: 11px;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(13deg, #a446d6 14%,#6500d1 64%);
    }
    ::-webkit-scrollbar-thumb:hover{
      background: linear-gradient(13deg, #5e69bd 14%,#9043ba 64%);
    }
    ::-webkit-scrollbar-track{
      background: #222;
    }
  }

  body, input, button, h1 {
    font: 16px Roboto, sans-serif;
    color: var(--white)
  }

  a {
    text-decoration: none;
    color: var(--white)
  }

  #root {
    margin: 0 auto;
  }

  button{
    cursor: pointer
  }
`;
