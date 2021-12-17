export enum LoadingType {
  NETWORK, 
  USERINPUT,
}

interface LoadingProps {
  loading: LoadingType,
}

export default ({ loading }: LoadingProps): JSX.Element => { 
  const loadingCopy = () => {
    switch (loading) {
    case LoadingType.USERINPUT:
      return 'Waiting on user input';
    case LoadingType.NETWORK:
      return 'Fetching data...';
    default:
      throw new Error('[loadingCopy] unknown type value received');
    }
  };

  return (
    <p>
      {loadingCopy()}
    </p>
  );
};
