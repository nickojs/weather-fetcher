import { LoadingProps, LoadingType } from "../../../interfaces";

export default ({ type }: LoadingProps): JSX.Element => { 
  const loadingCopy = () => {
    switch (type) {
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
