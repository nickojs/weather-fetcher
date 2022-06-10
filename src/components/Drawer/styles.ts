import styled from "styled-components";

export const Drawer = styled.section<{ show: boolean}>`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  width: 100%;
  height: ${({ show }) => show ? "156px" : "0px"};

  transition: 1s height;

  background-color: rgba(0, 0, 0, .75);
  border-radius: 12px;
  overflow: hidden;
`;

export const DrawerGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const LinkButton = styled.button<{ show?: boolean }>`
  margin: 0;
  padding: 0;
  
  text-decoration: underline;
  
  cursor: pointer;
  border: none;
  background: transparent;

  opacity: ${({ show }) => show ? 0 : 1};

  transition: .35s opacity;
`;
