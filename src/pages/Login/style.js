import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0px 12px;
  justify-content: center;
  height: 100vh;
  align-items: center;

  img{
    width: 100px;
    height: 14px;
    margin-bottom: 20px;
  }

  section{
    background-color: var(--gray1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 36px 18px 26px 18px;
    border-radius: 4px;

    h2 {
      margin-bottom: 20px;
      font-size: 1rem;
      color: var(--font)
    }

    form {
      display: flex;
      width: 300px;
      flex-direction: column;

      label {
        color: var(--font);
        margin-bottom: 15px;
      }

      input {
        padding: 8px 12px;
        background-color: var(--gray2);
        border: none;
        border-radius: 4px;
        color: var(--font);
      }

      span {
        margin-top: 2px;
        color: red;
        font-size: 0.8rem;
      }

      >span {
        margin-bottom: 20px;
      }

      > button{
        margin-top: 20px;
      }
    }
    
    p {
      font-size: 0.7rem;
      color: var(--gray3)
    }
  }
`