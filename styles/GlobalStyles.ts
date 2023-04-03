/* eslint-disable prettier/prettier */
import {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components';

interface GlobalStyleProps {
  lock: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    overflow: ${(props): string => (props.lock === true ? 'hidden' : 'auto')};
  }


  body, input, button {
    font-size: 14px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;

  }

  ul {
    list-style:none;
  }

  li {
    list-style-type: none;
    font-weight: 700;
    font-family: 'Source Sans Pro', Arial;
    font-size: 30px;
  }

  a {
    text-decoration:none;
  }

  @keyframes loadAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity:1
    }
  }

  ${(props): FlattenSimpleInterpolation =>
    props.theme === 'dark'
      ? css`
          body {
            background-color: #000;
            color: #fafafa;
          }

          p {
            color: #fafafa;
          }

          a {
            color: #fafafa;
          }

          input,
          textarea {
            border: 1px solid #383838;
            background-color: #383838;
            color: #fafafa;
          }
          sgv {
            color: #181818;
          }
          #grey-text {
            color: #181818;
          }
        `
      : css`
          body {
            color: #000;
            background-color: #fafafa;
          }

          p {
            color: #000;
          }

          a {
            color: #000;
          }

          input,
          textarea {
            border: 1px solid #181818;
            background-color: #181818;
            color: #fafafa;
          }

          svg {
            color: #181818;
          }

          #grey-text {
            color: #181818;
          }
        `}
`;
