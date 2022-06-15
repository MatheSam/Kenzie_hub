import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--gray2);
  padding: 9px 16px;
  margin-bottom: 15px;
`

export const Main = styled.main`
  form {
    display: flex;
    flex-direction: column;
    padding: 9px 16px;

    label{
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 10px;
      padding: 8px 13px;
      height: 20px;
      background-color: var(--gray2);
      color: var(--font);
      border: none;
      border-radius: 4px;
    }

    select {
      height: 40px;
      padding-left: 8px;
      background-color: var(--gray2);
      color: var(--font);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    div {
      display: flex;
      gap: 18px;

      >button{
        flex-grow: 2;
      }

      button{
        width: max-content;
      }
    }
  }
`