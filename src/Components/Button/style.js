import styled from "styled-components";

export const ContainerButton = styled.button`
  background: ${({ color }) => (color == "pink" ? "#FF577F" : color == "pink2" ? "#59323F" : "#868E96")};
  border: none;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 20px 0px;
  transition: .3s;

  :hover{
    background: ${({ color }) => (color == "pink" ? "#FF427F" : color == "pink2" ? "#FF577F" : "#343B41")};
  }
`