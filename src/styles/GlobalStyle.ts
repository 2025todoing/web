import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    background: linear-gradient(180deg, #87CEEB 0%, #E0F7FF 50%, #FFFFFF 100%);
    min-height: 100vh;
    position: relative;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 80% 40%, rgba(255, 255, 255, 0.2) 0%, transparent 20%);
    pointer-events: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    border: none;
    outline: none;
  }
`; 