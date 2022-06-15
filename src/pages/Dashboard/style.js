import styled from "styled-components";


const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  margin: 40px 0px;
  width: 400px;
  padding: 0px 15px;

  header {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: inherit;
    margin-bottom: 40px;

    .firstHeader{
      padding-bottom: 30px;
      border-bottom: 1px solid var(--gray1);
      display: flex;
      justify-content: space-between;
      align-items: center;

      button{
        background: var(--gray1);
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        transition: .3s;

        :hover{
          background: var(--gray3)
        }
      }
    }

    .secondHeader{
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding-bottom: 30px;
      border-bottom: 1px solid var(--gray1);

      h1{
        font-size: 1.3rem;
      }

      p{
        font-size: 0.8rem;
        color: var(--gray3)
      }
    }
  };

  section{
    display: flex;
    flex-direction: column;
    width: inherit;
    gap: 30px;

    .addTech{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
      color: var(--font);

      .addBtn{
        cursor: pointer;
        color: var(--gray3);
        width: 30px;
        height: 30px;
        transition: .3s;

        :hover{
          color: var(--gray4)
        }
      }
    }

    .techs {
      display: flex;
      flex-direction: column;
      background-color: var(--gray1);
      border-radius: 4px;
      padding: 22px 9px;
      gap: 16px;

      .tech{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--black);
        border-radius: 4px;
        padding: 12px;
        transition: .3s;

        :hover{
          cursor: pointer;
          background-color: var(--gray2);
        }

        h3 {
          font-size: 0.8rem;
          color: var(--font)
        }

        div {
          display: flex;
          gap: 14px;
          align-items: center;
          color: var(--gray3);
          transition: .3s;

          h5 {
            font-size: 0.7rem;
          }

          .delBtn:hover{
            cursor: pointer;
            color: var(--gray4)
          }

        }
      }
    }
  }

  @media (min-width: 800px) {
    width: 800px;
  }
`

export { Main }