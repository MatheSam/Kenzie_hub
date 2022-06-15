import { Main } from "../Login/style";
import styled from "styled-components";


export const MainCadaster = styled(Main)`

  margin: 200px 0; 

  > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 30px;

    img {
      margin: 0px;
    }

    button {
      background-color: var(--gray1);
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      transition: .3s;

      :hover{
        background-color: var(--gray3);
      }
    }
  }

  label {
    margin-top: 10px;
  }

  section p {
    margin-bottom: 23px;
  }

  select{
    margin-bottom: 16px;
    padding: 8px 12px;
    background-color: var(--gray2);
    border: none;
    border-radius: 4px;
    color: var(--font)
  }

  option{
    color: var(--gray3)
  }

  button{
    margin: 0px;
  }
`