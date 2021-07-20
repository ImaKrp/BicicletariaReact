import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  box-sizing: border-box;
}

*:focus {
  outline-style: none;
}

html {
  --white: #fafafa;
  --color-text: #0e0e0f;
  --color-header: #262626;
  --color-card-border: #f1f1f1;

  --purple: #6f4bc3;
  
  --red: #e83f5b;
  --light-blue: #e0ecff;

  --input: #202024;
  --overlay: #040911;
  --grey-dark: #202024;

  font-size: 62.5%;
}

body {
  height: 100vh;
  width: 100vw;
  background-color: var(--white);
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

.sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}



input::placeholder{
  font-size: 14px;
  color: var(--black);
}

/* width */
::-webkit-scrollbar {
  width: 0;
}

h1, h2, h3, h4, h5, h6, span, p{
  cursor: default;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
  font-family: "Poppins", sans-serif;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 300;
  -webkit-text-fill-color: var(--white);
  -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0.25) inset;
  transition: background-color 5000s ease-in-out 0s;
}
`;
