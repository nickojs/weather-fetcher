import styled, { css, keyframes } from 'styled-components';

/*
  In an IRL application, I'd probably opt for libs like stitches and radix to handle the Design System implementation
*/

const verticalSpace = css`
  margin-top: 12px;
  margin-bottom: 12px;
`;

const backdropTemp = css`
  padding: 6px;
`;

export const Container = styled.section<{ bg: string }>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 300px;
  height: 500px;

  margin: 0 auto;
  padding: 12px 0;

  text-align: center;
  
  border-radius: 12px;
  border: 1px solid transparent;
  box-shadow: 1px 1px 1px grey;

  background: url(${ ({ bg }) => bg });
  background-position: center;
  
  // put this reset into a global scope afterwards
  * { 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
    padding: 0;
    color: white;
  }
`;

export const TitleWrapper = styled.section`
  ${verticalSpace}
`;

export const CityTitle = styled.h1`
  font-size: 32px;
`;

export const Temp = styled.h2`
  font-size: 64px;
`;

export const TempDetailsWrapper = styled.section`
  ${verticalSpace}
  p {
    font-weight: bold;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 12px;
  background-color: rgba(0, 0, 0, .666);
  
  p{
    font-weight: bold;
  }
`;

export const MinMaxWrapper = styled.section`
  margin: 0 auto;
  max-width: 200px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  ${verticalSpace}
`;

export const MinWrapper = styled.div`
  ${backdropTemp}
  * { color: #020EF0; }
`;

export const MaxWrapper = styled.div`
  ${backdropTemp}
  * { color: #BD1600; }
`;

const anim = keyframes`
  from{
    transform: rotate(0deg);
  }to {
    transform: rotate(365deg);
  }
`;

export const Menu = styled.button<{ loading?: boolean }>`
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 3;

  margin: 0;
  padding: 6px;
  
  text-decoration: underline;
  
  cursor: pointer;
  border: none;
  background: transparent;
  
  width: 100%;
  animation: ${({ loading }) => loading ? anim : ''} 1s infinite;
`;
