import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
}

:root{
  --black: #121214;
  --gray1: #212529;
  --gray2: #343B41;
  --gray3: #868E96;
  --gray4: #DDDFE0;
  --pink1: #FF577F;
  --pink2: #59323F;
  --font: #F8F9FA;
  --placeHolder: #676F76;
}

body{
  background: var(--black);
  color: var(--font);
  font-family: 'Inter', sans-serif;
}

label{
  font-family: 'Inter', sans-serif;
  color: var(--font);
  font-weight: 400;
  font-size: 0.7rem;
}

::placeholder{
  color: var(--placeHolder);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
}

button{
  font-size: 1rem;
  font-weight: 500;
  color: white;
  cursor: pointer
}

h1, h2, h3, h4, h5, p{
  font-family: 'Inter', sans-serif;
}


`