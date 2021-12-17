export enum ErrorType {
  NETWORK, 
  REFUSED,
}

export interface ErrorCardProps {
  type: ErrorType;
  extraInfo?: string;
}

export default ({ type, extraInfo }: ErrorCardProps): JSX.Element => { 
  const errorCopy = () => {
    switch (type) {
    case ErrorType.NETWORK:
      return `Network Error: ${extraInfo}`;
    case ErrorType.REFUSED:
      return 'User failed to provide their geolocation data';
    default:
      throw new Error('[errorCopy] unknown type value received');
    }
  };

  return (
    <p>
      {errorCopy()}
    </p>
  );
};
