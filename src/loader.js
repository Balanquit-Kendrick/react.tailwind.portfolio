import { InfinitySpin } from "react-loader-spinner";
const LoaderComp = () => {
    return (
      <InfinitySpin
      visible={true}
      width="200"
      color="#35B4EC"
      ariaLabel="infinity-spin-loading"
      />
    );
};  
export default LoaderComp;