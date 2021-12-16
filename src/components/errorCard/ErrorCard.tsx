export interface ErrorCardProps {
  error: string;
}

export default ({ error }: ErrorCardProps): JSX.Element => { 
  return (
    <p>
      {error}
    </p>
  );
};
