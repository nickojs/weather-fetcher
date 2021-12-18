import styled, { css } from 'styled-components';

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

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  min-width: 100px;
`;

export const WeatherTitleContainer = styled.div`
  ${GridBase}
  height: 160px;
`;

export const WeatherTitle = styled.h1`
  text-align: center;
`;
