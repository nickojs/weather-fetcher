import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

export interface ReloadButtonBaseProps { 
  className?: string;
  onClick?: () => void;
  loading: boolean;
}

const ReloadButtonBase = ({ className, loading, onClick }: ReloadButtonBaseProps) => (
  <button className={className} onClick={onClick} >
    <FontAwesomeIcon icon={faSyncAlt} />
  </button>
);

const animation = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(365deg);
  }
`;

const animationCss = css`
  animation: ${animation} 1s infinite ease-out;
`;

const disabledCss = css`
  cursor: not-allowed;
  user-select: none;
`;

export default styled(ReloadButtonBase)<{ loading: boolean }>`
  position: absolute;
  top: 0; right: 0;

  font-size: 2rem;
  transform: rotate(0deg);
  
  cursor: pointer;
  
  border: none;
  background: transparent;
  ${({ loading }) => loading && disabledCss};

  & svg {
    ${({ loading }) => loading && animationCss};
  }
`;
