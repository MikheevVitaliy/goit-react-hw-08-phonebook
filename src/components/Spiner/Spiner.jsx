import { MutatingDots } from 'react-loader-spinner';

export const Spiner = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#80d29fa4"
      secondaryColor="#80d29fa4"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      visible={true}
    />
  );
};
