import styled, { css } from 'styled-components';

export const Container = styled.section<{ bg: string }>`
  width: 300px;
  height: 500px;

  margin: 0 auto;
  text-align: center;
  
  border-radius: 12px;
  border: 1px solid transparent;
  box-shadow: 1px 1px 1px grey;

  background: url(${ ({ bg }) => bg });
  background-position: center;

  * { 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const GridBase = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WeatherInnerContainer = styled.div`
  position: relative;
`;

export const WeatherHeader = styled.div`
  ${GridBase}
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  * { font-family: 'sans-serif'; }
  p { margin: 24px 0; }
  h1, h5 { margin: 0; }
    
  img { 
    width: 50px;
    height: 50px;
  }
`;

export const WeatherDetails = styled.div`
  ${GridBase}
`;

export const WeatherTitleContainer = styled.div`
  ${GridBase}
  height: 160px;
`;

export const WeatherTitle = styled.h1`
  text-align: center;
`;
