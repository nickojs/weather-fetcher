import styled, { css } from 'styled-components';

const GridBase = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WeatherContainer = styled.section`
  max-width: 400px;
  min-width: 300px;
  
  margin: 0 auto;
  padding: 40px 12px;
  
  background: #fafafa;
`;

export const WeatherHeader = styled.div`
  ${GridBase}
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    margin: 12px 0 ;
  }
  
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
`;
