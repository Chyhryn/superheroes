import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeCircles
      height="80"
      width="80"
      color="#035DC2"
      wrapperStyle={{
        justifyContent: "center",
        padding: 20,
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};
