import { ThreeCircles } from "react-loader-spinner";
import { Spinner } from "./Loader.styled.js";
export const Loader = () => {
  return (
    <Spinner>
      <ThreeCircles
        height="100"
        width="100"
        color="#f59256"
        display="block"
        wrapperStyle={{
          display: "block",
          textAlign: "center",
          left: "50%",
          right: "50%",
          top: "50%",
          bottom: "50%",
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="rotating"
        innerCircleColor=""
        middleCircleColor="rotating"
      />
    </Spinner>
  );
};
