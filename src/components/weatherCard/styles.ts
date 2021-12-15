import styled, { css } from 'styled-components';

const GridBase = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WeatherContainer = styled.section`
  max-width: 600px;
  min-width: 300px;
  
  margin: 0 auto;
  padding: 0 20px;
  
  background: #fafafa;
`;

export const WeatherHeader = styled.div`
  ${GridBase}
`;

export const WeatherDetails = styled.div`
${GridBase}
`;
